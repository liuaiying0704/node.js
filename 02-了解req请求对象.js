const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  console.log(`请求的地址是：${req.url},请求的方法是：${req.method}`);
});
server.listen(80, () => {
  console.log('服务器启动成功');
});
