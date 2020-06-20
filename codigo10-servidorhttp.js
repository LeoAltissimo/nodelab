var http = require('http');

var server = http.createServer().listen(8124);

server.on('request', function(request, response) {
    console.log(request.headers);
    // console.log(request.rawHeaders);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hellow World');
})

console.log("server listen on 8124");