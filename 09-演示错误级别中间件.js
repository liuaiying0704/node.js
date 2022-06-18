const express = require('express');

const app = express();

// 人为制造错误
app.get('/', (req, res) => {
  throw new Error('服务器内部错误'); //实例化对象
  res.send('get 请求');
});

// 定义错误级别中间件，防止程序崩溃，定义在路由之后。
app.use((err, req, res, next) => {
  console.log(err.message);
  res.send(err.message);
});

app.listen(80, () => {
  console.log('server is running');
});
