var http = require('http');

http.createServer(function(request, respose) {
    respose.writeHead(200, {'Content-Type': 'text/plain'});
    respose.end('Hello world\n');
}).listen(8124);

console.log('Server Runing at localhost');