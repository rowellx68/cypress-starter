const wp = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    webpackOptions: require('../webpack.config'),
  };

  // this adds a handler for the Cypress event to trigger the transpilation.
  on('file:preprocessor', wp(options));
};
