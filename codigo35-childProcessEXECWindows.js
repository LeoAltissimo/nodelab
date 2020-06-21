var exec = require('child_process').exec;

var pwd = exec('cd');

pwd.stdout.setEncoding('utf-8');

pwd.stdout.on('data', function(chunk) {
    console.log("DATA RETURNED: ", chunk); 
});

pwd.stderr.on('data', function(chunk) {
    console.log("ERROR RETURNED: ", chunk); 
});

pwd.on('close', function(code) {
    console.log("CODE RETURNED: ", code); 
});