import React, { Component } from 'react';
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
  };

  verifyAnswer = (id, correctAnswerId) => {
    if (id === correctAnswerId) {
      this.setState({ finished: true, correct: true });
    } else {
      this.setState({ finished: true, correct: false });
    }
  };

  /* eslint-disable */
  render() {
    const { visible, seconds, maxSeconds, finished, correct } = this.state;
    const { content, onClose, background } = this.props;
    const answerBtns = content.answers.map((answer, index) => (
      <button
        className="answerButton card-btn"
        onClick={() => this.verifyAnswer(index, content.correctAnswer)}
      >
        {answer}
      </button>
    ));

    if (visible) {
      if (finished) {
        return (
          <div className="popup">
            <div className="popup_inner" style={background}>
              {correct ? (
                <div className="notime">
                  <h4 className="message">Wow! That's correct!</h4>
                  <p>Sorry, we can't offer you the discount yet... But if you tell
                    us what you think soon we will!<br /></p>

                  <img src="https://media.giphy.com/media/AszIaSlJKPRX4j2zqP/giphy.gif" alt="gif" />

                  <a
                    href="https://zenobruinsma.typeform.com/to/YnIZnL"
                    data-mode="popup"
                    className="cta2 card-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share your thoughts
                  </a>
                </div>
              ) : (
                <div className="notime">
                  <h4 className="message">Sorry! That is not the right answer.</h4>
                  <p>But don’t worry, for now you can try as many times as you want :)</p>

                  <img src="https://media.giphy.com/media/yoJC2Olx0ekMy2nX7W/giphy.gif" alt="gif" />

                  <a
                    href="https://zenobruinsma.typeform.com/to/YnIZnL"
                    data-mode="popup"
                    className="cta2 card-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share your thoughts
                  </a>
                </div>
              )}
              <button type="button" className="closeButton" onClick={() => onClose()}>
                ×
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="popup">
          <div className="popup_inner" style={background}>
            {seconds >= maxSeconds ? (
              <div className="notime">
                <h4 className="message">Oops, you have to answer within the time limit.</h4>
                <p>But don’t worry, for now you can try as many times as you want :)</p>

                <img src="https://media.giphy.com/media/xUySTEJYS5F1Cayg92/giphy.gif" alt="gif" />

                <a
                  href="https://zenobruinsma.typeform.com/to/YnIZnL"
                  data-mode="popup"
                  className="cta2 card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share your thoughts
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
              ×
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Popup;
