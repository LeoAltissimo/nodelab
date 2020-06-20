var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var name = require('url').parse(req.url, true).query.name;

    if (name === undefined) name = 'world';
    if (name == 'burningbird') {
        var file = 'sh_fenix.jpg';
        fs.stat(file, function(err, stat) {
            if (err) {
                console.log(err);
                res.writeHead(200, {'Cotent-Type': 'text;plain'});
                res.end('Desculpe a fenix nao esta por aqui agora\n');
            } else {
                var img = fs.readFileSync(file);
                res.contentType = 'image/jpg';
                res.contentLength = stat.size;
                res.end(img, 'binary');
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hellow' + name + '\n');
    }
}).listen(8124);

console.log("Rodando");

console.log(global);