const express = require('express');
const app = express();
//监听get请求
app.get('/', (req, res) => {
  res.send('get 请求');
});
// 监听post请求
app.post('/', (req, res) => {
  //
  res.send('post 请求');
});
app.listen(80, () => {
  console.log('server is running at port 80');
});
