const fs = require('fs');
fs.readFile('./files/11.txt', 'utf8', function (err, data) {
  if (err) return console.log('读取文件失败');
  console.log(err, data);
});
