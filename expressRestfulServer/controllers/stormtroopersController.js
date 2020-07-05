var debug = require('debug')('livro_nodejs:controller');

class StormtrooperController {
    constructor(stormtrooperModel) {
        this.model = stormtrooperModel;
    }

    getAll(request, response, next) {
        this.model.find({}, (err, data) => {
            console.log("AAAAAAAAAAAAA", err, data);
            if (err) return next(err);
            
            response.json(data);
        });
    };

    getById(request, response, next) {
        var id = request.params._id;
        this.model.findOne(id, (err, data) => {
            if (err) return next(err);
            
            response.json(data);
        });
    }

    create(request, response, next) {
        var body = request.body;
        this.model.create(body, (err, data) => {
            if (err) return next(err);
            
            response.json(data);
        });
    }

    update(request, response, next) {
        var id = request.params._id;
        var body = request.body;
        this.model.update(id, body, (err, data) => {
            if (err) return next(err);
            
            response.json(data);
        });
    }
    
    remove(request, response, next) {
        var id = request.params._id;
        this.model.remove(id, body, (err, data) => {
            if (err) return next(err);
            
            response.json(data);
        });
    }
}

module.exports = (stormtrooperModel) => new StormtrooperController(stormtrooperModel);