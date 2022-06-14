// console.log('hello node.js');
//1、 导入fs模块，来操作文件
const fs = require('fs');
// 2、调用
// fs.readFile()方式读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的是编码格式
// 参数3：回调函数，拿到读取失败和成功。

// 参数1： ./files/1.text与讲义一致，报错。
// ⭐️解决方案1：./1.text，'1.text'，或完整路径。

// ⭐️解决方案2：使用__dirname表示当前文件所处的目录。

// fs.readFile('1.text', 'utf8', function (err, dataStr) {
//   // 2.1 打印失败的结果
//   console.log(err);
//   console.log('----------------');
//   // 2.2 打印成功的结果
//   console.log(dataStr);
// });

// ⭐️解决方案2：使用__dirname表示当前文件所处的目录。
fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
  // 2.1 打印失败的结果
  console.log(err);
  console.log('----------------');
  // 2.2 打印成功的结果
  console.log(dataStr);
});
