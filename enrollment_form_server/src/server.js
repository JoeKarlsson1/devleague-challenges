'use strict';

import Express from 'express';
import BodyParser from 'body-parser';
import Router from './routes';
import Cors from 'cors';

const App = Express();

App.use(Cors({credentials: true, origin: true}));
App.use(BodyParser.urlencoded({ extended: true }));

App.use('/api', Router.Api);

module.exports = App;
