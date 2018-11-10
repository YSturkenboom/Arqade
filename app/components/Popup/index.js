import React, { Component} 'react';
import { Line } from 'rc-progress';

import './styles.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      seconds: 0,
      // finished: false,
      maxSeconds: 7,
    };
  }

  // componentDidMount() {
  //   const { seconds } = this.state;
  //   if (seconds >= 7) {
  //     this.interval = setInterval(() => this.setState({ seconds: Date.now() }), 1000);
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  open = () => this.setState({ visible: true });

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 0.01,
    }));
  }

  /* eslint-disable */
  render() {
    const { visible, seconds, maxSeconds } = this.state;
    const { content, onClose, background } = this.props;
    const answerBtns = content.answers.map(answer => (
      <button className="answerButton">{answer}</button>
    ));

    if (visible) {
      return (
        <div className="popup">
          <div className="popup_inner" style={background}>
            {seconds >= maxSeconds ? (
              <div className="notime">
                <h4 className="message">Oops, you have to answer within 10 seconds.</h4>
                <p>But don’t worry, for now you can try as many times as you want :)</p>

                <a
                  href="https://zenobruinsma.typeform.com/to/YnIZnL"
                  data-mode="popup"
                  className="cta2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Write a review
                </a>
              </div>
            ) : (
              <div>
                <Line
                  percent={(seconds / maxSeconds) * 100}
                  strokeWidth="4"
                  strokeColor="#000"
                  strokeLinecap="square"
                />

                <h4>{content.question}</h4>
                <div className="btnContainer">{answerBtns}</div>
              </div>
            )}

            <button type="button" className="closeButton" onClick={() => onClose()}>
              x
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Popup;
