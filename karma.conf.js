module.exports = function (config) {
  config.set({
    basepath: 'public/js/',
    files: [
      {pattern: '*', watched: false},
    ],
    singleRun: true,
    autoWatch: true,

    // preprocessors: {
    //   // add webpack as preprocessor
    //   'test/*_test.js': ['webpack'],
    //   'test/**/*_test.js': ['webpack']
    // },

    // webpack: {
    //   // karma watches the test entry points
    //   // (you don't need to specify the entry option)
    //   // webpack watches dependencies

    //   // webpack configuration
    // },
  });
};
