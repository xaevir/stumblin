var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, include: __dirname + '/app', loader: "babel-loader"},
      {
        test: /\.(jpg|png|svg|woff)$/,
        loader: 'file-loader',
        options: {
          //limit: 25000,
          //name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        secure: false
      }
    }
  }
};
