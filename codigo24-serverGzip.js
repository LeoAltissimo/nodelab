var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

http.createServer(function(request, response) {
    if (request.method === 'POST') {
        var chunks = [];

        request.on('data', function(chunk) {
            chunks.push(chunk);
        })

        request.on('end', function() {
            var buf = Buffer.concat(chunks);

            zlib.unzip(buf, function(err, result) {
                if (err) {
                    response.writeHead(500);
                    response.end();
                    return console.log("ERROR", err);
                }

                var timestamp = Date.now();
                var filename = './done' + timestamp + '.png';
                fs.createWriteStream(filename).write(result);

                response.writeHead(200);
                response.end();                
            })
        })
    }
}).listen(8124);

console.log("SERVER LISTEN ON 8124");
