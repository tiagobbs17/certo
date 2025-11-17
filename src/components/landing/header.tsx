'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cake, Clock } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(18 * 60 * 60);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-bold">
        <div className="container flex items-center justify-center gap-2">
          <Clock className="h-5 w-5" />
          <span>¡Oferta de Navidad! Termina en: {formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Cake className="h-6 w-6 text-primary" />
          <span className={cn(isScrolled ? 'text-foreground' : 'text-white')}>Deus é perfeito</span>
        </a>
        <Button asChild size="sm" className="hidden sm:flex font-bold">
          <a href="#offer">Quero a oferta</a>
        </Button>
      </div>
    </header>
  );
}
