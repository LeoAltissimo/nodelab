var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var options = {
    hostname: 'localhost',
    port: 8124,
    method: 'POST',
    headers: {
        'Content-Type' : 'application/javaScript',
        'Content-Encoding': 'gzip,deflate',
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    var data = '';
    res.on('data', function(chunk) {
        data += chunk;
    });

    res.on('end', function() {
        console.log(data);
    })
})

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);    
});

var readable = fs.createReadStream('./teste.png');
readable.pipe(gzip).pipe(req);
