import React, { Component } from 'react';
import { Line } from 'rc-progress';

import './styles.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      seconds: 0,
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
    const { content } = this.props;

    // const Timer = props => {
    //   const { seconds, maxSeconds } = this.props;
    //   const styles = {
    //     width: (seconds / maxSeconds) * 100,
    //   };
    //   return <div className="timer" style={styles} />;
    // };
    if (visible) {
      return (
        <div className="popup">
          <div className="popup_inner">
            <Line
              percent={(seconds / maxSeconds) * 100}
              strokeWidth="4"
              strokeColor="#000"
              strokeLinecap="square"
            />

            <h4>
              Nike is an American corporation specializing in the sale of sports equipment. In which
              state would you find their headquarters?
            </h4>
            {content}
            <button
              type="button"
              className="closeButton"
              onClick={() => this.setState({ visible: false })}
            >
              x
            </button>
            <div className="btnContainer">
              <button className="answerButton">Oregon</button>
              <button className="answerButton">California</button>
              <button className="answerButton">Washington</button>
              <button className="answerButton">New York</button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Popup;
