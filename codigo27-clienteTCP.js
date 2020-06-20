var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

//conecta ao servidor
client.connect('8124', 'localhost', function(conn) {
    console.log("Connected to server");
    client.write('Who needs a browser to comunicate?');
});

// ao receber dados envia direto para o servidor
process.stdin.on('data', function(data) {
    client.write(data);
});

// ap receber de volta mostra no console
client.on('data', function(data) {
    console.log(data);
});

// quando o servidor fechar a conexao
client.on('close', function() {
    console.log("connection is closed");
});