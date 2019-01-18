const path = require('path')
const webpack = require('webpack')

const config = {
  entry: path.join(__dirname, './assets/js/boards/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './assets/js/boards')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config
