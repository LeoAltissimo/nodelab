var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy,
    app = express();

// Server Config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((request, response, next) => {
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'iamge/x-icon'});
        response.end('');
    } else {
        next();
    }
});

app.use(passport.initialize());
passport.use(
    new BasicStrategy((username, password, done) => {
        if (username.valueOf() === 'rebels' && password.valueOf() === '1138') {
            return done(null, true);
        } else {
            return done(null, false);
        }
    })
);

// Router
app.use('/', require('./routes'));


// Error Handler
// se chegar a executar essa parte após os routers é porque nao encontrou a página
app.use((request, response, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})
// Trata erros acontecidos nos processos acima
app.use((err, request, response, next) => {
    response.status(err.status || 500).json({ err: err.message });
})

// Server Listner
module.exports = app;
