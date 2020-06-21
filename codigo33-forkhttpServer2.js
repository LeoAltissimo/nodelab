var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Handle by children\n');
});
process.on('message', function(msg, httpServer) {
    if (msg === 'server') {
        httpServer.on('connection', function(socket) {
            server.emit('connection', socket);
        });
    }
});
