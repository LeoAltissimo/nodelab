var fs = require('fs');
var Mode = require('stat-mode');

fs.stat('./sh_fenix.jpg', function(err, stats) {
    if (err) return console.log("ERRO", err);

    var mode = new Mode(stats);
    console.log(stats);
    console.log(mode.toString());
    console.log('Group Execute ' + mode.group.execute );
    console.log('Other write ' + mode.others.write);
    console.log('Owner read ' + mode.owner.read);    
});
