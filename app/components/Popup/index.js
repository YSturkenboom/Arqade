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
            <h1>Popup!</h1>
            {content}
            <button
              type="button"
              onClick={() => this.setState({ visible: false })}
            >
              close me
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Popup;
