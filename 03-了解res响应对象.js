const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  const str = `请求地址是：${req.url},请求方法是：${req.method}`;

  res.end(str); //把请求结果，返回给用户。

  //   中文乱码问题
  // 浏览器或postman，测试127.0.0.1/api/user
  // 浏览器或postman，测试127.0.0.1:8080/api/user
});
server.listen(80, () => {
  console.log('服务器启动成功');
});
// server.listen(8080, () => {
//     console.log('服务器启动成功');
//   });
