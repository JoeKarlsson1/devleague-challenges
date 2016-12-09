'use strict'

const net = require('net');
const util = require('util');

//array that contains sockets in the chat
let sockets = [];
let socketNames = [];

//function to remove user
const kickUser = (client) => {
  sockets.splice(sockets.indexOf(client), 1);
  process.stdin.write('Closed connection with ' + client.name);
  client.destroy();
}

const server = net.createServer((socket) => {

//try to allow server to ouput to clients
  process.stdin.on('readable', () => {
    const adminInput = process.stdin.read();
    process.stdout.write('[ADMIN]: ' + adminInput);
  });

  process.stdin.on('end', () => {
    process.stdout.write('end');
  });

  //assigning unique username
  socket.username = null;

  //assigning each socket a unique id
  socket.name = socket.remoteAddress + ' ' + socket.remotePort;

  //add the new socket to the array of reconizable servers
  sockets.push(socket);

  //Greet the new socket
  socket.write('Sup n00b - What\'s your name?\r\n');

  //data out to all sockets
  socket.on('data', (data) => {
    if (socket.username === null) {
      for (let j = 0; j < socketNames.length; j++) {
        if (data.toString().trim() === socketNames[j].toString().trim() || data.toString().trim() === '[ADMIN]') {
          return socket.write('pick a different username\r\n' + 'username: ');
        }
      }
      socket.username = data.toString().trim();
      socketNames.push(socket.username);
    }
    process.stdout.write(socket.username + ':' + ' ' + data);
    for (let i = 0; i < sockets.length; i++) {
      if (sockets[i] === socket) continue;
      sockets[i].write(socket.username + ': ' + data.toString());
    }
  });

  //destroy socket so that its connection is closed by the server
  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    process.stdout.write('Connectioned Closed: ' + socket.name + '\r\n');
  });
}).listen(6969, '0.0.0.0');

console.log('Server listening on : PORT ' + 6969 + ' HOST ' + '0.0.0.0');

