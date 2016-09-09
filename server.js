require('babel-register')({
  presets: ['react'],
});

var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/img')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
