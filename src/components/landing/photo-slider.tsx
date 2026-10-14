
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
  { id: 1, url: "https://ik.imagekit.io/cbes7rupj/IMG_9.HEIC", hint: "album page 9" },
  { id: 2, url: "https://ik.imagekit.io/cbes7rupj/IMG_7.JPG", hint: "album page 7" },
  { id: 3, url: "https://ik.imagekit.io/cbes7rupj/IMG_3.JPG", hint: "album page 3" },
  { id: 4, url: "https://ik.imagekit.io/cbes7rupj/IMG_10.HEIC", hint: "album page 10" },
  { id: 5, url: "https://ik.imagekit.io/cbes7rupj/IMG_1.JPG", hint: "album page 1" },
  { id: 6, url: "https://ik.imagekit.io/cbes7rupj/IMG_8.JPG", hint: "album page 8" },
  { id: 7, url: "https://ik.imagekit.io/cbes7rupj/IMG_5.HEIC", hint: "album page 5" },
  { id: 8, url: "https://ik.imagekit.io/cbes7rupj/IMG_4.HEIC", hint: "album page 4" },
  { id: 9, url: "https://ik.imagekit.io/cbes7rupj/IMG_6.JPG", hint: "album page 6" },
  { id: 10, url: "https://ik.imagekit.io/cbes7rupj/IMG_2.JPG", hint: "album page 2" },
];

export function PhotoSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/Colagem%20Futebol%C3%ADstica%20no%20Est%C3%A1dio.png";

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Fundo estádio futebol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-headline font-bold tracking-tight text-[#FFD700] uppercase">
            VEJA O QUE ESPERA PELO SEU PEQUENO TORCEDOR
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tighter text-white">
            POR DENTRO DO ÁLBUM DO BRASILEIRÃO KIDS! ⚽
          </h3>
        </div>
        
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
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Card className="overflow-hidden bg-white shadow-xl border-0 transition-transform hover:scale-105 duration-300">
                  <CardContent className="flex aspect-[3/4] items-center justify-center p-0 relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.url}
                        alt={`Amostra do Álbum ${item.id}`}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                        unoptimized={item.url.endsWith('.HEIC')}
                      />
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
