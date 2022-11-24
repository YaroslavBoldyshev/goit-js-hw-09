import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./convert-ms"
const refs = {
    datetimePicker: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.disabled = true;
let id;
let timeLeft;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0].getTime());
       console.log(Date.now());

      if (selectedDates[0].getTime() < Date.now()) {
          window.alert("Please choose a date in the future")
      } else {
          refs.startBtn.disabled = false;
          timeLeft = Number(selectedDates[0].getTime() - Date.now());
          refs.startBtn.addEventListener('click', () => {
              id = setInterval(timer, 1000);
              refs.startBtn.disabled = true;
          })
      }

  },
};
flatpickr(refs.datetimePicker, options);
function timer() {
    timeLeft -= 1000;
    if (timeLeft <= 1000) {
        clearInterval(id);
    }
    const {
        days,
        hours,
        minutes,
        seconds,
    } =  convertMs(timeLeft);
    refs.days.textContent = (days+'').padStart(2,0);
    refs.hours.textContent = (hours+'').padStart(2,0);
    refs.minutes.textContent = (minutes+'').padStart(2,0);
    refs.seconds.textContent = (seconds+'').padStart(2,0);
}