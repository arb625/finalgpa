import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';

import configureStore from './redux/configureStore';
import Root from './components/Root.jsx';

// for material-ui tap events
injectTapEventPlugin();

// redux store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
