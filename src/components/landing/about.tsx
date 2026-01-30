
import Image from 'next/image';

export function About() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2001_07_28.png";
  
  return (
    <section>
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
            src={backgroundImage}
            alt="Fundo com tema de futebol"
            fill
            className="object-cover"
        />
      </div>
      <div className="bg-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
                O que é o nosso álbum de figurinhas?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                É um álbum de figurinhas infantil da Copa do Mundo 2026, com personagens ilustrados, criado para estimular a criatividade e a diversão em família. Os pais imprimem o material, e a criança recorta, cola e completa o álbum de forma lúdica. Perfeito para colecionar e criar memórias especiais.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
