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
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Este material es para ti si:
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-left">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground md:text-xl/relaxed font-bold">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(calc(100% - 2px))' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px]" style={{transform: "rotate(180deg)"}}>
              <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="fill-current text-[#5D4037]"
              ></path>
          </svg>
      </div>
    </section>
  );
}
