const { getMongoRepository } = require('typeorm');

const { MARKET_UPDATE } = require('../action-types');
const { Product } = require('../../../../../models/product/product.model');

const { getAllProducts } = require('../helpers/getAllProducts');

const handleUpdateMarket = (connection, client) => async (data, callback) => {
  const { productId, amount } = data;
  const { processId } = client.socketData;
  
  const productsRepository = getMongoRepository(Product);

  const product = await productsRepository.findOne({
    where: {
      id: productId,
    },
  });

  const value = product.amount;

  if (value + Number(amount) >= 0) {
    product.amount += Number(amount);

    await productsRepository.updateOne(
      {
        id: product.id,
      },
      {
        $set: product,
      },
    );

    const products = await getAllProducts({ where: { $or: [{ isGlobal: true }, { processId }] } });

    connection.emit(MARKET_UPDATE, { data: products });

    if (callback) {
      callback();
    }
  } else {
    client.emit(MARKET_UPDATE, {
      errors: {
        message: 'Amount is too big',
      },
    });
  }
};

module.exports = {
  handleUpdateMarket,
};
