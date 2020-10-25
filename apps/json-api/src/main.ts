import { join } from 'path';
import jsonServer from 'json-server';
import debug from 'debug';

// eslint-disable-next-line
require('dotenv').config();

const logger = debug('json:api');

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'assets', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4300, () => {
  logger('APP is running');
})
