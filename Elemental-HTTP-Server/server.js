const http = require('http');
const requestHandler = require('./requestHandlers/requestHandler');

const PORT = 3000;

http.createServer(requestHandler).listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
