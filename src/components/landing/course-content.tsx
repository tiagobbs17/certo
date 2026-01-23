import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleDot } from 'lucide-react';
import Image from "next/image";

const modules = [
  {
    title: "Módulo 1",
    description: "Aprende a organizar tu espacio de trabajo, conocer los materiales correctos y aplicar los cuidados esenciales para iniciar la producción de bolos de forma segura y profesional.",
    lessons: ["Bienvenida e introducción al curso", "Materiales y utensilios necesarios para bolos", "Higiene y organización del área de trabajo", "Preparación inicial de las masas para bolos", "Videos prácticos: elaboración de bolos paso a paso"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m1.png"
  },
  {
    title: "Módulo 2",
    description: "Aprende a preparar la masa perfecta para bolos, entendiendo cada etapa del proceso para lograr textura, sabor y estructura ideales.",
    lessons: ["Preparación de la masa base para bolos", "Punto correcto de amasado", "Fermentación y tiempos ideales", "Técnicas de horneado", "Control de temperatura para bolos perfectos"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%202.png"
  },
  {
    title: "Módulo 3",
    description: "Domina el proceso completo de los bolos tradicionales, desde la masa hasta la decoración final.",
    lessons: ["Preparación de la masa tradicional", "Formado correcto de los bolos", "Horneado paso a paso", "Bolos con azúcar glas", "Bolos con chispas", "Bolos con glaseado clásico", "Técnicas de acabado profesional"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m3.jpg"
  },
  {
    title: "Módulo 4",
    description: "Aprende a preparar rellenos cremosos y masas especiales para crear bolos diferenciados y muy deseados.",
    lessons: ["Preparación de rellenos cremosos", "Relleno de queso crema", "Bolo Red Velvet", "Masa de brownie para bolos", "Bolo brownie", "Bolo Romeo y Julieta (queso y guayaba)", "Técnicas correctas de relleno sin romper el bolo"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m4.jpg"
  },
  {
    title: "Módulo 5",
    description: "Aprende a crear bolos de alto valor, con rellenos y coberturas premium que aumentan tu ticket medio y tus ganancias.",
    lessons: ["Preparación de relleno de leche en polvo", "Bolo gourmet de Nutella y leche en polvo", "Bolo gourmet de helado con cobertura de chocolate", "Preparación de brigadeiro gourmet", "Bolo gourmet relleno de brigadeiro", "Presentación y acabado premium"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%20m5.jpg"
  },
  {
    title: "🔹 Módulo 6 – Bolos de Chocolate",
    description: "Domina todo el proceso de elaboración de bolos de chocolate, desde la masa hasta los rellenos trufados.",
    lessons: ["Preparación de la masa de bolo de chocolate", "Ajuste de la masa para diferentes versiones", "Formado de los bolos de chocolate", "Horneado", "Preparación de relleno trufado", "Bolo trufado", "Preparación de relleno trufado blanco", "Bolo de chocolate relleno con Nutella"],
    image: "https://ik.imagekit.io/cbes7rupj/capa%20modulo%205.jpg"
  },
  {
    title: "🎓 Módulo 7 – Producción Manual Profesional",
    description: "Especial para quienes no tienen batidora ni equipos profesionales. Aprende a preparar masas y bolos de forma totalmente manual, logrando resultados profesionales.",
    lessons: ["Preparación de masas a mano", "Técnicas de amasado sin cansancio", "Desarrollo correcto del gluten manually", "Incorporación de la mantequilla sin dañar la masa", "Cómo trabajar masas pegajosas con técnica", "Bolos con estructura profesional sin máquinas"],
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
                    className="w-full h-48 object-contain"
                  />
                )}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                  <ul className="pl-4 space-y-2 mt-4 text-sm">
                    {item.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-3">
                        <CircleDot className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
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
