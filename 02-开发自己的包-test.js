// liuaiying_pkg
// 创建文件夹liuaiying_pkg其中包含README.md，index.json,package.json，写好相关的代码
// 网页注册账号，在终端登陆npm账号

const m = require('./liuaiying_pkg');
// 格式化时间
const dt = m.dateFormat(new Date());
console.log(dt);
console.log('-----------------');

const htmlStr = '<h1 class="red">你好！<span>123&nbsp;</span></h1>';

const newStr = m.htmlEscape(htmlStr);
console.log(newStr);
console.log('-----------------');

const str =
  '&lt;h1 class=&quot;red&quot;&gt;你好！&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;';

const htmlStr1 = m.htmlUnEscape(str);
console.log(htmlStr1);
