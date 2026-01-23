import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/garantia.png"
              alt="Garantía de 7 días"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-2">
              Garantía
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-accent">
              Tu Satisfacción o te Devolvemos tu Dinero
            </h2>
            <p className="max-w-prose text-muted-foreground md:text-lg/relaxed mx-auto lg:mx-0">
              Estamos tan seguros de la calidad de <strong>PASTELES SIN LÍMITES</strong> que te ofrecemos una garantía incondicional de 7 días.
            </p>
            <p className="max-w-prose text-muted-foreground md:text-lg/relaxed mx-auto lg:mx-0">
              Si, por la razón que sea, sientes que el material no es para ti, solo tienes que solicitar la devolución dentro de ese plazo y te reembolsaremos el 100% de tu inversión.
            </p>
            <p className="font-bold text-lg">¡Riesgo Cero Para Ti!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
