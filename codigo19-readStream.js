var fs = require('fs');

var readable = fs.createReadStream('./working.txt');
readable.setEncoding('utf8');

var data = '';

readable.on('data', function(chunk) {
    data += chunk;
})

readable.on('end', function() {
    console.log(data);
})

// fs.open('./working.txt', 'r', function(err, fd) {
//     if (err) return console.log(err);
    
//     var readable = fs.createReadStream()
// })