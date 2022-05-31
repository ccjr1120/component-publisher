const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common.config.js');

const fileDirectory = path.join(__dirname, '../src/examples/React/app.jsx');

module.exports = merge(common, {
  entry: {
    main: fileDirectory,
  },
});
