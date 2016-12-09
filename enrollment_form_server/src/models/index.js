import Mongoose from 'mongoose';

import Config from './../../config';

const ENVIRONMENT = process.env.NODE_ENV || 'DEVELOPMENT';

Mongoose.connect(Config[ENVIRONMENT].DATABASE.URL);

Mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    process.stdout.write('connected to mongo via mongoose connector');
  })
;


