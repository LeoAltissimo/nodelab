class StormtrooperController {
    constructor() {
        
    }

    getAll(request, response, next) {
        response.send('Get all stormtroopers');
    }

    getById(request, response, next) {
        response.send('Get a expecific stormtrooper');
    }

    create(request, response, next) {
        response.send('Add a new StormTrooper');
    }

    update(request, response, next) {
        response.send('Update a stormTrooper');
    }
    
    remove(request, response, next) {
        response.send('Remove a StormTrooper');
    }
}

module.exports = new StormtrooperController();