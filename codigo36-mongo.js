const { MongoClient } = require('mongodb');

var mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'exampleDb';

var client = new MongoClient(url);

client.connect(function(err) {
    if (err) return console.log("ERROR DB", err);
    
    const db = client.db(dbName);

    console.log("EL NOMBRE DEL DATA BASE ERES : " + db.databaseName);

    const testeCollection = db.collection('teste');

    testeCollection.insertOne({ nome: "Leo", sobrenome: "Altissimo", version: Math.floor(Math.random() * 100) }, function(err, result) {
        if (err) return console.log("ERROR ADD COLECTION", err);

        console.log("DONE ADD TO COLECTION", result.result);

        testeCollection.remove(null, { safe: true }, function(err, result) {
            if (err) return console.log("ERROR ADD COLECTION", err);

            console.log("DONE REMOVE TO COLECTION", result.result);
            client.close();
        })
        
    })
});
