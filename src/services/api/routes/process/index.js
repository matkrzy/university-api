const express = require('express');
const HttpStatus = require('http-status-codes');
const { getMongoRepository } = require('typeorm');

const { Process } = require('../../../../models/process/process.model');

const createProcessRouting = () => {
  const router = express.Router();

  router.get('/', async (req, res, next) => {
    const processRepository = getMongoRepository(Process);
    const processes = await processRepository.find({ select: ['id', 'label'] });

    res.json({ data: processes });
  });

  router.post('/', async (req, res, next) => {
    const {
      body: { id, nodes, label, connections },
    } = req;

    const process = new Process(id, label, nodes, connections);

    const processRepository = getMongoRepository(Process);
    await processRepository.insertOne(process);

    res.sendStatus(HttpStatus.CREATED);
  });

  router.delete('/:id', async (req, res, next) => {
    const {
      params: { id },
    } = req;

    const processRepository = getMongoRepository(Process);
    await processRepository.deleteOne({ id });

    res.sendStatus(HttpStatus.OK);
  });

  return router;
};

module.exports = {
  createProcessRouting,
};
