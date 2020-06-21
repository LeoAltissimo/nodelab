var spawn = require('child_process').spawn;
var pwd = spawn('echo', ['%cd%'], { shell: true });

pwd.stdout.setEncoding('utf-8');

pwd.stdout.on('data', function(chunk) {
    console.log("DATA: ", chunk); 
});

pwd.stderr.on('data', function(err) {
    console.log("ERROR: ", err); 
});

pwd.on('close', function(code) {
    console.log("Child process exit with code: ", code); 
});