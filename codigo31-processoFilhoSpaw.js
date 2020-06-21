const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

// unix exemple
// var bat = spawn('pwd');

bat.stdout.on('data', function(chunk) {
    console.log("stdout: " + chunk);
});


bat.stderr.on('data', function(err) {
    console.log("stderr: " + err);
})

bat.on('close', function(code) {
    console.log("End Process " + code);
})