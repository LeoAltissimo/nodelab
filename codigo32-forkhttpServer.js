var cp = require('child_process'),
    cp1 = cp.fork('./codigo33-forkhttpServer2.js'),
    http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Handle by parent\n');
});

server.on('listening', function() {
    cp1.send('server', server);
});

server.listen(3000);