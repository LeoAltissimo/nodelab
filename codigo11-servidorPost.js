var http = require('http');

var queryString = require('querystring');

var server = http.createServer().listen(8124);

server.on('request', function(request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function(data) {
            body += data;
        });

        request.on('end', function() {
            var post = queryString.parse(body);
            console.log(post);
            
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hellow World\n');
        });
    }
});
console.log("Server listen on http://localhost:8124");
