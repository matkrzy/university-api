const { getMongoRepository } = require('typeorm');
const { v4 } = require('uuid');

const { MARKET_LOCAL_UPDATE } = require('../action-types');
const { Product } = require('../../../../../models/product/product.model');

const { getAllProducts } = require('../helpers/getAllProducts');

const handleAddNewGoods = client => async (payload, callback) => {
  const productsRepository = getMongoRepository(Product);

  const { label, processId } = payload;

  const product = new Product(v4(), label, 0, false, processId);

  const status = await productsRepository.insertOne(product);

  const products = await getAllProducts({ isGlobal: false, processId });

  client.emit(MARKET_LOCAL_UPDATE, { data: products });

  callback();
};

module.exports = {
  handleAddNewGoods,
};
