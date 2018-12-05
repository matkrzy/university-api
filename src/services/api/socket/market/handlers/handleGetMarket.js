const { getAllProducts } = require('../helpers/getAllProducts');

const handleGetMarket = async (_payload = {}, callback) => {
  const payload = _payload || {};

  const { processId } = payload;

  const products = await getAllProducts({ where: { $or: [{ isGlobal: true }, { processId }] } });

  callback({ data: products });
};

module.exports = {
  handleGetMarket,
};
