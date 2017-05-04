const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = function(env) {
  return Merge(CommonConfig, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  })
}
