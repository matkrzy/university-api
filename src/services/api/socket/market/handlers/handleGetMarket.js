const { getAllProducts } = require('../helpers/getAllProducts');

const handleGetMarket = async (payload, callback) => {
  const { processId } = payload;

  const products = await getAllProducts({ isGlobal: true });

  callback({ data: products });
};

module.exports = {
  handleGetMarket,
};
