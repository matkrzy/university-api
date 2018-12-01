const { getMongoRepository } = require('typeorm');
const { Process } = require('../../../../../models/process/process.model');

const handleUpdateProcess = async (model, callback) => {
  const processesRepository = getMongoRepository(Process);

  const process = processesRepository.findOne({
    where: {
      id: model.id,
    },
  });

  if (process) {
    process.nodes = model.nodes;
    process.connections = model.connections;

    await processesRepository.updateOne(
      {
        id: model.id,
      },
      {
        $set: process,
      },
    );
  }
};

module.exports = {
  handleUpdateProcess,
};
