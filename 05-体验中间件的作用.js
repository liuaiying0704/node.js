const express = require('express');
const app = express();

// 定义简化的全局中间件
// 获取到请求到达服务器的时间
// 为 req 对象，挂载自定义属性，从而把时间共享给后面所有的路由
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});
app.get('/', (req, res) => {
  console.log(req.startTime);
  res.send(req.startTime + '');
});
app.listen(80, () => {
  console.log('server is running at port 80');
});
