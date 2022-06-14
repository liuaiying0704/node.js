// 1.1导入fs,文件 系统模块
const fs = require('fs');
// 1.2 导入路径模块
const path = require('path');

// 1.3定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
// /s 代表匹配空白字符，/S 表示匹配任意非空白字符字符 /s/S 表示匹配任意字符 * 表示可以出现多次
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', (err, data) => {
  if (err) return console.log('读取文件失败');
  //   console.log(data); //读取-素材index.html
  resolveCss(data);
  resolveJs(data);
  resolveHtml(data);
});

//2、处理CSS样式，写入index.CSS
const resolveCss = (data) => {
  // 匹配CSS样式
  const r1 = regStyle.exec(data);
  //  去除《style》
  const newCss = r1[0].replace(/<style>|<\/style>/g, '');
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, (err) => {
    if (err) return console.log('写入CSS失败');
    console.log('写入CSS成功');
  });
};

// 3、处理js样式，写入index.css
const resolveJs = (data) => {
  //匹配脚本
  const r1 = regScript.exec(data);
  // 去除标签
  const newJs = r1[0].replace(/<script>|<\/script>/g, '');
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJs, (err) => {
    if (err) return console.log('写入js失败');
    console.log('写入js成功');
  });
};

// //
const resolveHtml = (data) => {
  const newHtmlStr = data
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, "<script src='./index.js'></script>");
  fs.writeFile(
    path.join(__dirname, './clock/index.html'),
    newHtmlStr,
    (err) => {
      if (err) return console.log('写入HTML失败');
      console.log('写入HTML成功');
    }
  );
};
