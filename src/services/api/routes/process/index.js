const express = require('express');
const { getMongoRepository } = require('typeorm');

const { Process } = require('../../../../models/process/process.model');

const createProcessRouting = () => {
  const router = express.Router();

  router.get('/', async (req, res, next) => {
    const processRepository = getMongoRepository(Process);
    const processes = await processRepository.find({ select: ['id', 'name'] });

    res.json({ data: processes });
  });

  return router;
};

module.exports = {
  createProcessRouting,
};
