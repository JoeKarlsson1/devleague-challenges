var express = require('express')
var app = express()
var spdy = require('spdy');

var options = {
  spdy: {
    protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
    plain: true,
    ssl: false,
  }
};

app.get('/', function (req, res) {
  onStart(req, res);
  res.send('hello, http2!')
})

const onStart = (req, res) => {
  var stream = res.push('/main.js', {
    status: 200, // optional
    method: 'GET', // optional
    request: {
      accept: '*/*'
    },
    response: {
      'content-type': 'application/javascript'
    }
  });
  stream.on('error', function() {
  });
  stream.end('alert("hello from push stream!");');

  res.end('<script src="/main.js"></script>');
}

spdy.createServer(options, app).listen(8080, 'localhost');