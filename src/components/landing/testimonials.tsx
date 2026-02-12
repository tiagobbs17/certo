"use client"

import { Card } from '@/components/ui/card';
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
import Link from 'next/link';
import { Button } from '../ui/button';

const testimonials = [
  { 
    src: "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.32.11.jpeg",
    alt: "Depoimento 1"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.45.41.jpeg",
    alt: "Depoimento 2"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.30.59.jpeg",
    alt: "Depoimento 3"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.41.05.jpeg",
    alt: "Depoimento 4"
  }
];


export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
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
            Crianças se divertindo longe das telas!
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
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-muted/80 backdrop-blur-sm border-0">
                        <Image 
                          src={testimonial.src} 
                          alt={testimonial.alt} 
                          width={400} 
                          height={400}
                          className="object-contain w-full h-auto"
                        />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-3 w-3 rounded-full',
                  current === index ? 'bg-primary' : 'bg-white/50'
                )}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
