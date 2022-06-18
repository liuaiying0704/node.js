const { request } = require('express');
const express = require('express');
const app = express();
// 使用内置中间件
// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express. urlencoded(）这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
// 默认情况下，如果不配置解析表单数据的中间件，则rea.body 默认等于 undefined
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
app.post('/book', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// 定义错误级别中间件，防止程序崩溃
app.listen(80, () => {
  console.log('server is running at port 80');
});
