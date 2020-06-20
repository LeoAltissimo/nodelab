var fs = require('fs');

fs.writeFile('./teste1.txt', 'Teste de escrita em arquivo 0123456789', function(err) {
    if (err) {
        console.log("Erro ao escrever em arquivo", err);
        return;
    }
    fs.readFile('./teste1.txt', { encoding: 'utf-8' }, function(err, data) {
        if(err) console.log("Erro na leitura", err);
    
        console.log("arquivo", data);
    });
})


