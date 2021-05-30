// const apiMocker = require('connect-api-mocker');
const cors = require('cors');
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
    // before: (app) => {
    //   // todos 전체조회(GET)
    //   app.use(apiMocker('/api/content/v1/todos', './src/mock/todos'));
    //   // dod 로그인(POST)
    //   app.use(apiMocker('/api/v1/member/login', './src/mock/login'));
    //   // dod 회원가입(POST)
    //   app.use(apiMocker('/api/v1/member/join', './src/mock/join'));
    //   // dod ID중복체크(GET)
    //   app.use(apiMocker('/api/v1/member/check/duplicate', './src/mock/join'));
    // },
    before: (app) => {
      app.use(
        cors({
          origin: '*', // 허락하는 요청 주소
          credentials: true // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
        })
      );
    },
    proxy: {
      '/api': {
        target: 'http://ec2-3-128-247-75.us-east-2.compute.amazonaws.com:8080',
        changeOrigin: true
      }
    }
  },
});
