// 1、导入需要的模块

// 2、创建基本的 web 服务器

// 3、将资源的请求 url 地址映射为文件的存放路径
// const fpath = path.join(__dirname, url);

// 5、优化资源的请求路径

// 4、读取文件内容并响应给客户端
const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request', (req, res) => {
  console.log(11);
  // 1、拿到前端的地址url
  const url = req.url;
  // 2、拼接地址
  // const filePath = path.join(__dirname, './clock', url);
  let filePath = '';
  if (url === '/') {
    filePath = path.join(__dirname, './clock/index.html');
  } else {
    filePath = path.join(__dirname, './clock', url);
  }
  // 3、读取文件
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.log('404 not found');
    // res.setHeader('Content-Type', 'text/plain;charset=utf8');
    //  3.1、设置上面的代码，会把HTML，也转译为代码，注释掉既可以看到效果。3.2、上面的代码会解决汉字乱码。
    //  4、响应客户端
    res.end(data);
  });
});

// 4、服务器启动状态
server.listen(80, () => {
  console.log('server listening on port');
});
