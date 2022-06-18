const express = require('express');
const app = express();
//定义中间件函数
const mw1 = (req, res, next) => {
  console.log('局部生效的第一个中间件');
  next();
};
const mw2 = (req, res, next) => {
  console.log('局部生效的第二个中间件');
  next();
};
//定义路由可以简写：[mw1, mw2]
app.get('/', mw1, mw2, (req, res) => {
  res.send('get请求');
});
app.get('/user', (req, res) => {
  res.send('user请求');
});

// 启动服务器
app.listen(80, () => {
  console.log('server is running at port 80');
});
