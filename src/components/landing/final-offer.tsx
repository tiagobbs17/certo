import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedItems = [
  { name: 'Libro Mini Donuts Caseros', value: 'US$ 74,99' },
  { name: 'Libro Amplía Tu Menú con Recetas Premium', value: 'US$ 54,99' },
  { name: 'Hoja de Cálculo de Ventas y Estrategias', value: 'US$ 17,99' },
  { name: 'Libro Embalajes que Venden', value: 'US$ 24,99' },
  { name: 'Libro Recetas Sin Gluten', value: 'US$ 17,99' },
];

export function FinalOffer() {
  const offerImage = {
    imageUrl: "https://ik.imagekit.io/cbes7rupj/1768596852.png",
    imageHint: "course preview"
  };

  return (
    <section id="offer" className="w-full py-16 md:py-24 lg:py-32 bg-primary/10 scroll-mt-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl text-center lg:text-left font-headline font-bold tracking-tighter text-yellow-400">
              oferta por tiempo limitado
            </h2>
            {offerImage && (
              <Image
                src={offerImage.imageUrl}
                width={600}
                height={450}
                alt="Prévia do curso de mini donuts"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                data-ai-hint={offerImage.imageHint}
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
                      <span className="font-mono text-primary line-through whitespace-nowrap">
                        {item.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-muted/50 rounded-lg p-4 text-center my-6">
                <p className="text-5xl font-bold font-headline text-primary my-2">$6,90 <span className="text-xl font-body font-normal text-foreground">Dólares</span></p>
                <p className="text-xs text-muted-foreground">Pago único. Sin cargos ocultos ni mensualidades.</p>
              </div>

              <div className="text-center mb-4 text-sm flex flex-col items-center">
                  <p><span className="font-bold text-primary">Importante:</span> El precio de referencia está en dólares,</p>
                  <p>pero el pago se realiza en la moneda de tu país.</p>
                  <p className="mt-2">Haz clic para ver el precio en tu moneda y reservar tu libro👇</p>
              </div>

              <div className="flex flex-col items-center">
                <Button className="font-bold animate-button-pulse" asChild>
                  <a href="https://pay.hotmart.com/J103933545W?checkoutMode=10">
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
