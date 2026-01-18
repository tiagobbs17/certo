import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Header } from './header';

export function Hero() {
  const heroImage = {
    imageUrl: "https://ik.imagekit.io/cbes7rupj/donas%20capa%20fundo%201.jpg",
    imageHint: "donuts",
  };

  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-12 md:pb-24 lg:pb-32 overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt="Pessoa preparando a massa"
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Conviértete en experta en Mini Donuts Caseras
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Aprende <span className="text-primary font-bold">en menos de 7 días</span> las recetas más deliciosas y rentables de mini donuts caseras y comienza <span className="text-primary font-bold">tu propio negocio rentable desde casa</span>. ¡Perfecto para ganar dinero extra!
            </p>
          </div>
          
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/1768596852.png"
              alt="Prévia do curso de mini donuts"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="font-bold animate-button-pulse">
              <a href="https://pay.hotmart.com/J103933545W?checkoutMode=10">
                Obtener ahora por solo $6,90 Dólares
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
