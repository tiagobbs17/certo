'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cake } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
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
