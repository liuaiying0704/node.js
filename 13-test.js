// const m = require('./12-自定义模块');
// console.log(m); //{ username: '张三', age: 18, sayHi: [Function (anonymous)] }

// // 解构m
// const { username, age, sayHi } = require('./12-自定义模块');
// console.log(username);
// console.log(age);
// sayHi();
// // 张三
// // 18
// // hello

const { nickname, sayHii } = require('./12-自定义模块');
console.log(nickname);
sayHii();
// zs
// hi~
