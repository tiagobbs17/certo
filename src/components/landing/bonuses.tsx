import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function Bonuses() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/B%C3%B4nus%20Esportivo%20Criativo.png";

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Fundo bônus esportivo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 px-0">
        <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
          <div className="px-4 md:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold tracking-tighter uppercase leading-tight">
              🎁 NA COMPRA DO ÁLBUM, SEU PEQUENO TORCEDOR LEVA 5 BÔNUS EXCLUSIVOS PARA UMA EXPERIÊNCIA DE FUTEBOL COMPLETA!
            </h2>
          </div>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/bonus%20imagem.jpeg"
            alt="Bônus Exclusivos"
            width={1200}
            height={1200}
            className="shadow-lg w-full"
            data-ai-hint="bonus gifts"
          />
        </div>
      </div>
      <div className="container relative z-10 mt-12 flex justify-center px-4 md:px-6">
        <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white border-0">
          Quero meu álbum e bônus!
        </Button>
      </div>
    </section>
  );
}
