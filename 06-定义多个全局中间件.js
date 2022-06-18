// 定义第一个全局中间件
// 定义第二个全局中间件
// 定义一个路
const express = require('express');
const app = express();

// 定义第一个全局中间件
app.use((req, res, next) => {
  console.log('定义一个全局的中间件');
  next();
});

// 定义第二个全局中间件
app.use((req, res, next) => {
  console.log('定义第二个中间件');
  next();
});

app.get('/', (req, res) => {
  res.send('get');
});

app.listen(80, () => {
  console.log('server is running at port 80');
});
