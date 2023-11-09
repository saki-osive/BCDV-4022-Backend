const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local'). Strategy; const app = express();


// Middleware setup
app.use(express.urlencoded({ extended: true }));
// Session middleware setup with options on separate lines
app.use(
    session({

        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());
// Import Passport.js configuration from passport-config.js
require('./passport-config') (passport);

app.get('/dashboard', ensureAuthenticated, (req, res) =>{
    res.send(`Welcome`)
})
