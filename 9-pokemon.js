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

    const effect = data.effect_entries.find((item) => item.language.name === 'en');
    console.log(effect.effect);
  });
});
