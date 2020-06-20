"use strict";

var fs = require('fs');

fs.open('./new2.txt', 'a+', function(err, fd) {
    if (err) return console.log("ERROR", err);

    console.log("FD", fd);
    
    fs.write(fd, 'First Lin333e', function(err, written, str) {
        if (err) return console.log("ERROR2", err);
        console.log("WRITTEN", written);
        

        var buff = new Buffer(written);
        fs.read(fd, buff, 0, written, 0, function(err, bytes, buffer) {
            if (err) return console.error(err);
            console.log(buff.toString('utf-8'));
            console.log("@@", buffer.toString('utf-8'));
        })
    })

})