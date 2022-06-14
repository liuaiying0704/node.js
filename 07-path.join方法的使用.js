// 2、path.join（__dirname, './files/1.txt'）可以带点。
const path = require('path');
const pathStr = path.join('/a', '/b', '/c/d', '../', '/e', 'f');
const pathStr1 = path.join(__dirname, './files/1.txt');

console.log(pathStr1);
