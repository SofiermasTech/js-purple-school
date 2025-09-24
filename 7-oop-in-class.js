class Character {
  constructor(name, lang, race) {
    this.name = name;
    this.lang = lang;
    this.race = race;
  }

  speak() {
    console.log(`${this.name}, ${this.lang}`);
  }
}

class Orc extends Character {
  constructor(name, lang, race, weapon) {
    super(name, lang, race);
    this.weapon = weapon;
  }

  kick() {
    console.log(`${this.weapon}`);
  }

  speak() {
    console.log(`This is ${this.name} - ${this.race}, speak on - ${this.lang}`);
  }
}

const orc = new Orc('Гром', 'Орочьем', 'Orc', 'Топор');

orc.speak();
orc.kick();
console.log(orc);

class Elf extends Character {
  constructor(name, lang, race, spell) {
    super(name, lang, race);
    this.spell = spell;
  }

  useSpell() {
    console.log(`${this.spell}`);
  }

  speak() {
    console.log(`This is ${this.name} - ${this.race}, speak on - ${this.lang}`);
  }
}

const elf = new Elf('Леголас', 'Эльфийском', 'Elf', 'Огненное');

elf.speak();
elf.useSpell();
console.log(elf);
