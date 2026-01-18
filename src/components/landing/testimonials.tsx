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

const testimonials = [
  { 
    src: "https://ik.imagekit.io/cbes7rupj/prova%202.jpeg",
    alt: "Depoimento 1"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/prova%204.jpeg",
    alt: "Depoimento 2"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/prova%201.jpeg",
    alt: "Depoimento 3"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/prova%203.jpeg",
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

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¡Mira lo que dicen nuestras alumnas sobre el curso!
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
                    <Card className="bg-muted">
                        <Image 
                          src={testimonial.src} 
                          alt={testimonial.alt} 
                          width={400} 
                          height={400}
                          className="object-cover w-full h-auto"
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
                  current === index ? 'bg-primary' : 'bg-muted'
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
