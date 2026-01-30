
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Header } from './header';
import Image from 'next/image';

export function Hero() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/fundo%20pagina.png";
  
  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-12 md:pb-24 lg:pb-32 overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background de bolo de chocolate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-accent">
                Pasteles Sin Límites
              </h1>
              <p className="max-w-[700px] mx-auto lg:mx-0 text-xl md:text-2xl font-bold">
                Recetas de Pasteles para Comer <span className="text-destructive">sin Culpa</span>, Todos los Días
              </p>
              <p className="max-w-[700px] mx-auto lg:mx-0 text-base md:text-lg text-white/80">
                Recetas saludables y deliciosas para todos los amantes del pastel — sin gluten
              </p>
            </div>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="font-bold animate-button-pulse">
                <a href="https://pay.hotmart.com/X104054100N?checkoutMode=10">
                  Obtener ahora por solo $6,90 Dólares
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:order-1 flex justify-center">
            <Image
                src="https://ik.imagekit.io/cbes7rupj/imagem%20principal.png"
                alt="Album de figurinhas"
                width={550}
                height={550}
                className="w-full max-w-md h-auto"
                priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
