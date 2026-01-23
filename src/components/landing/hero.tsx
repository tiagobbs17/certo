import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Header } from './header';
import Image from 'next/image';

export function Hero() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/imagem%20fundo%201.jpg";

  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-12 md:pb-24 lg:pb-32 overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background de bolos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Conviértete en experta en Bolos Caseros
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              Aprende <span className="text-primary font-bold">en menos de 7 días</span> las recetas más deliciosas y rentables de bolos caseros y comienza <span className="text-primary font-bold">tu propio negocio rentable desde casa</span>. ¡Perfecto para ganar dinero extra!
            </p>
          </div>
          
          <div className="w-full max-w-2xl overflow-hidden shadow-2xl rounded-lg">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2022%20de%20jan.%20de%202026,%2015_27_58.png"
              alt="Bolos caseiros"
              width={720}
              height={405}
              className="w-full h-auto"
              priority
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
