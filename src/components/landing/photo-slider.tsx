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
  { id: 6, hint: "soccer ball" },
  { id: 7, hint: "happy child" },
  { id: 8, hint: "goal celebration" },
  { id: 9, hint: "team work" },
  { id: 10, hint: "victory cup" },
];

export function PhotoSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="w-full py-12 bg-muted/20 border-y border-border/50">
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
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <Card className="border-2 border-dashed border-muted-foreground/20 overflow-hidden bg-white shadow-inner hover:border-green-500/50 transition-colors">
                  <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={`https://picsum.photos/seed/${item.id + 20}/400/400`}
                        alt={`Espaço para foto ${item.id}`}
                        fill
                        className="object-cover opacity-20 grayscale"
                        data-ai-hint={item.hint}
                      />
                    </div>
                    {/* Moldura que simula o espaço da figurinha menor */}
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <div className="w-full h-full border border-muted-foreground/20 flex flex-col items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-sm text-center p-1">
                        <div className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center mb-1 bg-white">
                          <span className="text-muted-foreground font-bold text-[10px]">{item.id}</span>
                        </div>
                        <span className="text-muted-foreground font-bold text-[8px] uppercase tracking-wider block leading-tight">
                          Foto
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
