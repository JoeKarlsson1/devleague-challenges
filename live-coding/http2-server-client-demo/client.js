var spdy = require('spdy');
var http = require('http');

var agent = spdy.createAgent({
  host: '127.0.0.1',
  port: 3000,

  // Optional SPDY options
  spdy: {
    plain: true,
    ssl: false,
  }
});

http.get({
  host: 'http://127.0.0.1:3000',
  agent: agent
}, function(response) {
  console.log('yikes');
  // Here it goes like with any other node.js HTTP request
  // ...
  // And once we're done - we may close TCP connection to server
  // NOTE: All non-closed requests will die!
  agent.close();
}).end();