'use client';

import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  
  const initialTimeInSeconds = 18 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md'
      )}
    >
      <div className="bg-green-600 text-white py-2 text-center text-sm font-bold">
        <div className="container flex items-center justify-center gap-2">
          <Clock className="h-5 w-5" />
          <span>¡Oferta de Navidad! Termina en: {formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Placeholder to keep the layout consistent */}
        <div className="w-24"></div> 
        <div className="w-24"></div>
      </div>
    </header>
  );
}
