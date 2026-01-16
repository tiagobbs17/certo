import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Header } from './header';

export function Hero() {
  const heroImage = {
    imageUrl: "https://ik.imagekit.io/cbes7rupj/donuts%20capa.jpg",
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
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Conviértete en experta en <span className="text-green-500">Mini Donas Caseras</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Aprende <span className="text-green-500 font-bold">en menos de 7 días</span> las recetas más deliciosas y rentables de mini donas caseras y comienza <span className="text-green-500 font-bold">tu propio negocio rentable desde casa</span>. ¡Perfecto para ganar dinero extra!
            </p>
          </div>
          
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden">
            <iframe
              id="panda-7366d89f-27ac-46c1-8ce9-dec81482a1c6"
              src="https://player-vz-a9f2bf80-f29.tv.pandavideo.com.br/embed/?v=7366d89f-27ac-46c1-8ce9-dec81482a1c6"
              style={{border: 'none'}}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              className="w-full h-full"
              fetchPriority="high"
            ></iframe>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="font-bold bg-green-600 hover:bg-green-700 animate-button-pulse">
              <a href="https://pay.hotmart.com/B102877180F?checkoutMode=10">
                Obtener ahora por solo $9,90 Dólares
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
