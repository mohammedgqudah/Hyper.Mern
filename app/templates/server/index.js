/* eslint no-undefined: "off" */

import path from 'path';
import express  from 'express';
import compression  from 'compression';
import helmet  from 'helmet';
import bodyParser  from 'body-parser';

const app  = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

require('dotenv').config();
require('dotenv').config({ path: path.join(__dirname, '..', '.env.base') });

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./setup/auth.js')(app);
require('./setup/sessions')(app);
require('./setup/cookies')(app);
require('./setup/cors')(app);
require('./setup/static')(app);
require('./setup/logs')(app);
require('./setup/routes')(app, io);
require('./setup/socketio')(io);
require('./setup/start')(server);

export default app;
