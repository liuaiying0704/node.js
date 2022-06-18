const express = require('express');
//2\ 导入处理 querystring 的 Node.js 模块Node.js 内置了一个 querystring 模块，专门用来处理查询字符串。通过这个模块提供的 parse() 函数，可以轻松把 查询字符串，解析成对象的格式。
const qs = require('querystring');
const app = express();

app.use((req, res, next) => {
  let str = '';

  req.on('data', (chunk) => {
    str += chunk;
  });
  req.on('end', () => {
    console.log(str); //age=13&username=andy
    // 调用 qs.parse() 方法，把接收到的字符串解析为对象
    req.body = qs.parse(str);
    next();
  });
});
// 自定义中间件
app.post('/book', (req, res) => {
  console.log(req.body); // //[Object: null prototype] { age: '13', username: 'andy' }
  res.send('ok');
});
// 监听 req 的 end 事件 (请求体数据发送完毕会触发)
// 打印完整的请求体数据
// console.log(str);
// 调用 qs.parse() 方法，把接收到的字符串解析为对象
app.listen(80, () => {
  console.log('server is running at port 80');
});
