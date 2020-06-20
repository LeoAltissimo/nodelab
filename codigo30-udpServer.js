var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function(msg, reinfo) {
    console.log("Message: " + msg + " from " + reinfo.address + ':' + reinfo.port);
})

server.bind(8124);