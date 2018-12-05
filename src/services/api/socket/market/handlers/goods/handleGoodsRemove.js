const { getMongoRepository } = require('typeorm');
const { v4 } = require('uuid');

const { MARKET_UPDATE } = require('../../action-types');
const { Product } = require('../../../../../../models/product/product.model');

const { getAllProducts } = require('../../helpers/getAllProducts');

const handleGoodsRemove = client => async (payload, callback) => {
  const productsRepository = getMongoRepository(Product);

  const { productId } = payload;

  const product = await productsRepository.findOne({ where: { id: productId } });
  const status = await productsRepository.deleteOne({ id: productId });

  const products = await getAllProducts({ where: { $or: [{ isGlobal: true }, { processId: product.processId }] } });

  client.emit(MARKET_UPDATE, { data: products });

  if (callback) callback();
};

module.exports = {
  handleGoodsRemove,
};
