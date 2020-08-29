'use strict';
const timeItems = document.querySelectorAll('.time__output-item:not(.colon)'),
  dateOutput = document.querySelector('.date__output');

const outputDate = () => {
  const time = new Date();

  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();

  year = String(year);
  month = month >= 10 ? String(month) : '0' + String(month);
  day = day >= 10 ? String(day) : '0' + String(day);

  let dateStr = `${day}.${month}.${year}`;

  dateOutput.textContent = dateStr;
}

const outputTime = () => {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour >= 10 ? String(hour) : '0' + String(hour);
  min = min >= 10 ? String(min) : '0' + String(min);
  sec = sec >= 10 ? String(sec) : '0' + String(sec);

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      timeItems[0].textContent = hour[i];
      timeItems[2].textContent = min[i];
      timeItems[4].textContent = sec[i];
    } else {
      timeItems[1].textContent = hour[i];
      timeItems[3].textContent = min[i];
      timeItems[5].textContent = sec[i];
    }
  }
}

const outputDateTime = () => {
  outputDate();
  outputTime();
}

outputDateTime();
setInterval(outputDateTime, 1000);