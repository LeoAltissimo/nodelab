class StormtrooperModel {
    constructor(mongoose) {
        var stormtrooper = mongoose.model('stormtrooper', {
            name: String,
            nickname: String,
            divisions: [String],
            patent: String
        })

        this.mongoose = stormtrooper;
    }

    find(query, callback) {
        // this.mongo.collection('stormtrooper').find(query, callback);       
        this.mongoose.find(query).exec(callback);
    }
    
    findOne(_id, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        // this.mongo.collection('stormtrooper').findOne(query, callback);
        this.mongoose.findOne(query).exec(callback);
    }

    create(data, callback) {
        // this.mongo.collection('stormtrooper').insert(data, callback);
        var model = new this.mongoose(data);
        model.save(function(err, result) {
            callback(err, result);
        })
    }

    update(_id, data, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        // this.mongo.collection('stormtrooper').update(query, data, callback);
        this.mongoose.update(query).exec((err, result) => callback(err, result))
    }

    remove(query, callback) {
        var query = { _id: this.mongo.ObjectId(_id) };
        // this.mongo.collection('stormtrooper').remove(query, data, callback);
        this.mongoose.remove(query).exec((err, result) => callback(err, result))
    }
}

module.exports = (mongoose) => new StormtrooperModel(mongoose);