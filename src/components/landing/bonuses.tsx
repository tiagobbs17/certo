
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const bonuses = [
  {
    title: "🎁 BONO 1 — Pasteles para Congelar y Consumir en la Semana",
    description: `📘 Organización sin perder sabor

Qué incluye:
• Qué pasteles se congelan mejor
• Cómo congelar correctamente
• Cómo descongelar sin que se resequen

Ideal para quienes tienen una rutina ocupada`,
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b1.jpg",
    price: "17,00",
    isSpecial: true,
  },
  {
    title: "🎁 Pasteles para Niños con Restricciones",
    description: `📘 Sin culpa, sin miedo, sin exclusión

Qué incluye:
• Pasteles sin colorantes ni conservantes
• Sabores que a los niños les encantan
• Ideas para la merienda escolar
• Textura suave (incluso sin leche ni huevo)`,
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b2.jpg",
    price: "24,00",
    isSpecial: true,
  },
  {
    title: "🎁 BONO 3 — Muffins Sin Límites",
    description: `Recetas de muffins adaptables, en porciones individuales,
con preparación sencilla y opciones sin leche, sin gluten
y con o sin huevos y azúcar.

Una manera práctica de variar los pasteles del día a día
sin renunciar al sabor.`,
    image: "https://ik.imagekit.io/cbes7rupj/capa%20b3.jpg",
    price: "14,00",
    isSpecial: true,
  }
];

export function Bonuses() {
  return (
    <section className="w-full pt-36 pb-16 md:pt-44 md:pb-24 lg:pt-52 lg:pb-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Leve hoje + 3 super Bônus
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
              <CardHeader className="text-center p-6 pt-6">
                <h3 className="font-headline text-xl font-bold text-accent">{bonus.title}</h3>
              </CardHeader>
              <Image 
                src={bonus.image}
                alt={bonus.title}
                width={500}
                height={400}
                className={cn("w-full h-auto object-contain mt-2")}
              />
              <CardContent className="flex flex-col flex-grow p-6 pt-2">
                <p className="text-muted-foreground flex-grow whitespace-pre-line">{bonus.description}</p>
                {bonus.isSpecial && (
                    <div className="mt-4 flex items-baseline justify-center gap-3">
                        <span className="text-destructive line-through text-lg">US$ {bonus.price}</span>
                        <span className="font-bold text-accent text-xl">Hoy gratis</span>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto space-y-6">
            <p className="text-lg"><span className="font-bold">Todo esto está valorado en más de</span> <span className="line-through text-destructive">$49</span> USD y hoy lo recibes <span className="text-primary">TOTALMENTE GRATIS.</span></p>
            
            <div className="space-y-2">
                <p className="font-bold text-lg">⏳ Oferta por tiempo limitado</p>
                <p className="text-muted-foreground">Aprovecha esta oportunidad especial para aprender a preparar Pasteles Sin Límites, más saludables, adaptables y llenos de sabor — sin complicaciones y sin miedo a equivocarte.</p>
            </div>
            
            <div className="space-y-2">
                <p className="font-bold text-lg">✨ Ideal para quienes buscan practicidad en el día a día, más posibilidades en la cocina y recetas que realmente funcionan.</p>
            </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/X104054100N?checkoutMode=10">Todas las recetas por 6,90 USD</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
