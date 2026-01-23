import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const modules = [
  {
    title: "Módulo 1",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m1.png",
    description: "Recetas de pasteles dulces en versiones con azúcar y sin azúcar, manteniendo sabor, textura y suavidad, ideales para quienes desean comer sin culpa."
  },
  {
    title: "Módulo 2",
    image: "https://ik.imagekit.io/cbes7rupj/1769147990.jpg",
    description: "Aprende recetas adaptables con y sin huevos, con sustituciones correctas para lograr masas esponjosas y bien estructuradas."
  },
  {
    title: "Módulo 3",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m3.jpg",
    description: "Recetas completas de pasteles sin leche ni derivados, con alternativas simples que garantizan sabor y una textura perfecta."
  },
  {
    title: "Módulo 4",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m4.jpg",
    description: "Pasteles pensados especialmente para personas con intolerancia o que buscan una alimentación más ligera, sin perder el placer de comer un buen pastel."
  },
  {
    title: "Módulo 5",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m5.jpg",
    description: "Aprende masas base versátiles y múltiples variaciones de sabor a partir de una sola receta."
  }
];

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Lo que vas a aprender
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
            {modules.map((item, index) => (
              <div key={index} className="rounded-xl p-1 bg-gradient-to-br from-pink-500 to-purple-600 transition-all hover:shadow-lg hover:-translate-y-2">
                <Card className="overflow-hidden bg-card rounded-lg flex flex-col h-full border-0">
                  <div className="p-6 text-center">
                    <h3 className="font-headline text-xl font-bold text-accent">{item.title}</h3>
                  </div>
                  {item.image && (
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-contain"
                    />
                  )}
                  {item.description && (
                     <CardContent className="flex-grow flex items-center justify-center">
                       <p className="text-muted-foreground text-center">{item.description}</p>
                     </CardContent>
                  )}
                </Card>
              </div>
            ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/J103933545W?checkoutMode=10">¡Quiero empezar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
