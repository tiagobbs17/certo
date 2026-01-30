
import Image from 'next/image';

export function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
              O que é o nosso álbum de figurinhas?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed font-bold">
              É um material exclusivo que estimula a criatividade e a diversão em família. Um álbum de figurinhas da Copa do Mundo de 2026, com personagens ilustrados, criado para proporcionar momentos especiais longe das telas. Perfeito para colecionar e criar memórias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
