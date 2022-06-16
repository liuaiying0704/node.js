//1、 自定义模块中，默认情况下，module.exports = {}
const username = '张三';
module.exports.username = username;
module.exports.age = 18;
module.exports.sayHi = () => {
  console.log('hello');
};

// 2、让 module.exports 指向一个全新的对象
module.exports = {
  nickname: 'zs',
  sayHii() {
    console.log('hi~');
  },
};
