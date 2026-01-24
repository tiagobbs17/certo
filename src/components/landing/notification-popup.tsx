"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const locations = [
  'Madrid', 'Barcelona', 'Cidade do México', 'Buenos Aires', 'Bogotá', 'Lima', 'Santiago', 'Caracas', 'Montevideo', 'Quito'
];

export function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    const showNotification = () => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      setCurrentLocation(randomLocation);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Fica visível por 5 segundos

    };

    // Mostra a primeira notificação após 25 segundos
    const firstTimeout = setTimeout(showNotification, 25000);

    // Mostra notificações subsequentes a cada 45 segundos
    const interval = setInterval(showNotification, 45000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    setShow(false); // Impede que novas notificações apareçam
  };

  if (!show) return null;

  return (
    <div
      className={cn(
        'fixed bottom-5 left-5 z-50 w-80 rounded-xl bg-card shadow-2xl transition-all duration-500 ease-in-out',
        'transform translate-y-full opacity-0',
        isVisible && 'translate-y-0 opacity-100'
      )}
    >
      <div className="relative p-4">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground"
          aria-label="Cerrar"
        >
          <X size={16} />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
             <Image 
                src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2022%20de%20jan.%20de%202026,%2015_09_09.png?updatedAt=1769105482523"
                alt="Sello de compra"
                width={60}
                height={60}
                className="rounded-full"
             />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Alguien de <span className="font-bold text-foreground">{currentLocation}</span> acaba de comprar.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">hace unos segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
