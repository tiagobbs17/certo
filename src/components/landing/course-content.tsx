import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const modules = [
  {
    title: "Módulo 1",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m1.png"
  },
  {
    title: "Módulo 2",
    image: "https://ik.imagekit.io/cbes7rupj/capa%202.png"
  },
  {
    title: "Módulo 3",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m3.jpg"
  },
  {
    title: "Módulo 4",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m4.jpg"
  },
  {
    title: "Módulo 5",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m5.jpg"
  },
  {
    title: "🔹 Módulo 6 – Bolos de Chocolate",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20modulo%205.jpg"
  },
  {
    title: "🎓 Módulo 7 – Producción Manual Profesional",
    image: "https://ik.imagekit.io/cbes7rupj/capa%20modulo%207.jpg"
  }
];

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que vas a aprender
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
            {modules.map((item, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 bg-card rounded-xl flex flex-col">
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
              </Card>
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
