const net = require('net');

const options = {
  'port': 8080,
  'host': '127.0.0.1'
};

// creates a socket connection to a server
const client = net.connect(options, () => {
  console.log('Connected to Server!');
  client.write('Hello server');
});

// handles data received
client.on('data', (data) => {
  console.log('data: ', data);
});

// Take input from the commandline
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    client.write(chunk)
  }
});