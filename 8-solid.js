class Billing {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {}
}

class fixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount;
  }
}

class hourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class itemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  calculateTotal() {
    return this.amount * this.items;
  }
}

const item = new itemBilling(5, 4);

console.log(item);
console.log(item.calculateTotal());
