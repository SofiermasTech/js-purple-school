// Валидация возраста
const user1 = '2011-10-07';
const user2 = '1988-01-01';

function validationAge(age) {
  const currentDate = new Date();
  const userDate = new Date(age);

  if (isNaN(userDate.getTime())) return false

  const isValidYear = currentDate.getFullYear() - userDate.getFullYear();
  const isValidMonth = userDate.getMonth() - currentDate.getMonth();
  const isValidDate = userDate.getDate() - currentDate.getDate();

  return isValidYear >= 14 && isValidMonth <= 0 && isValidDate <= 0
}


console.log(validationAge(user1));
console.log(validationAge(user2));
