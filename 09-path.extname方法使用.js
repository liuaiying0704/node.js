const path = require('path');

// path 为文件存放路径
const fpath = '/a/b/c/index.html';
const name = path.extname(fpath);
console.log(name);
// .html
