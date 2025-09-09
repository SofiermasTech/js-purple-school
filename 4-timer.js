const newYearDate = new Date(2026, 0, 1);
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const sec = document.querySelector('.sec');

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function countdown() {
  const today = new Date();
  const result = newYearDate - today;

  if (result <= 0) {
    clearInterval(timerId);
    month.textContent =
      day.textContent =
      hour.textContent =
      minute.textContent =
      sec.textContent =
        '00';
    return;
  }

  let monthDiff = newYearDate.getMonth() - today.getMonth() + 12;
  if (today.getDate() > newYearDate.getDate()) {
    monthDiff--;
  }

  const totalDay = Math.floor(result / DAY);

  const restTimeDay = result % DAY;

  const totalHour = Math.floor(restTimeDay / HOUR);
  const restTimeHour = restTimeDay % HOUR;

  const totalMinute = Math.floor(restTimeHour / MINUTE);
  const restTimeMinute = restTimeHour % MINUTE;

  const totalSeconds = Math.floor(restTimeMinute / SECOND);

  month.textContent = String(monthDiff).padStart(2, '0');
  day.textContent = String(totalDay).padStart(2, '0');
  hour.textContent = String(totalHour).padStart(2, '0');
  minute.textContent = String(totalMinute).padStart(2, '0');
  sec.textContent = String(totalSeconds).padStart(2, '0');
}

const timerId = setInterval(() => {
  countdown();
}, 1000);
