import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleDot } from 'lucide-react';
import Image from "next/image";

const modules = [
  {
    title: "Módulo 1 - Organización y Primeros Pasos",
    description: "Organiza tu espacio de trabajo, domina los materiales y practica los cuidados básicos necesarios para comenzar la producción de panettone de forma segura y profesional.",
    lessons: ["Introducción al curso - Bienvenida", "Materiales y utensilios necesarios", "Higiene y organización del lugar de trabajo"],
    image: "https://ik.imagekit.io/cbes7rupj/panetone%20l.png"
  },
  {
    title: "Módulo 2 - Bases y Primera Producción",
    description: "Domina la fermentación, aprende técnicas de congelación y usa el horno con precisión para lograr un panettone con la estructura perfecta.",
    lessons: ["Masa base de fermentación", "Congelación del panettone", "Horno e instrucciones"],
    image: "https://ik.imagekit.io/cbes7rupj/m2.png"
  },
  {
    title: "Módulo 3 - Panetones Artesanales Clásicos",
    description: "Aprende a preparar, dar forma, hornear y decorar el panettone tradicional, dominando las masas y coberturas clásicas que realzan su sabor y presentación.",
    lessons: ["Preparación de la masa del panettone", "Dado y moldeado del panettone", "Horneado del panettone", "Panettone con azúcar glas", "Panettone con frutos secos", "Panettone con frutas"],
    image: "https://ik.imagekit.io/cbes7rupj/m3.png"
  },
  {
    title: "Módulo 4 - Panetones Especiales",
    description: "Crea rellenos y masas innovadoras, como queso crema, Red Velvet, Brownietone y Romeo y Julieta, y amplía tu menú con sabores exclusivos.",
    lessons: ["Relleno de queso crema", "Panettone Red Velvet", "Masa de brownie", "Brownietone", "Panettone Romeo y Julieta"],
    image: "https://ik.imagekit.io/cbes7rupj/m4.png"
  },
  {
    title: "Módulo 5 - Panetones Gourmet Premium",
    description: "Rellenos y combinaciones de alto valor, como Nutella con leche en polvo, brigadeiro gourmet y panettone de helado, creando versiones premium que aumentan tu margen de beneficio.",
    lessons: ["Relleno de Ninho", "Panettone Gourmet de Nutella y Ninho", "Panettone Gourmet de helado con cobertura de chocolate", "Relleno de brigadeiro gourmet", "Panettone Gourmet de brigadeiro"],
    image: "https://ik.imagekit.io/cbes7rupj/m5.png"
  },
  {
    title: "Módulo 6 - Chocotones Artesanales",
    description: "Aprende todo el proceso del chocotone artesanal, desde la preparación de la masa hasta las versiones trufadas y rellenas con Nutella y chocolate blanco.",
    lessons: ["Preparación de la masa de chocotone", "Finalizando la masa para cada tipo de chocotone", "Modelando y dando forma a los chocotones", "Horneando los chocotones", "Relleno trufado", "Chocotone trufado", "Relleno trufado blanco", "Chocotone con chocolate Chocotone con Nutella"],
    image: "https://ik.imagekit.io/cbes7rupj/m6.png"
  }
];

const bonuses = [
  {
    title: "Bonificación 1 - Amplía Tu Cardápio con Recetas Premium",
    description: "Brownie navideño, tarta navideña en forma de corona y panettone sin gluten para diversificar tu oferta y satisfacer a distintos perfiles de clientes.",
    lessons: ["Brownie navideño", "Tarta navideña en forma de corona", "Panettone sin gluten"],
    image: null
  },
  {
    title: "Bonificación 2 - Emprendimiento y Estrategias de Venta",
    description: "Técnicas de envasado, precios adecuados, promoción de tu trabajo y cómo usar el manual completo del curso para convertir tu producción artesanal en un negocio rentable.",
    lessons: ["Envasado de panettone", "Consejos de envasado", "Cómo promocionar mi trabajo", "Precios", "Manual del curso con recetas completas"],
    image: null
  },
  {
    title: "Bonificación 3 - Postres Navideños",
    description: "3 deliciosas recetas de postres navideños para sorprender a tus seres queridos.",
    lessons: ["Tarta de manzana especiada", "Tronco de Navidad", "Galletas de jengibre"],
    image: null
  },
  {
    title: "Bonificación 4 - Navidad Encantada",
    description: "3 recetas irresistibles de comidas tradicionales para la Navidad.",
    lessons: ["Pavo relleno", "Ensalada de manzana", "Cordero al horno"],
    image: null
  },
]

export function CourseContent() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que vas a aprender
          </h2>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/panetone%20l.png"
            alt="Panetones"
            width={700}
            height={200}
            className="mx-auto mt-6"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[...modules, ...bonuses].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start gap-4">
                     {item.image ? (
                      <Image 
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="rounded-full flex-shrink-0 mt-1 object-cover h-16 w-16"
                      />
                    ) : (
                      <div className="h-16 w-16 bg-muted rounded-full flex-shrink-0 mt-1" />
                    )}
                    <Badge variant={index < modules.length ? "destructive" : "default"} className="absolute top-4 left-4 bg-primary text-primary-foreground">{index < modules.length ? `Módulo ${index + 1}` : "Bonus"}</Badge>
                    <div className="flex-1">
                      <h3 className="font-headline text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-8 pr-4 space-y-2 mt-2">
                    {item.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center gap-3">
                        <CircleDot className="h-4 w-4 text-primary" />
                        <span className="text-foreground/80">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold">
            <a href="#offer">¡Quiero empezar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
