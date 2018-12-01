const express = require('express');

const createMarketRouting = () => {
  const router = express.Router();

  //router.get('/', async (req, res, next) => {
  //  res.json(market);
  //});
  //
  //router.put('/', async (req, res, next) => {
  //  const { body } = req;
  //
  //  res.json();
  //});

  return router;
};

module.exports = {
  createMarketRouting,
};
