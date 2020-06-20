var http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    base = '/Projects/Estudos de Node/staticServer/public';

http.createServer(function(req, res) {
    pathName = req.url;
    console.log('PathName', pathName);

    fs.stat(base + pathName, function(err, stats) {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write('Resource missing 404\n');
            res.end();
        } else if (stats.isFile()){
            var type = mime.getType(base + pathName);
            console.log(type);

            res.setHeader('Content-Type', type);
            var file = fs.createReadStream(base + pathName);
            file.on('open', function() {
                res.statusCode = 200;
                file.pipe(res);
            });
            file.on('error', function(err) {
                res.writeHead(403);
                res.write('file missing or premission problem');
                res.end();
                console.log(err);
            })
        } else {
            res.writeHead(403);
            res.write('Directory access is forbiden');
            res.end();
        }
    });
}).listen(8124);

console.log('Server listen on http://localhost:8124');
