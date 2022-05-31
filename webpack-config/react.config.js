const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common.config');

const fileDirectory = path.join(__dirname, '../src/examples/React/app.jsx');

module.exports = merge(common, {
  entry: {
    main: fileDirectory,
  },
});
