// console.log(exports);

// console.log(module.exports);

// console.log(exports === module.exports);

const username = 'zs';
exports.username = username;
module.exports.age = 19;
exports.sayHi = function () {
  console.log('hi');
};
