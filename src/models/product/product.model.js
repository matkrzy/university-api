class Product {
  constructor(id, label, amount, processId) {
    this.id = id;
    this.label = label;
    this.amount = amount;
    this.processId = processId;
  }
}

module.exports = {
  Product,
};
