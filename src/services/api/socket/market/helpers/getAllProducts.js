const { getMongoRepository } = require('typeorm');

const { Product } = require('../../../../../models/product/product.model');

const getAllProducts = async (where, asObject = true, select = ['id', 'label', 'amount']) => {
  const productsRepository = getMongoRepository(Product);

  const products = await productsRepository.find({ where, select });

  if (asObject) {
    return products.reduce((prev, next) => {
      return {
        ...prev,
        [next.id]: next,
      };
    }, {});
  } else {
    return products;
  }
};

module.exports = {
  getAllProducts,
};
