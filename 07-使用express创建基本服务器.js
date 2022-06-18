// 1、导入 express
const express = require('express');
// 2、创建 web 服务器实例
const app = express();

// 4、监听客户端的get 和 post请求，res.send() 方法并向客户端响应具体的内容
// 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
// 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
app.post('/user', (req, res) => {
  res.send('post 请求');
});
app.get('/user', (req, res) => {
  res.send({
    name: '周三',
    age: 18,
  });
}); //http://127.0.0.1/user客户端请求地址

// 5、获取URL携带的参数(查询字符串）
// req.query 默认是一个空对象
// 客户端使用 ?name=zs&age=20 这种查询字符串的形式，发送到服务器的参数
// 可以通过 req.query 得到{ name:zs,age:20}
// 例如：req.query.name  req.query.age
// ⭐️ 客户端输入：127.0.0.1/add?username=zs&age=18
app.get('/add', (req, res) => {
  console.log(req.ip); //::ffff:127.0.0.1
  console.log(req.query); //{ name:zs,age:20}
  res.send(req.query);
});

//6、 :id 是一个动态的参数
// req.params 是动态匹配到的 URL 参数，默认也是一个空对象
//返回:{"userId": "5","userName": "zs"},  客户端在URL上填写：127.0.0.1/list/5/zs
app.get('/list/:userId/:userName', (req, res) => {
  console.log(req.params);
  res.send(req.params);
  // 例如：req.params.userId = req.params.useruserName
});

// 3、调用app.listen(端口号，启动成功的回调函数)，启动服务器
app.listen(80, () => {
  console.log('express server is running at http://127.0.0.1');
});
