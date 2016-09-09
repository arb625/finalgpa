import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import Root from '../components/Root.jsx';
import configureStore from '../redux/configureStore';

module.exports = {
  handleRender: function (req, res) {
    // Create a new Redux store instance
    const store = configureStore();

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <Root />
      </Provider>
    );

    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(this.renderFullPage(html, preloadedState));   
  },

  renderFullPage: function (html, preloadedState) {
    return `
      <html>
        <head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <script src="/public/js/build/build.js" />
        </body>
      </html>
    `;
  }
}