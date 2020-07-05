// pegar dados de games da epic
// Pegar a lista de itemid e o slug dos games
// https://store-content.ak.epicgames.com/api/content/productmapping
// Usar o slug para requisitar dos dados das paginas iniciais dos games (offerid)
// https://store-content.ak.epicgames.com/api/pt-BR/content/products/{gameSlug}
// Usar o id do game e o itemid e o offerid para requisitar o preco do games
// https://www.epicgames.com/store/backend/graphql-proxy


// Oegar dados de games da steam
// utilizar o enpoint de listagem de games mais vendidos e garimpar os preços dentro do html que vem
// https://store.steampowered.com/search/results/?query&start=50&count=50&dynamic_data=&sort_by=_ASC&snr=1_7_7_topsellers_7&filter=topsellers&infinite=1

const https = require('https');
const fs = require('fs');

const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0000"
  });
var dbConnected = false;

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    dbConnected = true;
});




const options = {
  hostname: 'store-content.ak.epicgames.com',
  path: '/api/pt-BR/content/products/borderlands-3',
  method: 'GET'
};

const file = fs.createWriteStream('./response2.json');

const req = https.request(options, (res) => {
  var data = '';

// res.pipe(file);
  res.on('data', (d) => {
    data += d;
    //process.stdout.write(d);
  });

  res.on('end', function() {
    let responseData = JSON.parse(data);

    console.log(responseData.pages[0].offer.id);
    
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();

file.on('pipe', function(teste) {
    console.log(teste);
});