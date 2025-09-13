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

// ------------------
function noSpace(x) {
  return x
    .split('')
    .filter((item) => item !== ' ')
    .join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// ------------------
function digitize(n) {
  return n
    .toString()
    .split('')
    .map((i) => Number(i))
    .reverse();
}
console.log(digitize(12356));
console.log(digitize(0));

// ------------------
let lastNumber = 5;
let multiplicationResult = 1;

function multiplication() {
  for (let i = 2; i <= lastNumber; i++) {
    if (i % 2 === 0) {
      multiplicationResult *= i;
    } else {
      multiplicationResult;
    }
  }
}

multiplication();
console.log(multiplicationResult);

// ------------------
const areaOrPerimeter = function (l, w) {
  const s = l === w ? l * w : l * 2 + w * 2;
  return s;
};

console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(4, 8));

// ------------------
function array1(string) {
  const stringArray = string.split(',');
  if (stringArray.length <= 2) return null;

  return stringArray.slice(1, -1).join(' ');
}

console.log(array1('1,2,3,4,5'));
console.log(array1('1,2'));

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// ------------------
class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if(!this.checkPassword(oldPass)) {
      return false
    }

    this.#password === newPass;
    return true;
  }
}

const user = new User('gg', '123')
console.log(user)
console.log(user.login)
