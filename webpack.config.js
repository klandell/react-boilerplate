const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;

module.exports = {
  context: `${__dirname}/src`,
  target: 'web',
  mode: NODE_ENV,
  devtool: NODE_ENV === 'development' ? 'inline-source-map' : 'none',
  entry: {
    bundle: './entry.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
};
