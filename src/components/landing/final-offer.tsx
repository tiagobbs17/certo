import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const includedItems = [
  { name: 'Libro Dulce Navidad', value: '74,99' },
  { name: 'Libro Amplía Tu Cardápio con Recetas Premium', value: '54,99' },
  { name: 'Hoja de cálculo Emprendimiento y Estrategias de Venta', value: '17,99' },
  { name: 'Libro postres navideños', value: '24,99' },
  { name: 'Libro navidad encantada', value: '17,99' },
];

export function FinalOffer() {
  const tabletMockup = PlaceHolderImages.find(img => img.id === 'tablet-mockup-panettone');

  return (
    <section id="offer" className="w-full py-16 md:py-24 lg:py-32 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              ¡Oferta Especial por Tiempo Limitado!
            </h2>
            <p className="text-lg text-muted-foreground">
              ¡Más de 10,000 mujeres ya están ganando dinero con Dulce Navidad! No te quedes fuera.
            </p>
            {tabletMockup && (
              <Image
                src={tabletMockup.imageUrl}
                width={600}
                height={450}
                alt="Maquete do curso de panettone em um tablet"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                data-ai-hint={tabletMockup.imageHint}
              />
            )}
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-headline text-2xl font-bold mb-4">Recibirás todo esto:</h3>
              <ul className="space-y-3 mb-6">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{item.name}</span>
                    </span>
                    <span className="font-mono text-muted-foreground line-through">${item.value}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center my-6">
                <p className="text-sm text-muted-foreground">Todo esto valorado en <span className="line-through">$190,95</span>, hoy te lo llevas por:</p>
                <p className="text-5xl font-bold font-headline text-primary my-2">$5,90 <span className="text-xl font-body font-normal">USD</span></p>
                <p className="text-xs text-muted-foreground">Pago único. Sin cargos ocultos ni mensualidades.</p>
              </div>

              <Button size="lg" className="w-full font-bold text-lg h-14" asChild>
                <a href="#">
                  ¡SÍ, QUIERO APROVECHAR LA OFERTA!
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
