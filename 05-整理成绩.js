// 1、导入fs模块
const fs = require('fs');
fs.readFile('../素材/成绩.txt', 'utf8', (err, data) => {
  if (err) return console.log('读取失败');
  //   console.log('读取成功');
  //   处理成绩
  const arrold = data.split(' ');
  //   console.log(arrold);
  const arrnew = [];
  arrold.forEach((item) => {
    arrnew.push(item.replace('=', ':'));
  });
  console.log(arrnew);
  const newStr = arrnew.join('\r\n');
  //   写入
  fs.writeFile('./files/成绩-ok.txt', newStr, (err) => {
    if (err) return console.log('写入失败');
    console.log('写入成功');
  });
});
