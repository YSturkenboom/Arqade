import React, { Component } from 'react';
import './styles.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  open = () => this.setState({ visible: true });

  /* eslint-disable */
  render() {
    const { visible } = this.state;
    const { content } = this.props;
    if (visible) {
      return (
        <div className="popup">
          <div className="popup_inner">
            <h4>Nike is an American corporation specializing in the sale of sports equipment. In which state would you find their headquarters?</h4>
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
