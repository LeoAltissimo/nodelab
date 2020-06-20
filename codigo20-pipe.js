var fs = require('fs');

var readable = fs.createReadStream('./working.txt');

readable.on('data', function(chunk) {
    console.log("CHUNK", chunk);
})

readable.on('end', function() {
    console.log("END READ");
})

var writable = fs.createWriteStream('./working2.txt');
writable.write("TESTES");

writable.pipe(function(teste) {
    console.log(teste);
    
});


//readable.pipe(writable);