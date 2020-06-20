var net = require('net');
var fs = require('fs');

const unixsocket = './nodesocket';

var server = net.createServer(function(conn) {
    console.log("CONECTADO", conn);

    conn.on('data', function(data) {
        console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data); 
    });

    conn.on('close', function() {
        console.log("CLIENT CLOSE CONECTION");
    })
    
}).listen(unixsocket);

server.on('listening', function() {
    console.log('Listening on port ' + PORT);
})

server.on('error', function(err) {
    if (err.code == 'EADDRINUSE') {
        console.warn('Address in use, retring...');
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 1000)
    } else {
        console.log("ERROR SERVER " + err);
    }    
});
