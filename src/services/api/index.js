require('dotenv').config();

const typeorm = require('typeorm');

const { createServer } = require('./server/server');
const { createSocket } = require('./socket/socket');

typeorm
  .createConnection()
  .then(async connection => {
    const server = createServer().listen(3001);

    const socket = createSocket({
      server,
    });
  })
  .catch(err => console.log(err));
