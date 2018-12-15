const { PROCESS_GET, PROCESS_UPDATE } = require('../action-types');

const { handleGetProcess } = require('./handleGetProcess');
const { handleUpdateProcess } = require('./handleUpdateProcess');

const processEvents = (connection, client) => {
  client.on(PROCESS_GET, handleGetProcess(client));
  client.on(PROCESS_UPDATE, handleUpdateProcess);
};

module.exports = {
  processEvents,
};
