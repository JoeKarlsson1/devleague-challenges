var express = require('express');
var bodyParser = require('body-parser');
var blacklist = require('./config/blackList');
var replaceWords = require('./middleware/replaceWords');
var app = express();

app.use(bodyParser.urlencoded({ extended : true }));

app.use(replaceWords(blacklist));

app.post('/message', function(req, res) {
  res.json({ message : req.body.message });
});

if (!module.parent) {
  app.listen(3000);
}

module.exports = app;