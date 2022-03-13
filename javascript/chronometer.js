class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    
    
    this.intervalId = setInterval(() => {
      
      this.currentTime ++;
      
    }
    ,1000 );

    return this.intervalId;
  }

  getMinutes() {
    const minutes = this.currentTime/60;
    return Math.floor(minutes);
  }

  getSeconds() {
    const currentSecond = Math.floor((this.currentTime/60 - this.getMinutes(this.currentTime))*60)
    return currentSecond;
  }

  computeTwoDigitNumber(value) {
    if(value<=10){
      return value.toString().padStart(2, "0");
    }
    else return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let time= `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
    return time;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
