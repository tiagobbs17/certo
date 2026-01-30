import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/garantia-YrDNbk5xkXtbRqee.avif"
              alt="Garantía de 7 días"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-2">
              Garantia
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-green-600">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="max-w-prose text-muted-foreground md:text-lg/relaxed mx-auto lg:mx-0">
              Estamos tão seguros da qualidade de <strong>Álbum de figurinhas da copa 2026</strong> que oferecemos uma garantia incondicional de 7 dias.
            </p>
            <p className="max-w-prose text-muted-foreground md:text-lg/relaxed mx-auto lg:mx-0">
              Se, por qualquer motivo, você sentir que o material não é para você, basta solicitar o reembolso dentro desse prazo e devolveremos 100% do seu investimento.
            </p>
            <p className="font-bold text-lg">Risco Zero para Você!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
