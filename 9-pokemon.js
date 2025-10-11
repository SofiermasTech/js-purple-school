const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const {abilities} = JSON.parse(this.responseText);
  console.log(abilities);

  const request = new XMLHttpRequest();
  request.open('GET', abilities[0].ability.url);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const effect = data.effect_entries.find(
      (item) => item.language.name === 'en'
    );
    console.log(effect.effect);
  });
});

// ---------------------
function createSelect(array) {
  const select = document.querySelector('#cat');

  array.forEach((c) => {
    const opt = document.createElement('option');
    opt.textContent = c.name;
    opt.value = c.value;
    select.appendChild(opt);
  });
}

function getData(url, errorMessage, metod = 'GET') {
  return fetch(url, {
    metod,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
}

function getCategories() {
  return getData(
    'https://dummyjson.com/products/categories',
    'Can not get categories'
  )
    .then((data) => {
      console.log('Данные категорий:', data);
      return data;
    })
    .catch((error) => {
      console.error('Ошибка запроса:', error);
      return [];
    });
}

getCategories().then((categories) => {
  createSelect(categories);
});
