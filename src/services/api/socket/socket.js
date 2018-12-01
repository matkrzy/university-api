const { marketEvents } = require('./market/handlers');
const { processEvents } = require('./process/handlers');

const { CONNECTION, ERROR } = require('./dictionary');

const createSocket = (container = {}) => {
  const { server } = container;
  const connection = require('socket.io').listen(server);

  connection.on(CONNECTION, async function(client) {
    processEvents(connection, client);
    marketEvents(connection, client);

    client.on(ERROR, error => console.error(error));

    connection.clients((error, clients) => {
      if (error) throw error;
      console.log(clients);
    });
  });

  return connection;
};

module.exports = {
  createSocket,
};
