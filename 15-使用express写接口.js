const express = require('express');
// 导入路由模块
const router = require('./16-apiRouter');
//3\ 导入cors模块
const cors = require('cors');

const app = express();
// 设置jsonp数据接口
// ？callback=success&name=zs
app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.callback;
  const data = { username: 'zs', age: 20 };
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;

  res.send(scriptStr);
});

// 3\下载cors,使用cors解决跨域，一定要在路由之前。
app.use(cors());

// 2\注册解析表单的中间件
app.use(express.urlencoded({ extended: false }));

// 注册路由模块
app.use('/api', router);

//启动服务器
app.listen(80, () => {
  console.log('server is running at port 80');
});
// // 必须在 cors 中间件之前，配置 jsonp 的接口
// app.get("/api/jsonp", (req, res) => {
//   // 定义 jsonp 接口的具体实现过程
//   // + 获取客户端发送过来的回调函数的名字
//   const funcName = req.query.callback;
//   // + 得到要通过 JSONP 形式发送给客户端的数据
//   const data = { name: "zs", age: 20 };
//   // + 根据前两步得到的数据，拼接出一个函数调用的字符串
//   const scriptStr = `${funcName}(${JSON.stringify(data)})`;
//   // + 把上一步拼接得到的字符串，响应给客户端的 `<script>` 标签进行解析执行
//   res.send(scriptStr);
// });

// // 一定要在路由之前配置 cors 中间件，从而解决接口跨域问题
// const cors = require("cors");
// app.use(cors());

// // 导入路由模块
// const router = require("./16-apiRouter");

// // 注册路由模块
// app.use("/api", router);

// app.listen(80, () => {
//   console.log("Express server is running at http://127.0.0.1");
// });
