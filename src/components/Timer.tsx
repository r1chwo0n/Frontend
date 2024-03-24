import React, { useState, useEffect, useRef } from 'react';

const COUNTDOWN_TIMER_START = 60;

const Timer = () => {
  const [countdownTime, setCountdownTime] = useState(COUNTDOWN_TIMER_START);
  const [isCountdownRunning, setIsCountdownRunning] = useState(true);
  const countdownIntervalId = useRef(0);

  useEffect(() => {
    doStartCountdown();
    return () => {
      doStopCountdown();
    };
  }, []);

  useEffect(() => {
    if (countdownTime <= 0) {
      doStopCountdown();
    }
  }, [countdownTime]);

  const doStartCountdown = () => {
    countdownIntervalId.current = window.setInterval(() => {
      setCountdownTime((pastState) => pastState - 1);
    }, 1000);
  };

  const doStopCountdown = () => {
    window.clearInterval(countdownIntervalId.current);
  };

  const doResetCountdown = () => {
    doStopCountdown();
    setCountdownTime(COUNTDOWN_TIMER_START);
    doStartCountdown();
  };

  const onCountdownToggleButtonClick = () => {
    if (countdownTime <= 0) {
      doResetCountdown();
    } else if (isCountdownRunning) {
      doStopCountdown();
      setIsCountdownRunning(false);
    } else {
      doStartCountdown();
      setIsCountdownRunning(true);
    }
  };



  return (
    <div className="countdown-timer-container">
      <p className="countdown-timer-time">{countdownTime}</p>
    </div>
  );
};

export default Timer;
