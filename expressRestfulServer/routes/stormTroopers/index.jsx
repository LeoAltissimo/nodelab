var express = require('express'),
    router = express.Router();

var strormTrooperController = require('../../controllers/stormtroopersController');

router.get('/', strormTrooperController.getAll);

router.get('/:_id', strormTrooperController.getById);

router.post('/', strormTrooperController.create);

router.put('/:_id', strormTrooperController.update);

router.delete('/:_id', strormTrooperController.remove);

module.exports = router;
