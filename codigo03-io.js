process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    console.log("TESTE", input);

    if (!input) {
        process.stdout.write(input);
    }
})