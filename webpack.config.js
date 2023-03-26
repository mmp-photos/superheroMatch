const path = require('path')

module.exports = {
  entry: './js/index.js',
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, 'dist')
  }
}