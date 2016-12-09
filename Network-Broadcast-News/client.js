'use strict';

const net = require('net');

//create new socket
let client = new net.Socket();
let name = null;

//client connects to server and the server alerts all of the new connection
client.connect(6969, '0.0.0.0', () => {
  process.stdout.write('Connected to: ' + 6969 + ' 0.0.0.0\r\n');
  console.log('Connection Open!!' + '\r\n');

  //takes input in from client
  process.stdin.on('data', (chunk) => {
    client.write(chunk);
  });
});

//writes the data from client across all connections
client.on('data', (data) => {
  process.stdout.write(data);
});

//client ends connections. signals to the server that they are disconnecting
client.on('end', () => {
  client.destroy();
  process.stdout.write('disconnected from server\r\n');
});
