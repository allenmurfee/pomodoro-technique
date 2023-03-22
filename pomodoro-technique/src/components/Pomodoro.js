import React, { useState, useEffect } from "react";

function Pomodoro() {
  const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    if (time === 0) {
      clearInterval(interval);
      setIsActive(true);
      setIsBreak(!isBreak);
      setTime(isBreak ? 1500 : 300); // 5 minutes for break, 25 minutes for work
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
    setIsBreak(false);
  };

  const takeBreak = () => {
    if (isBreak === true) {
       setIsBreak(false)
       setTime(1500)
    } else {
       setIsBreak(true)
       setTime(300)
    }
    
  };

  return (
    <div>
      <h2>{isBreak ? "Break Time!" : "Start Your Focus Session!"}</h2>
      <h2>{`${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`}</h2>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={takeBreak}>{isBreak ? "Work" : "Break"}</button>
    </div>
  );
}

export default Pomodoro;
