"user strict";

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker (name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', {
        'flags': 'a',
        'enconding': 'utf8',
        'mode': 0o666
    });
};

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
    //elimina espaços em branco
    let command = input.trim().substr(0,3);  

    //processa os possiveis comandos
    // se for wr: grava os dados no arquivo
    if (command == 'wr:') {
        this.emit('write', input.substr(3, input.length));
    // de for en: encerra o processo
    } else if (command == 'en:') {
        this.emit('end');
    // ecoa a entrada na saida padrão caso nao haja mais comandos
    } else {
        this.emit('echo', input);
    }   
};

// testa o novo objeto e os tratamentos de eventos
let ic = new InputChecker('Shelley', 'output');

ic.on('write', function(data) {    
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
    process.stdout.write(ic.name + 'wrote ' + data);
})

ic.on('end', function() {
    process.exit();
});


// captura a entrada depois de definir a condição de texto
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    let input = process.stdin.read();
    if (input !== null) ic.check(input);
})
