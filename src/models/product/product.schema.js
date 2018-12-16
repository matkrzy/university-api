const { EntitySchema } = require('typeorm');

const { Product } = require('./product.model');

module.exports = new EntitySchema({
  name: 'Product',
  target: Product,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
    },
    label: {
      type: 'String',
      unique: true,
    },
    amount: {
      type: 'NumberInt',
    },
    processId: {
      type: 'uuid',
    },
  },
});
