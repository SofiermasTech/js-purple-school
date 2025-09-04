const currency = [
  {
    name: 'USD',
    value: 1,
    format: 'en-US',
    style: 'currency',
    locales: 'en',
  },
  {
    name: 'RUB',
    value: 1 / 80,
    format: 'ru-Ru',
    style: 'currency',
    locales: 'ru',
  },
  {
    name: 'EUR',
    value: 1 / 0.85,
    format: 'de-DE',
    style: 'currency',
    locales: 'de',
  },
];

function convert(sum, initialCurrency, convertCurrency) {
  const currentValue = currency.find((c) => c.name === initialCurrency);
  const convertValue = currency.find((c) => c.name === convertCurrency);

  console.log(currentValue);
  console.log(convertValue);
  console.log(sum);

  const formatter = new Intl.NumberFormat(convertValue.locales, {
    style: convertValue.style,
    currency: convertValue.name,
  });

  if (currentValue && convertValue) {
    const totalSum = (Number(sum) * currentValue.value) / convertValue.value;

    return formatter.format(totalSum);
  } else {
    return null;
  }
}

console.log(convert(100, 'USD', 'RUB')); // Ожидается: "8000.00 RUB"
console.log(convert(100, 'RUB', 'USD')); // Ожидается: "1.25 USD"
console.log(convert(100, 'USD', 'EUR')); // Ожидается: "1.25 USD"
console.log(convert(100, 'GBP', 'USD')); // Ожидается: null

// Задание на сравнение дат
const dayNow = new Date();

// задача 2
const users1 = [
  {
    name: 'Alex',
    birthday: '12/12/2025',
  },
  {
    name: 'Sofa',
    birthday: '09/04/2025',
  },
];

function isBirthday(users) {
  const birthdayUser = users.filter(function (user) {
    const userDate = new Date(user.birthday);
    return (
      dayNow.getDate() === userDate.getDate() &&
      dayNow.getMonth() === userDate.getMonth()
    );
  });

  return birthdayUser.map((u) => u.name);
}

console.log(isBirthday(users1));

// задача 1
const user1 = {
  name: 'Alex',
  birthday: '09/03/2000',
};

function isBirthday1(user) {
  const dayNow = new Date();
  const userDate = new Date(user.birthday);
  const userDay = userDate.getDate();
  const userMonth = userDate.getMonth();

   return dayNow.getDate() === userDay && dayNow.getMonth() === userMonth;
}

console.log(isBirthday1(user1));
