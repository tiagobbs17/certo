"use client";

import { useState, useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const names = [
  'Maria G.', 'Sofia L.', 'Camila R.', 'Valentina P.', 'Isabella M.', 'Mariana V.', 'Gabriela S.', 'Daniela C.', 'Valeria T.', 'Ana J.',
  'Luisa F.', 'Carolina H.', 'Paula N.', 'Laura B.', 'Alejandra Q.', 'Andrea E.', 'Natalia O.', 'Jimena A.', 'Renata D.', 'Antonia I.'
];

const locations = [
  'de Espanha',
  'do México',
  'da Colômbia',
  'da Argentina',
  'do Chile',
  'do Uruguai'
]

export function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setCurrentName(randomName);
      setCurrentLocation(randomLocation);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 8000); // Fica visível por 8 segundos
    };

    // Mostra a primeira notificação após 1 minuto
    const firstTimeout = setTimeout(showNotification, 60000);

    // Mostra notificações subsequentes a cada 1 minuto
    const interval = setInterval(showNotification, 60000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
    setShow(false); // Impede que novas notificações apareçam
  };

  return (
    <div
      className={cn(
        'fixed bottom-5 left-5 z-50 w-80 rounded-xl bg-card shadow-2xl transition-all duration-500 ease-in-out',
        'transform translate-y-full opacity-0',
        isVisible && 'translate-y-0 opacity-100',
        !show && 'hidden'
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
                src="https://ik.imagekit.io/cbes7rupj/1768596852.png"
                alt="Ebook Receitas de Bolo"
                width={60}
                height={60}
                className="rounded-md object-contain"
             />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">{currentName} {currentLocation}</p>
            <p className="text-sm text-muted-foreground">acabou de comprar o curso <span className="font-bold text-primary">Receitas de Bolo</span></p>
            <p className="text-xs text-muted-foreground/80 mt-1">há poucos segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
