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

Math.s