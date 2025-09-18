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

// --------------------

class Enemy {
  health;

  constructor(health) {
    this.health = health;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;

  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.receiveDamage(this.#damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  receiveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);

sword.strike(enemy);
sword.strike(enemy);
