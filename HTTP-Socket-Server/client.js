'use strict';

const net = require('net');
const path = require('path');

let PORT = 80; //default port
const url = process.argv[2].split('/');
const host = url[0];
const method = 'GET'
let uri;
let log = {};

// If the client is connecting to a localhost - change the port
if (host === '127.0.0.1' || host === 'localhost') {
  PORT = 8080;
}

// Setup our request uri from the input url
url.shift(); //Remove the host domain from the site

//Check if we are trying to reach the root page or a sub-page
if (url.length <= 1 ) {
  uri = '/';
} else {
  uri = url.join('/');
}

// Use path to extract the extentio name of the file
const extention = path.extname(uri);

//Create the connection to our host
console.log('host: ', host);
const client = net.createConnection({ 'port' : PORT, 'host' : host }, () => {
  console.log('Connected to server');
  client.write(
    method + ' ' + uri + ' HTTP/1.1\n' +
    'host: ' + host + '\n' +
    'Connection: keep-alive\n' +
    'Content-Type: text/html, application/json\n' +
    'User-Agent : Joes Server\n' +
    'Date: ' + getDate() + '\n\n'
  );
});

// Event listener for incoming data
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
})

//Event listener for when connection has been ended - this is for either the server or the client
client.on('end', () => {
  console.log('disconnected from server');
});

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