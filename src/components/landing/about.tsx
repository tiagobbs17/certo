
import Image from 'next/image';

export function About() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2001_07_28.png";
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
            <Image
                src={backgroundImage}
                alt="Crianças brincando com figurinhas"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
      <div className="container relative z-10 grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
              O que é o nosso álbum de figurinhas?
            </h2>
            <p className="max-w-[700px] mx-auto text-white/80 md:text-xl/relaxed font-bold">
              É um material exclusivo que estimula a criatividade e a diversão em família. Um álbum de figurinhas da Copa do Mundo de 2026, com personagens ilustrados, criado para proporcionar momentos especiais longe das telas. Perfeito para colecionar e criar memórias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
