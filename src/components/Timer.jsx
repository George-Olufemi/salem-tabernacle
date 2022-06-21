import React,{useEffect, useRef, useState} from 'react';
import './Timer.css';

const Timer = () => {
  const[ timerDays, setTimerDays] =useState('00');
  const[ timerHours, setTimerHours] =useState('00');
  const[ timerMinutes, setTimerMinutes] =useState('00');
  const[ timerSeconds, setTimerSeconds] =useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('June 22 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
      const seconds = Math.floor(((distance % (1000 * 60 ))) / 1000);
  
      if (distance < 0 ){
        // stop timer   
        clearInterval(interval.current);
      } else {
       // update timer
       setTimerDays(days);
       setTimerHours(hours);
       setTimerMinutes(minutes);
       setTimerSeconds(seconds);
      }
    }, 1000);
  
  };


  //componentDidMount
   useEffect(() => {
     startTimer();
     return() => {
      clearInterval(interval.current);
     };
   });


  return (
    <div className="">
      <section className="timer-container h-screen md:h-0">
        <section className='timer'>
          {/* #first-child */}
          <div className='main'>
            <h3 className="text-2xl">Our Next service is coming up in:</h3>
          </div>

          <div className="time">
            <section>
              <h3>{timerDays}</h3>
              <h3><small>Days</small></h3>
            </section>
            <span>:</span>

            <section>
              <h3>{timerHours}</h3>
              <h3><small>Hours</small></h3>
            </section>
            <span>:</span>

            <section>
              <h3>{timerMinutes}</h3>
              <h3><small>Minutes</small></h3>
            </section>
            <span>:</span>

            <section>
              <h3>{timerSeconds}</h3>
              <h3><small>Seconds</small></h3>
            </section>
            
          </div>
        </section>

      </section>
    </div>
  );
}

export default Timer;