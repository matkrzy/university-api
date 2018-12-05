const { getMongoRepository } = require('typeorm');

const { Product } = require('../../../../../models/product/product.model');

const getAllProducts = async (conditions, asObject = true) => {
  const productsRepository = getMongoRepository(Product);

  const products = await productsRepository.find({ ...conditions });

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
