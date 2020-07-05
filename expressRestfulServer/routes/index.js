var express = require('express'),
    router = express.Router();

router.get('/', (request, response) => {
    response.status(201);
    response.json({ nome: 'Leo Altissimo Neto', email: 'leoaltissimoneto@gmail.com' });
});

router.use('/stormTroopers', require('./stormTroopers'));

module.exports = router;