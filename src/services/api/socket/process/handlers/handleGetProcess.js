const { getMongoRepository } = require('typeorm');
const { Process } = require('../../../../../models/process/process.model');

const handleGetProcess = client => async (params, callback) => {
  const { id } = params;

  client.socketData = {
    processId: id,
  };

  const processesRepository = getMongoRepository(Process);
  const process = await processesRepository.findOne({
    where: {
      id,
    },
  });

  callback(process);
};

module.exports = {
  handleGetProcess,
};
