const types = [
  {
    name: 'D4',
    max: 4,
  },
  {
    name: 'D6',
    max: 6,
  },
  {
    name: 'D8',
    max: 8,
  },
  {
    name: 'D10',
    max: 10,
  },
  {
    name: 'D12',
    max: 12,
  },
  {
    name: 'D16',
    max: 16,
  },
  {
    name: 'D20',
    max: 20,
  },
];

function findType(type) {
  const typeValue = type.toUpperCase();
  const diceType = types.find((item) => item.name === typeValue);
  if (!diceType) {
    return null;
  } else {
    return randomNumber(diceType.max);
  }
}

function randomNumber(max) {
  let min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(findType('d6'));
console.log(findType('d60'));
