import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const bonuses = [
  {
    title: "Bolos especiales sin gluten, veganos y sin lactosa",
    description: "Aprende a preparar bolos sin lactosa, sin gluten y veganos para atender a un público más amplio y diferenciarte de la competencia.",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b1.jpg",
    price: "17,00",
    isSpecial: true,
  },
  {
    title: "Precificación Fácil",
    description: "Domina cómo poner precio a tus bolos de forma rentable, calculando costos y márgenes de ganancia para transformar tu producción en un negocio lucrativo.",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b2.jpg",
    price: "24,00",
    isSpecial: true,
  },
  {
    title: "📦 Embalajes que Venden",
    description: "Descubre cómo elegir y presentar tus bolos en embalajes profesionales para aumentar su valor percibido y potenciar tus ventas.",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b3.jpg",
    price: "14,00",
    isSpecial: true,
  }
];

export function Bonuses() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            BONOS EXCLUSIVOS POR TIEMPO LIMITADO!
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Al adquirir PASTELES SIN LÍMITES hoy, recibirás TOTALMENTE GRATIS 3 bonos exclusivos que complementarán tu aprendizaje y te ayudarán a preparar pasteles más saludables, variados y llenos de sabor.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Card key={index} className={cn(
              "overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 bg-card rounded-xl flex flex-col",
              bonus.isSpecial && "border-2 border-accent"
            )}>
              <Image 
                src={bonus.image}
                alt={bonus.title}
                width={500}
                height={300}
                className={cn("w-full h-48 object-contain")}
              />
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-xl font-bold mb-2 text-accent">{bonus.title}</h3>
                <p className="text-muted-foreground flex-grow">{bonus.description}</p>
                {bonus.isSpecial && (
                    <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-destructive line-through text-lg">US$ {bonus.price}</span>
                        <span className="font-bold text-accent text-xl">Hoy gratis</span>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/J103933545W?checkoutMode=10">¡Quiero empezar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
