
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export function Hero() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/fundo%20pagina.png";
  
  return (
    <section className="relative w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background de futebol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6 pb-12 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                A Copa do Mundo Virou Diversão em Desenhos! Colecione o <span className="text-green-500">Álbum Kids Ilustrado</span>
              </h1>
              <p className="text-xs md:text-sm font-bold text-white/90 tracking-wide uppercase">
                assista o vídeo abaixo 👇👇
              </p>
            </div>
          </div>
          <div className="lg:order-1 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-full max-w-md mx-auto">
              {/* @ts-ignore */}
              <vturb-smartplayer 
                id="vid-69bcac31596c6131b739d452" 
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
              <Script 
                id="vturb-player-script"
                src="https://scripts.converteai.net/f606daa8-7646-4e7c-a709-2e4f264458ce/players/69bcac31596c6131b739d452/v4/player.js" 
                strategy="afterInteractive"
              />
            </div>
            <p className="max-w-[550px] mx-auto text-white text-xl md:text-2xl font-bold">
              Um álbum de figurinhas infantil da Copa do Mundo 2026, com personagens ilustrados, feito para estimular a criatividade e criar momentos especiais em família, longe das telas.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="#offer">
                    <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white">
                        Quero meu álbum agora!
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
