import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const tabletMockup = PlaceHolderImages.find(img => img.id === 'tablet-mockup-panettone');

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={PlaceHolderImages.find(img => img.id === 'panettone-hero')?.imageUrl || ''}
          alt="Background of a delicious panettone"
          fill
          className="object-cover"
          priority
          data-ai-hint="panettone christmas"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Conviértete en experta en Panetones estilo Milán
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Aprende en menos de 7 días las recetas más deliciosas y rentables de panetones italianos artesanales y comienza tu propio negocio rentable desde casa. ¡Perfecto para ganar dinero extra esta Navidad!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="font-bold">
                <a href="#offer">
                  Obtener ahora por solo $5,90 USD
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full max-w-2xl">
            {tabletMockup && (
              <Image
                src={tabletMockup.imageUrl}
                width={600}
                height={450}
                alt="Maquete do curso de panettone em um tablet"
                className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                data-ai-hint={tabletMockup.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
