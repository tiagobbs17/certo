"use client";

import { useState, useEffect } from 'react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 35,
    seconds: 47,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          return prevTime;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-green-600 text-white p-2 text-center font-bold h-10">
      <div className="container mx-auto">
        <p>
          🍩 La oferta termina en: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} 🍩
        </p>
      </div>
    </header>
  );
}
