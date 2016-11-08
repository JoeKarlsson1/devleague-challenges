var express = require('express');
var bodyParser = require('body-parser');
var blacklist = require('./config/blacklist');
var replaceWords = require('./middleware/replaceWords');
var app = express();

app.use(bodyParser.urlencoded({ extended : true }));

app.post('/message', replaceWords(blacklist), function(req, res) {
  res.json({ message : req.body.message });
});

if (!module.parent) {
  app.listen(3000);
}

module.exports = app;