const clock = document.getElementById('clock-circle');
const day = document.getElementById('day');
const weekendDays = document.getElementById('weekday');
const monthTime = document.getElementById('month')
const currentTime = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
  



