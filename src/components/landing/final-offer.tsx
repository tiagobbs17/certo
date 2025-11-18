import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedItems = [
  { name: 'Libro Dulce Navidad', value: '$74,99' },
  { name: 'Libro Amplía Tu Cardápio con Recetas Premium', value: '$54,99' },
  { name: 'Hoja de cálculo de ventas y estrategias', value: '$17,99' },
  { name: 'Libro postres navideños', value: '$24,99' },
  { name: 'Libro navidad encantada', value: '$17,99' },
];

export function FinalOffer() {
  const tabletMockup = {
    imageUrl: "https://ik.imagekit.io/cbes7rupj/mokap.png",
    imageHint: "course mockup"
  };

  return (
    <section id="offer" className="w-full py-16 md:py-24 lg:py-32 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl text-center lg:text-left font-headline font-bold tracking-tighter text-yellow-400">
              oferta por tiempo limitado
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
              <ul className="space-y-3 mb-6">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="flex-1">
                      {item.name}{' '}
                      <span className="font-mono text-red-500 line-through whitespace-nowrap">
                        {item.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center my-6">
                <p className="text-5xl font-bold font-headline text-green-600 my-2">$5,90 <span className="text-xl font-body font-normal text-foreground">USD</span></p>
                <p className="text-xs text-muted-foreground">Pago único. Sin cargos ocultos ni mensualidades.</p>
              </div>

              <div className="text-center mb-4">
                  <p className="text-sm"><span className="font-bold text-red-500">Importante:</span> El precio de referencia está en dólares, pero el pago se realiza en la moneda de tu país.</p>
                  <p className="text-sm mt-2">Haz clic para ver el precio en tu moneda y reservar tu libro👇</p>
              </div>

              <div className="flex flex-col items-center">
                <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 rounded-full px-10 h-auto py-3 text-base" asChild>
                  <a href="https://pay.hotmart.com/B102877180F">
                    ¡SÍ, QUIERO APROVECHAR LA OFERTA!
                  </a>
                </Button>
                <Image 
                  src="https://ik.imagekit.io/cbes7rupj/Compra-Segura-2.png"
                  alt="Compra Segura"
                  width={300}
                  height={80}
                  className="mt-4"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
