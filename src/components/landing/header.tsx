"use client";

import { useState, useEffect } from 'react';

export function Header() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(now);
    
    // Set target time to next occurrence of 23:59:59
    if (now.getHours() >= 23 && now.getMinutes() >= 59 && now.getSeconds() >= 59) {
      target.setDate(target.getDate() + 1);
    }
    target.setHours(23, 59, 59, 999);

    const difference = target.getTime() - now.getTime();

    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });


  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white p-2 text-center font-bold">
      <div className="container mx-auto">
        <p>
          🎄 ¡OFERTA ESPECIAL! La oferta termina en: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} 🎄
        </p>
      </div>
    </header>
  );
}
