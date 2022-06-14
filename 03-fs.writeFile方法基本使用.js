const fs = require('fs');
fs.writeFile('./files/2.txt', 'hello world', (err) => {
  if (err) return console.log('写入失败');
  console.log('写入成功');
});
