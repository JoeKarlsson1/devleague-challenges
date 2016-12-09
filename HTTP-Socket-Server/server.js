'use strict';

const net = require('net');
const fs = require('fs');
const path = require('path');

// ask NET module for new Server
const server = net.createServer(function (socketReq) {
  // socket handling logic
  connection(socketReq);
});

// server's connect event
const connection = ( socketReq ) => {
  console.log('Someone has connected to the server');

  socketReq.on('data', ( buffer ) => {
    console.log('Socket data event has fired off');

    // change the buffer into a string so you can work with it!
    const request = buffer.toString().split('\n');
    console.log('Request: ', request);

    // Parse out the method and uri from the request header
    const method = request[0].split(' ')[0];
    let uri = request[0].split(' ')[1];

    // If trying to reach the root URL - make sure they get index.html
    if ( uri === '/' ) {
      uri = '/index.html';
    }

    // Remove '/' in front of uri request
    if ( uri.charAt( 0 ) === '/' ) {
      uri = uri.slice( 1 );
    }

    // Use path to extract the extentio name of the file
    let extention = path.extname(uri);

    // Remove '.' in front of file extention so we can use it in the response header
    if ( extention.charAt( 0 ) === '.' ) {
      extention = extention.slice( 1 );
    }

    // Try to read in the file on our server
    fs.readFile(uri, (err, data) => {

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
  socketReq.on('end', ( ) => {
    console.log('disconnected connection');
  });

  // Close the connection
  socketReq.on('write', ( data ) => {
    console.log(data, 'write');
  });

}

// Open a port on 8080
server.listen({ port : 8080 }, () => {
  const address = server.address();
  console.log('Opened server on %j', address.port)
});

/**
 * Function is called when we cannot find the appropriate file on the server
 * @param  socketReq
 */
const notFound = (socketReq) => {
  fs.readFile('404.html', (err, data) => {
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
const getDate = () => {
  const date = new Date();
  const now = date.getFullYear() + '-'
    + pad((date.getMonth() + 1), 2) + '-'
    + pad(date.getDate(), 2) + ' '
    + pad(date.getHours(), 2) + ':'
    + pad(date.getMinutes(), 2);
  return now;
}

const pad = (num, size) => {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}