"use client"

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const testimonials = [
  { 
    src: "https://ik.imagekit.io/cbes7rupj/depoimento%201.jpeg",
    alt: "Depoimento 1"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/depoimento%203.jpeg",
    alt: "Depoimento 2"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/depoimento%204.jpeg",
    alt: "Depoimento 3"
  },
  {
    src: "https://ik.imagekit.io/cbes7rupj/depoimento%202.jpeg",
    alt: "Depoimento 4"
  }
];


export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

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
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                  <Card className="aspect-square bg-muted overflow-hidden">
                    <Image 
                      src={testimonial.src} 
                      alt={testimonial.alt} 
                      width={400} 
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
