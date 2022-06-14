const path = require('path');
const fpath = '/a/b/c/index.html';
//获取完整文件名
const fullName = path.basename(fpath);
console.log(fullName); //index.html
// 第二个参数为文件扩展名，
const fullName1 = path.basename(fpath, '.html');
console.log(fullName1); //index

const name = path.extname(fpath);
console.log(name); //.html
