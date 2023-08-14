/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Timer.css"; 

function Timer({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const apiDate = new Date(time);
      const timeDifference = apiDate.getTime() - currentDate.getTime();
      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime("00:00:00");
      } else {
        const secondsRemaining = Math.floor(timeDifference / 1000);
        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;
        setRemainingTime(
          `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <span className="timer" data-testid="timerTest">{remainingTime}</span>;
}

// Validación de propiedades usando PropTypes
Timer.propTypes = {
  time: PropTypes.string.isRequired, // Espera una prop 'time' de tipo string y es requerida
};

export default Timer;



