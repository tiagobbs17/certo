
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

const testimonialImages = [
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.33.22.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.33.48.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.29.06.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.32.25.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.29.50.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.26.00.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.31.36.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.31.02.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.18.12.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-17%20at%2022.26.50.jpeg",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.41.05.jpeg?updatedAt=1770878829713",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.30.59.jpeg?updatedAt=1770878829764",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.45.41.jpeg?updatedAt=1770878829829",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-02-12%20at%2003.32.11.jpeg?updatedAt=1770878830015",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-07%20at%2002.13.12.jpeg?updatedAt=1772860428565",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-07%20at%2002.14.40.jpeg?updatedAt=1772860857373",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-07%20at%2002.26.27.jpeg?updatedAt=1772861387374",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-09%20at%2023.13.02.jpeg?updatedAt=1773108869036",
  "https://ik.imagekit.io/cbes7rupj/WhatsApp%20Image%202026-03-09%20at%2023.12.42.jpeg?updatedAt=1773108869110",
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="mx-auto max-w-5xl px-10">
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
              {testimonialImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-[9/16] w-full">
                                <Image 
                                    src={image} 
                                    alt={`Depoimento ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
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
