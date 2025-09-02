const array1 = [
  {id: 1, name: 'Вася'},
  {id: 2, name: 'Петя'},
  {id: 1, name: 'Вася'},
];

// Решение 2
const uniqueArray = array1.map((el) => {
  return el.id;
});
console.log(uniqueArray);

const setArray = new Set(uniqueArray);
console.log(setArray);

const resultArray = Array.from(setArray).map((id) => {
  return array1.find((user) => user.id === id);
});
console.log(resultArray);

// Решение 1
// const setArray = new Set();
// const filterArray = array1.filter((el) => {
//   if (!setArray.has(el.id)) {
//     setArray.add(el.id);
//     return true;
//   }
//   return false;
// });

// console.log(filterArray);

// Решение 3
function number(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(number(1, 2));
