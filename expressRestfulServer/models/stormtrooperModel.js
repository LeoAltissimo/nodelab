class StormtrooperModel {
    constructor(mongo) {
        this.mongo = mongo;
    }

    find(query, callback) {
        this.mongo.collection('stormtrooper').find(query, callback);
    }
    
    findOne(_id, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('stormtrooper').findOne(query, callback);
    }

    create(data, callback) {
        this.mongo.collection('stormtrooper').insert(data, callback);
    }

    update(_id, data, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('stormtrooper').update(query, data, callback);
    }

    remove(query, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        this.mongo.collection('stormtrooper').remove(query, data, callback);
    }
}

module.exports = (mongo) => new StormtrooperModel(mongo);