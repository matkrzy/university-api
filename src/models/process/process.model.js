class Process {
  constructor(id, label, nodes, connections) {
    this.id = id;
    this.label = label;
    this.nodes = nodes;
    this.connections = connections;
  }
}

module.exports = {
  Process,
};
