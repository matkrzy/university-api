class Product {
  constructor(id, label, amount, isGlobal, processId) {
    this.id = id;
    this.label = label;
    this.amount = amount;
    this.isGlobal = isGlobal;
    this.processId = processId;
  }

  toJson() {
    return {
      id: this.id,
      label: this.label,
      amount: this.amount,
      isGlobal: this.isGlobal,
      processId: this.processId,
    };
  }
}

module.exports = {
  Product,
};
