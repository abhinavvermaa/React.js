import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-row space-x-4 p-5 text-gray-900 ">
      <div className="text-center">
        <p className="text-3xl font-bold">{timeLeft.days} : </p>
        <p className="text-sm">Days </p>

      </div>
      
      <div className="text-center">
        <p className="text-3xl font-bold">{timeLeft.hours} : </p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{timeLeft.minutes} : </p>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{timeLeft.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
