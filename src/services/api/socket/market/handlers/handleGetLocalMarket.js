const { getAllProducts } = require('../helpers/getAllProducts');

const handleGetLocalMarket = async (payload, callback) => {
  const { processId } = payload;

  const products = await getAllProducts({ isGlobal: false, processId });

  callback({ data: products });
};

module.exports = {
  handleGetLocalMarket,
};
