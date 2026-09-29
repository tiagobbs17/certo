"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const sliderImages = [
  { id: 1, hint: "football kid" },
  { id: 2, hint: "soccer stadium" },
  { id: 3, hint: "drawing children" },
  { id: 4, hint: "family fun" },
  { id: 5, hint: "sticker album" },
];

export function PhotoSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="w-full py-8 bg-background">
      <div className="container px-4 md:px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {sliderImages.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <Card className="border-2 border-dashed border-muted-foreground/20 overflow-hidden bg-muted/5">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={`https://picsum.photos/seed/${item.id + 10}/400/400`}
                        alt={`Espaço para foto ${item.id}`}
                        fill
                        className="object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                        data-ai-hint={item.hint}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-muted-foreground font-bold text-xs uppercase tracking-widest bg-background/80 px-2 py-1 rounded">
                          Foto {item.id}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
