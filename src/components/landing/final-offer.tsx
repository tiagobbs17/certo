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
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tighter text-yellow-400">
              ¡Oferta Especial por Tiempo Limitado!
            </h2>
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
              <ul className="space-y-2 mb-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-sm md:text-base">
                    <span className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="flex-1">{item.name}</span>
                    </span>
                    <span className="font-mono text-muted-foreground line-through ml-2 whitespace-nowrap">${item.value}</span>
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
