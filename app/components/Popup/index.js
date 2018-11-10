import React, { Component, Fragment } from 'react';
import { Line } from 'rc-progress';

import './styles.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      seconds: 0,
      correct: null,
      finished: false,
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

  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 0.01,
    }));
  }

  verifyAnswer = (id, correctAnswerId) => {
    if (id === correctAnswerId) {
      this.setState({ finished: true, correct: true });
    } else {
      this.setState({ finished: true, correct: false });
    }
  }

  /* eslint-disable */
  render() {
    const { visible, seconds, maxSeconds, finished, correct } = this.state;
    const { content, onClose, background } = this.props;
    const answerBtns = content.answers.map((answer, index) => (
      <button className="answerButton" onClick={() => this.verifyAnswer(index, content.correctAnswer)}>{answer}</button>
    ));

    if (visible) {
      if (finished) {
        return (
          <div className="popup">
            <div className="popup_inner" style={background}>
              {correct ? (
                <h4>Lol nice.</h4>
              ) : (
                <h4>Ha you suck</h4>
              )}
              <button type="button" className="closeButton" onClick={() => onClose()}>
                x
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="popup">
          <div className="popup_inner" style={background}>
            {seconds >= maxSeconds ? (
              <Fragment>
                <h4>Oops, you have to answer within 10 seconds.</h4>
                <p>But don’t worry, for now you can try as many times as you want :)</p>
              </Fragment>
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
