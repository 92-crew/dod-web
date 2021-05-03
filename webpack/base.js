const HtmlWebpackPlugin = require('html-webpack-plugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
    alias: {
      '@entries': path.resolve(SRC_PATH, 'entries'),
      '@pages': path.resolve(SRC_PATH, 'pages'),
      '@components': path.resolve(SRC_PATH, 'components'),
      '@styles': path.resolve(SRC_PATH, 'styles'),
      '@mock': path.resolve(SRC_PATH, 'mock'),
    },
  },

  entry: {
    app: ['babel-polyfill', path.join(SRC_PATH, 'entries', 'index.jsx')],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['react-refresh/babel'],
        },
        include: SRC_PATH,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },

  plugins: [
    new RefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.html'),
      filename: 'index.html',
    }),
  ],

  output: {
    path: path.join(ROOT_PATH, 'dist'),
    filename: '[name].bundle.js',
  },
};
