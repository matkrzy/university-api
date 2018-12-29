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
    label: {
      type: 'String',
      required: true,
    },
    nodes: {
      type: 'Array',
      required: true,
    },
    connections: {
      type: 'Object',
      required: true,
    },
  },
});
