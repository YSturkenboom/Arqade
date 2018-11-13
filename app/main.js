import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { AppContainer } from 'react-hot-loader';
import joystickEmoji from './assets/images/joystick_emoji.png';

import Root from './config/Root';

const render = (Component) => {
  ReactDOM.render(
    <Fragment>
      <AppContainer>
        <Component />
      </AppContainer>
      <Favicon url={joystickEmoji} />
    </Fragment>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
