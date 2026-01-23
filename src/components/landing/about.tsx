import Image from 'next/image';
import { Check } from 'lucide-react';

const whoIsItFor = [
  'Quieres preparar pasteles deliciosos sin preocuparte por restricciones alimentarias.',
  'Buscas recetas adaptables, con opciones con o sin gluten, leche, huevos y azúcar.',
  'Quieres comer dulces sin culpa, cuidando tu alimentación.',
  'Necesitas ideas prácticas para el día a día, niños o diferentes ocasiones.',
  'Te frustras al no encontrar recetas que realmente funcionen sin ciertos ingredientes.',
];


export function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
              ¿Qué es PASTELES SIN LÍMITES?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed font-bold">
              Es un material exclusivo que te guía paso a paso en la preparación de recetas de pasteles adaptables, con instrucciones claras, combinaciones inteligentes y opciones con o sin ingredientes específicos, diseñado para que disfrutes pasteles saludables, deliciosos y sin restricciones, como nunca antes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-bold text-accent">Este material es para ti si:</h3>
            <ul className="space-y-2">
              {whoIsItFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/1768596852.png"
              width={550}
              height={350}
              alt="Pasteles Sin Límites"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
            />
        </div>
      </div>
    </section>
  );
}
