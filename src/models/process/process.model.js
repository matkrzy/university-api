class Process {
  constructor(id, name, nodes, connections) {
    this.id = id;
    this.name = name;
    this.nodes = nodes;
    this.connections = connections;
  }
}

module.exports = {
  Process,
};
