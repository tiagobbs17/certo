"use client";

import { useState, useEffect } from 'react';
import { X, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const locations = [
  'Carapicuíba', 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza', 'Curitiba', 'Manaus', 'Recife', 'Porto Alegre', 'Brasília', 'Goiânia', 'Belém', 'São Luís', 'Maceió', 'Campo Grande', 'Teresina', 'João Pessoa', 'Natal', 'Aracaju', 'Cuiabá', 'Lisboa', 'Porto', 'Madrid', 'Barcelona', 'Cidade do México'
];

export function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [viewerCount, setViewerCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    const showNotification = () => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomViewers = Math.floor(Math.random() * 51) + 20; // 20 a 70
      
      setCurrentLocation(randomLocation);
      setViewerCount(randomViewers);
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
          <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
             <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{viewerCount} pessoas</span> de <span className="font-bold text-foreground">{currentLocation}</span> estão vendo essa página
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">há poucos segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
