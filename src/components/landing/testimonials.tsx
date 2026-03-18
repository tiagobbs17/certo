
"use client"

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Mãe de 2 crianças',
    content: 'Meus filhos amaram! Passamos horas montando o álbum juntos. É uma excelente alternativa às telas.',
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl || '',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Pai coruja',
    content: 'A qualidade das ilustrações é incrível. Foi muito fácil de imprimir e meu filho adora colecionar as figurinhas.',
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl || '',
  },
  {
    name: 'Luciana Ferreira',
    role: 'Professora',
    content: 'Uso como atividade criativa em família. As crianças ficam super motivadas em completar o álbum.',
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl || '',
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/fundo%20pagina.png?updatedAt=1769738161037";

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
       <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Fundo com tema de futebol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="mx-auto max-w-5xl mt-12 px-10">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                        <CardContent className="flex flex-col p-6 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-accent">
                                    <Image 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-xs text-white/60">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-sm italic text-left">"{testimonial.content}"</p>
                        </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-3 w-3 rounded-full transition-all',
                  current === index ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'
                )}
                aria-label={`Ir ao slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
