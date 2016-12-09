const Server = require('./dist/server');
const CONFIG = require('./config/index.json');

const ENVIRONMENT = process.env.NODE_ENV || 'DEVELOPMENT';

Server.listen(CONFIG[ENVIRONMENT].SERVER.PORT);
