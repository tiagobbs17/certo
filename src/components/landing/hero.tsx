import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Header } from './header';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'panettone-hero');

  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-12 md:pb-24 lg:pb-32 overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt="Background of a delicious panettone"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Conviértete en experta en Panetones estilo Milán
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Aprende <span className="text-red-500 font-bold">en menos de 7 días</span> las recetas más deliciosas y rentables de panetones italianos artesanales y comienza <span className="text-red-500 font-bold">tu propio negocio rentable desde casa</span>. ¡Perfecto para ganar dinero extra esta Navidad!
            </p>
          </div>
          
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden">
            <iframe
              id="panda-0f4a115e-60ab-4f02-9a24-b763df1e0f03"
              src="https://player-vz-a9f2bf80-f29.tv.pandavideo.com.br/embed/?v=0f4a115e-60ab-4f02-9a24-b763df1e0f03"
              style={{border: 'none'}}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              className="w-full h-full"
              fetchPriority="high"
            ></iframe>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="font-bold bg-green-600 hover:bg-green-700">
              <a href="https://pay.hotmart.com/B102877180F">
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
