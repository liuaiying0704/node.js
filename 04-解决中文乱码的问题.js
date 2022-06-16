const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  const str = `请求的地址是：${req.url},请求方法：${req.method}`;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.end(str);
});
server.listen('request', () => {
  console.log('server is running at http://127.0.0.1/');
});
// console.log("server is running at http://127.0.0.1/");
