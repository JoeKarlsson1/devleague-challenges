'use strict';

const http = require('http');
const PORT = 3000;

http.createServer((request, response) => {
  // console.log('request: ', request.method);
  // console.log('request: ', request.url);
  // console.log('request: ', request.headers);

  console.log('response: ', response);

  response.writeHead(404, {
    'jozHere': 'true',
  })
  response.end('Hello Client');

}).listen(PORT);