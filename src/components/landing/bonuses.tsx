import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const bonuses = [
  {
    title: "🌱 Donuts Especiales",
    description: "Aprende a preparar donuts sin lactosa, sin gluten y veganos para atender a un público más amplio y diferenciarte de la competencia.",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20bonus%201.jpg"
  },
  {
    title: "💰 Precificación Fácil",
    description: "Domina cómo poner precio a tus donuts de forma rentable, calculando costos y márgenes de ganancia para transformar tu producción en un negocio lucrativo.",
    image: "https://ik.imagekit.io/cbes7rupj/plan.png"
  },
  {
    title: "📦 Embalajes que Venden",
    description: "Descubre cómo elegir y presentar tus donuts en embalajes profesionales para aumentar su valor percibido y potenciar tus ventas.",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20bonus%2033.jpg"
  }
];

export function Bonuses() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            🎁 ¡Aprovecha estos regalos gratis!
          </h2>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 bg-card rounded-xl">
              <Image 
                src={bonus.image}
                alt={bonus.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-bold mb-2 text-accent">{bonus.title}</h3>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
