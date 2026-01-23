import { Check } from 'lucide-react';

const items = [
  "Quieres preparar pasteles deliciosos sin preocuparte por restricciones alimentarias.",
  "Buscas recetas adaptables, con opciones con o sin gluten, leche, huevos y azúcar.",
  "Quieres comer dulces sin culpa, cuidando tu alimentación.",
  "Necesitas ideas prácticas para el día a día, niños o diferentes ocasiones.",
  "Te frustras al no encontrar recetas que realmente funcionen sin ciertos ingredientes."
];

export function WhoIsItFor() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Este material es para ti si:
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-left">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground md:text-xl/relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
