const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { createProcessRouting } = require('../routes/process');

const createApiRouting = () => {
  const router = express.Router();

  router.use('/process', createProcessRouting());

  return router;
};

const createServer = (container = {}) => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(cors());
  server.use(helmet());

  server.use('/api', createApiRouting());

  server.use(errors());

  server.use((err, req, res, next) => {
    const { status, message } = err;

    return res.status(status).json({ error: message });
  });

  return server;
};

module.exports = {
  createServer,
};
