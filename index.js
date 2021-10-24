
const refs = {
  daysValue: document.querySelector('[data-value="days"]'),
  hoursValue: document.querySelector('[data-value="hours"]'),
  minsValue: document.querySelector('[data-value="mins"]'),
  secsValue: document.querySelector('[data-value="secs"]')
};


class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.init();
  }

  init() {
    this.intervalId = setInterval(() => {
      const deltaTime = this.targetDate - new Date();
      if (deltaTime <= 0) {
        return clearInterval(this.intervalId);
      } 
      const time = this.getTimeComponents(deltaTime);
      this.updateTimer(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  
 updateTimer({ days, hours, mins, secs }) {
  
  refs.daysValue.textContent = String(days).padStart(3, "0");
  refs.hoursValue.textContent = hours;
  refs.minsValue.textContent = mins;
  refs.secsValue.textContent = secs;
}
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date("Nov 16, 2021"),
});





