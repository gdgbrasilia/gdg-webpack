const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'development' }) => {
  console.log('mode', mode);
  return {
    mode,
    output: {
      filename: 'builtwithlove.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({ title: 'GDG 🤖' }),
    ],
  };
};
