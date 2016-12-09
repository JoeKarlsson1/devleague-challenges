var express = require('express');
var app = express();

var jade = require('jade');

// Set template engine to Jade
app.set('view engine', 'jade');

//Tell Express where our template files live
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.render('index', { userNames : ['Joe', 'Jon', 'Ray'], email : 'joejoebink3@aol.com' });
})

app.get('/message', function(req, res) {
  res.json({'username':'JoeJoe', password:'1234'});
})

var server = app.listen(3000, function() {
  console.log('server started');
})