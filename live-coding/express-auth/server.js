var express = require('express');
var bodyParser = require('body-parser');
// Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer.
var passport = require('passport');

// Session middleware for express
var session = require('express-session');

// This module lets you authenticate using a username and password in your Node.js applications.
var LocalStrategy = require('passport-local').Strategy;

var CONFIG = require('./config');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(session(CONFIG.SESSION));

// To use Passport in an Express or Connect-based application,  configure it with the required passport.initialize()
app.use(passport.initialize());

// Our application uses persistent login sessions (recommended, but not required), passport.session() middleware must also be used.
app.use(passport.session());

// local strategy checks our local DB to authenticate users
passport.use(new LocalStrategy(
  function (username, password, done) {
    var isAuthenticated = authenticate(username, password);
    if (!isAuthenticated) { // Not authenticated
      return done(null, false); // No error, but credentials dont match
    }

    // user should come back from the database
    var user = {
      name : 'Bob',
      role : 'ADMIN',
      color : 'orange'
    }
    return done(null, user); // Authenticated
  }
));

// Passport will maintain persistent login sessions. In order for persistent sessions to work, the authenticated user must be serialized to the session, and deserialized when subsequent requests are made.
passport.serializeUser(function (user, done) {
  // user is passed in from local strategy
  // user is attached to req.user
  return done(null, user);
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
})

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login',
  passport.authenticate('local', {
    successRedirect : '/secret',
    failureRedirect : '/login'
  })
);

function authenticate(username, password) {
  var CREDENTIALS = CONFIG.CREDENTIALS;
  var USERNAME = CREDENTIALS.USERNAME;
  var PASSWORD = CREDENTIALS.PASSWORD;

  return (username === USERNAME &&
          password === PASSWORD);
}

function isAuthenticated (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  return next();
}

app.get('/secret',
  isAuthenticated,
  function (req, res) {
    res.render('secret', { role : req.user.role.toLowerCase() });
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});

var server = app.listen(CONFIG.PORT, function () {
  console.log('Listening on port:', server.address().port);
});
