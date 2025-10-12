function getUrl() {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const url = data.abilities[0].ability.url;
      return fetch(url);
    })
    .then((response) => {
      return response.json();
    })
    .then((abilityData) => {
      console.log('Данные способности:', abilityData);
      const englishEffect = abilityData.effect_entries.find(
        (entry) => entry.language.name === 'en'
      );
      if (!englishEffect) {
        throw new Error('Описание на английском не найдено');
      }
      console.log('Описание способности на английском:', englishEffect.effect);
    })
    .catch((error) => {
      console.error('Общая ошибка:', error.message);
    });
}
getUrl();
