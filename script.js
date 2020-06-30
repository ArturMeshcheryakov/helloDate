window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const time = document.querySelector('.time');
  const dayArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dateArr = ['дня', 'дней', 'день'];

  function rightDate(num) {
    if (num >= 0 && num < 10) return '0' + num;

    if (num < 0) {
      num = 0;
      return '0' + num;
    }

    return num;
  }

  function timeOfDay(num) {
    if (num >= 6 && num < 12) return 'Доброе утро';
    if (num >= 12 && num < 18) return 'Добрый день';
    if (num >= 18 && num <= 23) return 'Добрый вечер';
    if (num >= 0 && num < 6) return 'Доброй ночи';
  }

  function formatDate(num, arr) {
    let num1 = num % 10;

    if (num > 4 && num < 21) return arr[1];
    if (num1 > 1 && num1 < 5) return arr[0];
    if (num1 === 1) return arr[2];
    return arr[1];
  }

  function dateNow() {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = rightDate(date.getHours());
    let minutes = rightDate(date.getMinutes());
    let seconds = rightDate(date.getSeconds());
    let ofDay = timeOfDay(date.getHours());
    let today = dayArr[date.getDay()];
    let message = '';

    function newYear() {
      let nextDate = new Date("December 31, 2020");
      let oneDay = 24 * 60 * 60 * 1000;

      let remains = Math.round((nextDate.getTime() - date.getTime()) / oneDay);

      if (remains < 0) {
        return message = 'С новым годом!!!';
      }
      else {
        return message = 'До нового года осталось ' + remains + ' ' + formatDate(remains, dateArr) + '!';
      }
    }

    let yearNew = newYear();

    return {day, month, year, hours, minutes, seconds, ofDay, today, yearNew};
  }

  function updateDate() {
    let date = dateNow();

    time.innerHTML = `
      ${date.ofDay} <br>
      Сегодня: ${date.today} <br>
      Текущее время: ${date.hours}:${date.minutes}:${date.seconds} <br>
      ${date.yearNew}
    `;

    setTimeout(updateDate, 1000);
  }

  updateDate();
});
