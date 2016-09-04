// var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/build');
var APP_DIR = path.resolve(__dirname, 'public/js/src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'build.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
};

module.exports = config;
