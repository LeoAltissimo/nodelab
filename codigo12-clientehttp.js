var http = require('http');
var queryString = require('querystring');

var postdata = queryString.stringify({
    'msg': 'Hellow World!'
});

var options  = {
    hostname: 'localhost',
    port: 8124,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postdata.length,
    }
};

var req = http.request(options, function(res) {
    console.log('STATUS', res.statusCode);
    console.log('Headers', res.headers);
    res.setEncoding('utf8');

    // Obtem lascas de dados
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });

    // Encerra a resposta
    res.on('end', function() {
        console.log('No More Data in Response.');
    })
});

req.on('error', function(err) {
    console.log('Problem with request: ' + err.message);
});

//Grava dados no corpo da solicitação
req.write(postdata);
req.end();