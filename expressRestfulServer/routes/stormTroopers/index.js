var express = require('express'),
    router = express.Router();

var mongoose = require('../../db/mongoose');
var stormtrooperModel = require('../../models/stormtrooperModel')(mongoose);
var stormtroopersController = require('../../controllers/stormtroopersController')(stormtrooperModel);

router.get('/', stormtroopersController.getAll.bind(stormtroopersController));

router.get('/:_id', stormtroopersController.getById.bind(stormtroopersController));

router.post('/', stormtroopersController.create.bind(stormtroopersController));

router.put('/:_id', stormtroopersController.update.bind(stormtroopersController));

router.delete('/:_id', stormtroopersController.remove.bind(stormtroopersController));

module.exports = router;
