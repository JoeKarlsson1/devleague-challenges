var net = require('net');
var fs = require('fs');
var path = require('path');

// ask NET module for new Server
var server = net.createServer(function (socketReq) {
  // socket handling logic
  connection(socketReq);
});

// server's connect event
function connection( socketReq ) {
  console.log('Someone has connected to the server');

  socketReq.on('data', function( buffer ) {
    console.log('Socket data event has fired off');

    // change the buffer into a string so you can work with it!
    var request = buffer.toString().split('\n');
    console.log('Request: ', request);

    // Parse out the method and uri from the request header
    var method = request[0].split(' ')[0];
    var uri = request[0].split(' ')[1];

    // If trying to reach the root URL - make sure they get index.html
    if ( uri === '/' ) {
      uri = '/index.html';
    }

    // Remove '/' in front of uri request
    if ( uri.charAt( 0 ) === '/' ) {
      uri = uri.slice( 1 );
    }

    // Use path to extract the extentio name of the file
    var extention = path.extname(uri);

    // Remove '.' in front of file extention so we can use it in the response header
    if ( extention.charAt( 0 ) === '.' ) {
      extention = extention.slice( 1 );
    }

    // Try to read in the file on our server
    fs.readFile(uri, function (err, data) {

      // Check if requested file lives on the server
      if (err) {
        console.log(err);

        // If not found - call the not Found function
        return notFound(socketReq);
      }

      // If the file exists on the server, write the data back to the requestor
      // Header
      socketReq.write(
        'HTTP/1.1 200 OK\n' +
        'Server: nginx/1.4.6 (Ubuntu)\n' +
        'Date: ' + getDate() + '\n' +
        'Content-Type: text/' + extention + '; charset=utf-8\n' +
        '\n\n' +
        ''
      ); // remember that the body and headers need a space between

      // Body
      socketReq.write(data);
      socketReq.end();
    });

  });

  // Close the connection
  socketReq.on('end', function( ) {
    console.log('disconnected connection');
  });

  // Close the connection
  socketReq.on('write', function( data ) {
    console.log(data, 'write');
  });

}

// Open a port on 8080
server.listen({ port : 8080 }, function() {
  address = server.address();
  console.log('Opened server on %j', address.port)
});

/**
 * Function is called when we cannot find the appropriate file on the server
 * @param  socketReq
 */
function notFound(socketReq) {
  fs.readFile('404.html', function (err, data) {
    if (err) {
      console.log(err);
    }
    socketReq.write(
      'HTTP/1.1 404 NOT FOUND\n' +
      'Server: nginx/1.4.6 (Ubuntu)\n' +
      'Date: ' + getDate() + '\n' +
      'Content-Type: text/html; charset=utf-8\n' +
      '\n\n' +
      ''
    ); // remember that the body and headers need a space between
    socketReq.write(data);
    return socketReq.end();
  });
}

/**
 * Gets the current date and converts it into a human radable format
 * @return {[date]} [description]
 */
function getDate() {
  var date = new Date();
  var now = date.getFullYear() + '-'
    + pad((date.getMonth() + 1), 2) + '-'
    + pad(date.getDate(), 2) + ' '
    + pad(date.getHours(), 2) + ':'
    + pad(date.getMinutes(), 2);
  return now;
}

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}