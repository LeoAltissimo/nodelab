"use strict";

var fs = require('fs');
var path = require('path');

fs.readdir('./node_modules/anymatch', function(err, files) {
    if (err) return console.log("ERROR", err);   

    for(let file of files) {
        console.log("FILE " + file + " EXTENSION " + path.extname(file));
        
        if (path.extname(file) === '.gz')
            fs.unlink('./' + file);
    }
});