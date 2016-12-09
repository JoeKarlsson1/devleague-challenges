var express = require('express');
var app = express();

// Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer.
var passport = require('passport');

// This module lets you authenticate HTTP requests using the standard basic and digest schemes in your Node.js applications.
var BasicStrategy = require('passport-http').BasicStrategy;  // Want to use Basic Authentication Strategy

// Other middleware
var user = { username : 'bob', password : 'secret', email : 'bob@example.com' };

passport.use(new BasicStrategy(
  function(username, password, done) {
    // Example authentication strategy
    if ( !(username === user.username && password === user.password) ) {
      return done(null, false);
    }
    return done(null, user);
  }));

// Protecting endpoints
app.get('/secret',
  passport.authenticate('basic', { session : false }),
  function(req, res) {
    res.json(req.user);
  });


app.listen(3000, function() {
  console.log('Example app listening on port 3000');
})