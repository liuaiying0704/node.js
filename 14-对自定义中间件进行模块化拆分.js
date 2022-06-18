const express = require("express");

const app = express();

// 导入自定义中间件
const customBodyParser = require("./13-custom-body-parser");
// 注册为全局中间件
app.use(customBodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("server is running");
});
