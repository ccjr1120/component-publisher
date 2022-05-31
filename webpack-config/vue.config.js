const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common.config');

const fileDirectory = path.join(__dirname, '../src/examples/Vue/main.js');

module.exports = merge(common, {
  entry: {
    main: fileDirectory,
  },
});
