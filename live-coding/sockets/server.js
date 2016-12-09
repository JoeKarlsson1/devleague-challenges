const net = require('net');

const server = net.createServer((request) => {
  // handles data received
  request.on('data', (data) => {
    console.log('Request recieved /n', data.toString());
  })

  request.write('Hello Client');
  request.end();

  // Handles request ended
  request.on('end', () => {
    console.log('Connection Closed');
  })
})

// Listen for events on port 8080
server.listen({ port: 8080 }, () => {
  const address = server.address();
  console.log(`Opened server on ${address.port}`)
});
