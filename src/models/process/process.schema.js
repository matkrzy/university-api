const { EntitySchema } = require('typeorm');

const { Process } = require('./process.model');

module.exports = new EntitySchema({
  name: 'Process',
  target: Process,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
    },
    name: {
      type: 'String',
    },
    nodes: {
      type: 'Array',
    },
    connections: {
      type: 'Object',
    },
  },
});
