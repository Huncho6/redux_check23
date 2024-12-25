import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date("2025-01-01T00:00:00"); // Replace with your target date

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return {
          message: "🎉 It's time! 🎉",
        };
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">My Birthday</h1>
      {timeLeft.message ? (
        <p className="text-2xl">{timeLeft.message}</p>
      ) : (
        <div className="text-2xl space-y-2">
          <p>{timeLeft.days} Days</p>
          <p>{timeLeft.hours} Hours</p>
          <p>{timeLeft.minutes} Minutes</p>
          <p>{timeLeft.seconds} Seconds</p>
        </div>
      )}
    </div>
  );
};

export default CountDown;
