const Character = function (name, lang, race) {
  this.name = name;
  this.lang = lang;
  this.race = race;
};

Character.prototype.speak = function () {
  console.log(`${this.name}, ${this.lang}`);
};

function Orc(name, lang, weapon) {
  Character.call(this, name, lang, 'Орк');
  this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.kick = function () {
  console.log(`${this.weapon}`);
};

const orc = new Orc('Гром', 'Орочьем', 'Топор');

orc.speak();
orc.kick();
console.log(orc);

function Elf(name, lang, spell) {
  Character.call(this, name, lang, 'Эльф');
  this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.useSpell = function () {
  console.log(`${this.spell}`);
};

const elf = new Elf('Леголас', 'Эльфийском', 'Огненное');

elf.speak();
elf.useSpell();
console.log(elf);
