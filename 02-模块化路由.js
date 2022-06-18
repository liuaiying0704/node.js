const express = require('express');
// 导入并使用路由模块
const router = require('./03-router');
const app = express();

//注册路由
app.use('/api', router); //客户端请求地址：127.0.0.1/api/user
// app.use(router);   //客户端请求地址：127.0.0.1/user

app.listen(80, () => {
  console.log('server is runnning at port 80');
});
