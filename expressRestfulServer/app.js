var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({ name: 'Leo Altíssimo', email: 'leoaltissimoneto@gmail.com' });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Servidor rodando http://${host}:${port}`);
})
