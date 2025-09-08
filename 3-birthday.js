// Валидация возраста
const user1 = '2011-10-07';
const user2 = '1988-01-01';

function validationAge(age) {
  const currentDate = new Date();
  const userDate = new Date(age);

  if (isNaN(userDate.getTime())) return false;

  const isValidYear = currentDate.getFullYear() - userDate.getFullYear();
  const isValidMonth = userDate.getMonth() - currentDate.getMonth();
  const isValidDate = userDate.getDate() - currentDate.getDate();

  return isValidYear >= 14 && isValidMonth <= 0 && isValidDate <= 0;
}

console.log(validationAge(user1));
console.log(validationAge(user2));

// const timerPizza = setInterval(() => {
//   return console.log(timer - 1000);
// }, 1000);

function pizzaTimer(ms) {
  const today = new Date();
  const endTime = today.getTime() + ms;
  const timerInterval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-RU', {
        minute: 'numeric',
        second: 'numeric',
      }).format(endTime + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(timerInterval);
    console.log('the end')
  }, ms + 100);
}

pizzaTimer(5000);
