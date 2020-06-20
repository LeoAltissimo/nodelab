var net = require('net');
const { Server } = require('http');

const PORT = 8124;

var server = net.createServer(function(conn) {
    console.log("CONECTADO", conn);

    conn.on('data', function(data) {
        console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data); 
    });

    conn.on('close', function() {
        console.log("CLIENT CLOSE CONECTION");
    })
    
}).listen(PORT);

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
