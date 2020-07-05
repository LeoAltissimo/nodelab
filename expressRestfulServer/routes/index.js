var express = require('express'),
    jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('config'),
    router = express.Router();

router.get('/', (request, response) => {
    response.status(201);
    response.json({ nome: 'Leo Altissimo Neto', email: 'leoaltissimoneto@gmail.com' });
});

router.post('/login', (request, response, next) => {
    var username = request.body.username;
    var password = request.body.password;

    if (username === 'rebels' && password === '1138') {
        var expires = moment().add(7, 'days').valueOf();
        var token = jwt.encode({
            user: username,
            exp: expires
        }, config.get('jwtTokenSecret'));

        response.json({ token });
    } else {
        var err = new Error('Unauthorized');
        err.status = 403;
        next(err);
    }
})

router.use('/stormTroopers', require('./stormTroopers'));

module.exports = router;