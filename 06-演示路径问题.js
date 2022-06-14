const fs = require('fs');
const { dirname } = require('path');
//1、拼接不能带点，'/files/1.txt',__dirname   code 文件夹的地址
// fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, data) {
//   console.log(err); //null
//   console.log('------------');
//   console.log(data); //春风十里不如你
// });

// 2、path.join（__dirname, './files/1.txt'）可以带点。
const path = require('path');
const pathStr = path.join('/a', '/b', '/c/d', '../', '/e', 'f');
const pathStr1 = path.join(__dirname, './files/1.txt');

console.log(pathStr1);
// /Users/wangzewei/lay-teaching/就业班教学材料/node.js/前端31期node的课件/day1/code/files/1.txt
