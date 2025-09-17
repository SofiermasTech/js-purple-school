class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  set mileage(newMileage) {
    return (this.#mileage = newMileage);
  }

  get mileage() {
    return this.#mileage;
  }

  info() {
    console.log(
      `Бренд: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`
    );
  }
}

const car = new Car('audi', '3', '255');
car.info();
car.mileage = 500;
console.log(car.mileage);
car.info();