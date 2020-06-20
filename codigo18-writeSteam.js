var fs = require('fs');

fs.open('./working.txt', 'r+', function(err, fd){
    if (err) return console.log(err);

    var writable = fs.createWriteStream(null, {fd, start: 10, defaultEncoding: 'utf8'});

    writable.write(' inserting this text ');
})

