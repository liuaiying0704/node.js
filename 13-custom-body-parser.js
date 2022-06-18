const qs = require('querystring');

const bodyPaser = (req, res, next) => {
  // 业务逻辑
  let str = '';
  req.on('data', (thunk) => {
    str += thunk;
  });

  // 监听 req 的 end 事件 (请求体发送完毕会触发)
  req.on('end', () => {
    // 打印完整的请求体数据
    // console.log(str);
    // 调用 qs.parse() 方法，把接收到的字符串解析为对象
    const body = qs.parse(str);
    req.body = body;
    next();
  });
};

module.exports = bodyPaser;
