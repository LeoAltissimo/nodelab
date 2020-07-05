var express = require('express'),
    jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('config'),
    router = express.Router();

var mongoose = require('../../db/mongoose');
var stormtrooperModel = require('../../models/stormtrooperModel')(mongoose);
var stormtroopersController = require('../../controllers/stormtroopersController')(stormtrooperModel);

var middlewareAuth = (request, response, next) => {
    var token = request.query.token;
    if (!token) {
        var err = new Error('Forbiden');
        err.Status = 403;
        return next(err);
    } 

    try {

        var decoded = jwt.decode(token, config.get('jwtTokenSecret'));
        var isExpired = moment(decoded.exp).isBefore(new Date());

        if (isExpired) {
            var err = new Error('Unathorized');
            err.Status = 403;
            return next(err);
        } else {
            request.user = decoded.user;
            next();
        }
    } catch (e) {
        return next(e);
    }
}

var passport = require('passport');

router.get('/', passport.authenticate('basic', { session: false }) ,stormtroopersController.getAll.bind(stormtroopersController));

router.get('/:_id', passport.authenticate('basic', { session: false }), stormtroopersController.getById.bind(stormtroopersController));

router.post('/', middlewareAuth, stormtroopersController.create.bind(stormtroopersController));

router.put('/:_id', stormtroopersController.update.bind(stormtroopersController));

router.delete('/:_id', stormtroopersController.remove.bind(stormtroopersController));

module.exports = router;
