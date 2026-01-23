
import Image from 'next/image';

export function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
              ¿Qué es PASTELES SIN LÍMITES?
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed font-bold">
              Es un material exclusivo que te guía paso a paso en la preparación de recetas de pasteles adaptables, con instrucciones claras, combinaciones inteligentes y opciones con o sin ingredientes específicos, diseñado para que disfrutes pasteles saludables, deliciosos y sin restricciones, como nunca antes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
