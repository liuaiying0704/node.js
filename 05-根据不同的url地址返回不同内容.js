const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  // console.log(11);
  const url = req.url;
  let content = '404 not found';
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>';
  } else if (url === '/about.html') {
    content = '<h1>关于</h1>';
  }
  // res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(content);
});
server.listen(80, () => {
  console.log('server is running at port 80');
});
