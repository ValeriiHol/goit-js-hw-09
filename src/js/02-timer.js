// npm i flatpickr --save
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// npm i notiflix
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    field: document.querySelector('.field'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    mins: document.querySelector('[data-minutes]'),
    secs: document.querySelector('[data-seconds]'),
    fieldEl: document.querySelectorAll('.timer > .field'),
    labelEl: document.querySelectorAll('.field > .label'),
  };

refs.timer.style.display = 'flex';
refs.timer.style.gap = '15px';
refs.timer.style.fontSize = '30px';
refs.fieldEl.forEach(el => {
   el.style.display = 'flex';
   el.style.flexDirection = 'column';
   el.style.alignItems = 'center';  
});
refs.labelEl.forEach(el => {
   el.style.fontSize = '15px';  
});
  
refs.startBtn.addEventListener('click', timerSet);
refs.startBtn.disabled = true;
refs.input.addEventListener('input', onInputChange);

let selectedDate = '';

const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
     if (selectedDates[0] <= options.defaultDate) {
       Notiflix.Notify.failure('Будь ласка введіть дату у майбутьому>');
     } else {
       refs.startBtn.disabled = false;
     }    
   }
};

const calendar = flatpickr('#datetime-picker', options);

function onInputChange(e) {
    selectedDate = new Date(e.currentTarget.value);
  };

function timerSet() {
    timerId = setInterval(() => {
      console.log(`====timerSet========`);
      refs.startBtn.disabled = true;
      const time = selectedDate - Date.now();
      console.log(time);

      if (time <= 0) {
        console.log(time);
        clearInterval(timerId);
        return;
      }
      convertMs(time);
    }, 1000);
  };

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    refs.days.textContent = Math.floor(ms / day);
    // Remaining hours
    refs.hours.textContent = Math.floor((ms % day) / hour);
    // Remaining minutes
    refs.mins.textContent = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    refs.secs.textContent = Math.floor((((ms % day) % hour) % minute) / second);  
}

// const addLeadingZero = value => String(value).padStart(2, 0);
  
