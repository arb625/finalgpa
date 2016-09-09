require('babel-register')({
  presets: ['react'],
});

var path = require('path');

// var express = require('express');
// var app = express();
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var HTMLComponent = require('./HTMLComponent.jsx');

// app.use(express.static('public/css'));
// app.use(express.static('public/img'));

// app.get('/', function (request, response) {
//   var props = { title: 'FinalGPA' };
//   var html = ReactDOMServer.renderToString(
//     React.createElement(HTMLComponent, props)
//   );
//   response.send(html);
// });

// var PORT = process.env.PORT || 8080;
// app.listen(PORT, function () {
//   console.log('listening at port ' + PORT);
// });

// var Express = require('express');
// var ReactEngine = require('react-engine');

// var app = Express();

// // create an engine instance
// var engine = ReactEngine.server.create({
//   /*
//     see the complete server options spec here:
//     https://github.com/paypal/react-engine#server-options-spec
//   */
// });

// // set the engine
// app.engine('.jsx', engine);

// // set the view directory
// app.set('views', path.resolve('public/js/src/components'));

// // set jsx or js as the view engine
// // (without this you would need to supply the extension to res.render())
// // ex: res.render('index.jsx') instead of just res.render('index').
// app.set('view engine', 'jsx');

// // finally, set the custom view
// app.set('view', require('react-engine/lib/expressView'));

// app.get('/', function (request, response) {
//   response.render('root')
// });

// var PORT = process.env.PORT || 8080;
// app.listen(PORT, function () {
//   console.log('listening at port ' + PORT);
// });

// const path = require('path')
// const Express = require('express')
// const React = require('react')

// const serverCode = require('./public/js/src/utils/serverCode.js')

// const app = Express()
// const PORT = process.env.PORT || 8080;

// // This is fired every time the server side receives a request
// app.use(serverCode.handleRender)

// // // We are going to fill these out in the sections to follow
// // function handleRender(req, res) {
// //   // Create a new Redux store instance
// //   const store = configureStore();

// //   // Render the component to a string
// //   const html = renderToString(
// //     <Provider store={store}>
// //       <Root />
// //     </Provider>
// //   );

// //   // Send the rendered page back to the client
// //   res.send(renderFullPage(html));
// // }
// // function renderFullPage (html) {
// //   return `
// //     <html>
// //       <head>
// //         <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
// //       </head>
// //       <body>
// //         <div id="root">${html}</div>
// //         <script src="public/js/build/build.js" />
// //       </body>
// //     </html>
// //   `;
// // }

// app.listen(PORT, function () {
//   console.log('listening at port ' + PORT);
// });

var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
