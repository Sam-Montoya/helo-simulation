require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    session = require('express-session');

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        done(null, profile);
    }
));


passport.serializeUser(function (user, done) {
    done(null, { id: user.id, first: user._json.given_name ? user._json.given_name : '', last: user._json.family_name ? user._json.family_name : '', picture: 'https://robohash.org/me' });
});

passport.deserializeUser(function (user, done) {
    const db = app.get('db');
    db.find_user(profile.id).then(user => {
        if (user[0]) {
            return done(null, user);
        } else {
            db.create_user(["", "", "", "", "", "", "", user.picture, user.id]).then(user => {
                return done(null, user[0]);
            });
        }
    })
});

app.get('/api/auth/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/', 
    failureRedirect: 'http://localhost:3000/#/api/auth/login'
}));

app.get('/api/auth/authenticated', (req, res) => {
    if(session.user){
        res.status(200).send(session.user);
    } else {
        res.status(403).send();
    }
});

app.get('/api/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/#/');
});