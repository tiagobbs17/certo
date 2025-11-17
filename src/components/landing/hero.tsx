import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

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
          </div>
          
          <div className="w-full max-w-2xl aspect-video bg-black/50 rounded-xl flex items-center justify-center text-muted-foreground">
            {/* Seu vídeo será inserido aqui */}
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="font-bold bg-green-600 hover:bg-green-700">
              <a href="#offer">
                Obtener ahora por solo $5,90 USD
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
