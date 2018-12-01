const { MARKET_GET, MARKET_UPDATE, MARKET_ADD_GOODS, MARKET_LOCAL_GET } = require('../action-types');

const { handleUpdateMarket } = require('./handleUpdateMarket');
const { handleGetMarket } = require('./handleGetMarket');
const { handleAddNewGoods } = require('./handleAddNewGoods');
const { handleGetLocalMarket } = require('./handleGetLocalMarket');

const marketEvents = (connection, client) => {
  client.on(MARKET_GET, handleGetMarket);
  client.on(MARKET_UPDATE, handleUpdateMarket(connection));
  client.on(MARKET_ADD_GOODS, handleAddNewGoods(client));

  client.on(MARKET_LOCAL_GET, handleGetLocalMarket);
};

module.exports = {
  marketEvents,
};
