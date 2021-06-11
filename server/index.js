const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// cors setting
app.use(
  cors({
    origin: '*', // 허락하는 요청 주소
    credentials: true // true로 하면 설정한 내용을 response 헤더에 추가
  })
);

// proxy setting
app.use('/api/v1/member', createProxyMiddleware({
  target: 'http://ec2-18-117-247-89.us-east-2.compute.amazonaws.com:8080',
  changeOrigin: true,
}));
app.use('/api/content', createProxyMiddleware({
  target: 'http://ec2-18-117-247-89.us-east-2.compute.amazonaws.com:8081',
  changeOrigin: true,
}));

// build file setting
app.use(express.static('dist'));

// react-router 페이지 이동
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// 4000 port 서버 실행
app.listen(4000, () => {
  console.log('express server 4000 port listen!');
});