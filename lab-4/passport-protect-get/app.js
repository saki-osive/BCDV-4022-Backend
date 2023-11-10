const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local'). Strategy;
const app = express();


// Middleware setup

app.use(express.urlencoded(
    { extended: true }
));

// Session middleware setup with options on separate lines
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize()); // TODO:: Check what's the issue
app.use(passport.session());

// Import Passport.js configuration from passport-config.js
require('./passport-config')(passport);


// Protected route
app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.username} ! This is the protected dashboard.`);
});

// Login Route
app.get('/login', (req, res) => {
    res.send(`Login Page`);
});

// POST route for handling Login Credentials
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}));

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})