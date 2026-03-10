
import Image from 'next/image';

export function About() {
  const imageSrc = "https://ik.imagekit.io/cbes7rupj/a00f0a21-557f-44ce-a62b-8d74d9f52266.png";
  const backgroundImageSrc = "https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2001_36_21.png";
  
  return (
    <section>
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] max-w-7xl mx-auto px-4 mt-8">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
          <Image
              src={imageSrc}
              alt="Album de figurinhas"
              fill
              className="object-cover"
          />
        </div>
      </div>
      <div className="relative py-16 md:py-24 mt-8">
        <div className="absolute inset-0 z-0">
            <Image
                src={backgroundImageSrc}
                alt="Fundo com tema de futebol"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
                Vantagens do produto digital
              </h2>
              <p className="max-w-[700px] mx-auto text-white/80 md:text-xl/relaxed">
                É um álbum de figurinhas infantil da Copa do Mundo 2026, com personagens ilustrados, criado para estimular a criatividade e a diversão em família. Os pais imprimem o material, e a criança recorta, cola e completa o álbum de forma lúdica. Perfeito para colecionar e criar memórias especiais.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
