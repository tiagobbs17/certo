import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function Bonuses() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-accent text-accent-foreground">
      <div className="container px-0">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
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
      <div className="container mt-12 flex justify-center px-4 md:px-6">
        <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white">
          Quero meu álbum e bônus!
        </Button>
      </div>
    </section>
  );
}
