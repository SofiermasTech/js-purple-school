const array1 = [
  {id: 1, name: 'Вася'},
  {id: 2, name: 'Петя'},
  {id: 1, name: 'Вася'},
];

const setArray = new Set();
const filterArray = array1.filter((el) => {
  if (!setArray.has(el.id)) {
    setArray.add(el.id);
    return true;
  }
  return false;
});

console.log(filterArray);