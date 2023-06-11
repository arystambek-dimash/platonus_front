const clock = document.getElementById('clock-circle');
const day = document.getElementById('day');
const weekendDays = document.getElementById('weekday');
const monthTime = document.getElementById('month')
const currentTime = new Date();
const weekdays = ["Воскресенье", "Пондельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function getTime() {
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    clock.innerHTML = formattedTime;
}

function updateClock() {
    currentTime.setTime(Date.now());
    getTime();
    setTimeout(updateClock, 60000);
}

updateClock();

function updateWeekdayAndDate() {
    let weekdayIndex = currentTime.getDay();
    let weekdayName = weekdays[weekdayIndex];
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    const monthName = months[month];
    weekendDays.textContent = weekdayName;
    day.textContent = date;
    monthTime.textContent = monthName
  }
  updateWeekdayAndDate();
  setInterval(updateWeekdayAndDate, 86400000); 
  

  function changeColor(element) {
    var buttons = document.getElementsByClassName('box-nav-a');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('clicked');
    }
    element.classList.add('clicked');
}
