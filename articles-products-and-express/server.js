var express = require('express');
var server = express();
var products = require('./routes/products.js');
var articles = require('./routes/articles.js');
var methodOverride = require('method-override');
var bodyParser     = require('body-parser');
var promise = require('bluebird');
var options = {
    promiseLib: promise // overriding the default (ES6 Promise);
};
var pgp = require('pg-promise')(options);

var cn = {
  host : 'localhost', // server name or IP address;
  port : 5432, //default port for psql
  database : 'has_many_blogs',
  user : 'joecarlson'
};

var db = pgp(cn);
// console.log(db)

db.query('select * from users', true)
    .then(function (data) {
      console.log('DATA:', data); // print data;
    })
    .catch(function (error) {
      console.log('ERROR:', error); // print the error;
    })
    .finally(function () {
      // If we do not close the connection pool when exiting the application,
      // it may take 30 seconds (poolIdleTimeout) before the process terminates,
      // waiting for the connection to expire in the pool.

      // But if you normally just kill the process, then it doesn't matter.

      pgp.end(); // for immediate app exit, closing the connection pool.

      // See also:
      // https://github.com/vitaly-t/pg-promise#library-de-initialization
    });

server.use(bodyParser.urlencoded({ extended : true }));

server.set('view engine', 'jade');
server.set('views', './templates/');

server.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

server.use('/products', products);
server.use('/articles', articles);

var app = server.listen(3000, function() {
  var host = app.address().address;
  var port = app.address().port;
  console.log('server online');
});