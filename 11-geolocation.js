function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation API не поддерживается вашим браузером'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
      {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  });
}

getCurrentLocation()
  .then((position) => {
    const {latitude, longitude} = position.coords;
    const locationElement = document.querySelector('#location');
    if (!locationElement) {
      throw new Error('Элемент #location не найден');
    }
    console.log(position.coords)
    locationElement.textContent = `Широта: ${latitude}, Долгота: ${longitude}`;
  })
  .catch((error) => {
    const locationElement = document.querySelector('#location');
    if (locationElement) {
      locationElement.textContent = `Ошибка: ${error.message} (код: ${
        error.code || 'N/A'
      })`;
    }
    console.error('Ошибка геолокации:', error.message, error.code);
  })
  .finally(() => {
    console.log('Запрос геолокации завершён');
  });
