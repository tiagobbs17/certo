"use client";

import { useState, useEffect } from 'react';

export function Header() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setCurrentDate(today.toLocaleDateString('es-ES', options));
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground text-center font-bold h-10 flex items-center justify-center">
      <div className="container mx-auto">
        {currentDate && (
          <p className="text-sm">
            Oferta válida hoy: {currentDate}
          </p>
        )}
      </div>
    </header>
  );
}
