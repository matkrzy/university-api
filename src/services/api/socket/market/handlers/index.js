const { MARKET_GET, MARKET_UPDATE, MARKET_GOODS_ADD, MARKET_GOODS_REMOVE } = require('../action-types');

const { handleUpdateMarket } = require('./handleUpdateMarket');
const { handleGetMarket } = require('./handleGetMarket');
const { handleGoodsAdd } = require('./goods/handleGoodsAdd');
const { handleGoodsRemove } = require('./goods/handleGoodsRemove');

const marketEvents = (connection, client) => {
  client.on(MARKET_GET, handleGetMarket);
  client.on(MARKET_UPDATE, handleUpdateMarket(connection, client));
  client.on(MARKET_GOODS_ADD, handleGoodsAdd(client));
  client.on(MARKET_GOODS_REMOVE, handleGoodsRemove(client));
};

module.exports = {
  marketEvents,
};
