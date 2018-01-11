var fs = require('fs');


// Make sure that the file being deleted exists. 
//Otherwise 'no such file or directory' error would be shown at this time. 
fs.unlink('writeMe.txt');

//synchronous
fs.rmdirSync('stuff');
fs.mkdirSync('stuff');

// asynchronous 
fs.rmdir('stuff');
fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});

