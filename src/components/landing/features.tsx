
import Image from 'next/image';

export function Features() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2001_36_21.png";
  
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Fundo com tema de futebol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Vantagens do produto digital
          </h2>
          <div className="max-w-[700px] text-white/80 md:text-xl/relaxed space-y-4">
            <p>
              É um álbum de figurinhas infantil da Copa do Mundo 2026, com personagens ilustrados, criado para estimular a criatividade e a diversão em família.
            </p>
            <p>
              Os pais imprimem o material, e a criança recorta, cola e completa o álbum de forma lúdica. Perfeito para colecionar e criar memórias especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
