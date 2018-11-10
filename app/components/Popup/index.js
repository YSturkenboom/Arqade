import React, { Component } from 'react';
import './styles.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      finished: false
    };
  }

  open = () => this.setState({ visible: true });

  /* eslint-disable */
  render() {
    const { visible } = this.state;
    const { content, onClose, background } = this.props;
    const answerBtns = content.answers.map(answer => <button className="answerButton">{answer}</button>);

    if (visible) {
      return (
        <div className="popup">
          <div className="popup_inner" style={background}>
            <h4>{content.question}</h4>
            <button
              type="button"
              className="closeButton"
              onClick={() => onClose()}
            >
              x
            </button>
            <div className="btnContainer">
              {answerBtns}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Popup;
