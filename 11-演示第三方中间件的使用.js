const express = require('express');

const app = express();

//引入第三方中间件
const bodyParser = require('body-parser');
// 使用第三方中间件,安装npm i body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/book', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(80, () => {
  console.log('server is running');
});
