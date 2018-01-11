var fs = require('fs');

// synchronous method.
// Blocking code
// var readMe = fs.readFileSync('readMe.txt', 'utf-8');
// fs.writeFileSync('writeMe.txt', readMe);
// console.log(readMe);

// asynchronous
// Nonblocking code.
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeMe.txt', data);
});
console.log('test');
