import React, { useState, useEffect } from 'react';

function Pomodoro() {
  const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
  };

  return (
    <div>
      <h2>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h2>
      <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Pomodoro;
