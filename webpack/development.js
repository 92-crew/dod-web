const apiMocker = require('connect-api-mocker')
const { merge } = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval',

  devServer: {
    port: 4000,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    stats: 'errors-only',
    before: (app) => {
      // todos 전체조회(GET)
      app.use(apiMocker('/api/content/v1/todos', './src/mock/todos'));
      // dod 로그인(POST)
      app.use(apiMocker('/api/v1/member/login', './src/mock/login'));
      // dod 회원가입(POST)
      app.use(apiMocker('/api/v1/member/join', './src/mock/join'));
      // dod ID중복체크(GET)
      app.use(apiMocker('/api/v1/member/check/duplicate', './src/mock/join'));
    },
    proxy: {
      '/api': {
        target: 'http:localhost:8081',
        changeOrigin: true
      }
    }
  },
});
