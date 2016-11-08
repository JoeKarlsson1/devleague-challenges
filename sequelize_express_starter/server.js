var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

var db = require('./models');
var User = db.User;

app.post('/users', function (req, res) {
  User.create({ username: req.body.username })
    .then(function (user) {
      res.json(user);
    });
});

app.get('/users', function(req, res) {
  User.findAll()
    .then(function (users) {
      res.json(users);
    });
});

app.listen(3000, function() {
  console.log('server started')
  db.sequelize.sync();
});