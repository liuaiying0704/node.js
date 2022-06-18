const express = require('express');
const app = express();

// 定义一个最简单的中间件函数
// 把流转关系交给下一个中间件，或是路由
const mw =
  (req,
  res,
  (next) => {
    console.log('最简单的中间件');
    next();
  });

// 将 mw 注册为全局生效的中间件
app.use(mw);

// 定义简化的全局中间件
// app.use((req, res, next) => {
//   console.log('简化版全局中间件');
//   next();
// });

app.get('/', (req, res) => {
  res.send('get 请求');
});

app.listen(80, () => {
  console.log('server is running at port 80');
});
