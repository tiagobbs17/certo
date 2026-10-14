import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/Est%C3%A1dio%20Brasileiro%20em%20Festa%20(1).png";
  const heroImage = "https://ik.imagekit.io/cbes7rupj/Menino%20sorridente%20com%20%C3%A1lbum%20Brasileir%C3%A3o%20Kids.png";
  
  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background de futebol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 pb-12 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                O Brasileirão Kids Virou Diversão em Desenhos! Colecione o <span className="text-green-500">Álbum Kids Ilustrado</span>
              </h1>
            </div>
          </div>
          <div className="lg:order-1 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-full max-w-md mx-auto relative aspect-[4/5] md:aspect-square">
              <Image
                src={heroImage}
                alt="Menino Sorridente com Álbum"
                fill
                priority
                className="object-contain"
                data-ai-hint="smiling boy"
              />
            </div>
            <p className="text-white text-lg md:text-xl font-medium max-w-lg">
              Os craques do futebol brasileiro em versões ilustradas, reunidos em um álbum com os 20 times da Série A e mais de 400 figurinhas para a criançada colecionar!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white">
                    Quero meu álbum agora!
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
