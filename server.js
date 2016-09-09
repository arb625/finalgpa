require('babel-register')({
  presets: ['react'],
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var HTMLComponent = require('./HTMLComponent.jsx');

app.use(express.static('public/css'));
app.use(express.static('public/img'));

app.get('/', function (request, response) {
  var props = { title: 'FinalGPA' };
  var html = ReactDOMServer.renderToString(
    React.createElement(HTMLComponent, props)
  );
  response.send(html);
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('listening at port ' + PORT);
});
