// 1、导入http模块
const http = require('http');
// 2、创建 web 服务器实例
const server = http.createServer();
// 3、为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', (req, res) => {
  console.log('收到客户的请求');
});
// 4、启动服务器
server.listen(80, () => {
  console.log('服务器启动成功');
});
