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
  constructor(name, lang, weapon) {
    super(name, lang);
    this.weapon = weapon;
  }

  kick() {
    console.log(`${this.weapon}`);
  }
}

const orc = new Orc('Гром', 'Орочьем', 'Топор');

orc.speak();
orc.kick();
console.log(orc);

class Elf extends Character {
  constructor(name, lang, spell) {
    super(name, lang);
    this.spell = spell;
  }

  useSpell() {
    console.log(`${this.spell}`);
  }
}

const elf = new Elf('Леголас', 'Эльфийском', 'Огненное');

elf.speak();
elf.useSpell();
console.log(elf);
