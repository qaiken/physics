const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    library: 'physicsJumpy',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader')
        }
      }
    ]
  }
};
