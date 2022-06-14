const fs = require('fs');

fs.readFile('./files/11.txt', 'utf8', function (err, data) {
  console.log(err); //null
  console.log('------------');
  console.log(data); //春风十里不如你
});

// fs.readFile('files/1.txt', 'utf8', function (err, data) {
//   console.log(err, data);
// });
