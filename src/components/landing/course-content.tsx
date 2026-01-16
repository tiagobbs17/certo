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
    title: "🔹 Módulo 1 – Organización y Primeros Pasos",
    description: "Aprende a organizar tu espacio de trabajo, conocer los materiales correctos y aplicar los cuidados esenciales para iniciar la producción de mini donuts de forma segura y profesional.",
    lessons: ["Bienvenida e introducción al curso", "Materiales y utensilios necesarios para donuts", "Higiene y organización del área de trabajo", "Preparación inicial de las masas para mini donuts", "Videos prácticos: elaboración de mini donuts paso a paso"],
    image: "https://ik.imagekit.io/cbes7rupj/m1.png"
  },
  {
    title: "🔹 Módulo 2 – Masas y Preparación Básica",
    description: "Aprende a preparar la masa perfecta para donuts, entendiendo cada etapa del proceso para lograr textura, sabor y estructura ideales.",
    lessons: ["Preparación de la masa base para mini donuts", "Punto correcto de amasado", "Fermentación y tiempos ideales", "Técnicas de fritura y horneado", "Control de temperatura para donuts perfectos"],
    image: "https://ik.imagekit.io/cbes7rupj/m2.png"
  },
  {
    title: "🔹 Módulo 3 – Mini Donuts Clásicos",
    description: "Domina el proceso completo de los donuts tradicionales, desde la masa hasta la decoración final.",
    lessons: ["Preparación de la masa tradicional", "Formado correcto de los mini donuts", "Fritura y horneado paso a paso", "Donuts con azúcar glas", "Donuts con chispas", "Donuts con glaseado clásico", "Técnicas de acabado profesional"],
    image: "https://ik.imagekit.io/cbes7rupj/m3.png"
  },
  {
    title: "🔹 Módulo 4 – Mini Donuts Rellenos y Especiales",
    description: "Aprende a preparar rellenos cremosos y masas especiales para crear donuts diferenciados y muy deseados.",
    lessons: ["Preparación de rellenos cremosos", "Relleno de queso crema", "Donut Red Velvet", "Masa de brownie para donuts", "Donut brownie", "Donut Romeo y Julieta (queso y guayaba)", "Técnicas correctas de relleno sin romper el donut"],
    image: "https://ik.imagekit.io/cbes7rupj/m4.png"
  },
  {
    title: "🔹 Módulo 5 – Mini Donuts Gourmet Premium",
    description: "Aprende a crear donuts de alto valor, con rellenos y coberturas premium que aumentan tu ticket medio y tus ganancias.",
    lessons: ["Preparación de relleno de leche en polvo", "Donut gourmet de Nutella y leche en polvo", "Donut gourmet de helado con cobertura de chocolate", "Preparación de brigadeiro gourmet", "Donut gourmet relleno de brigadeiro", "Presentación y acabado premium"],
    image: "https://ik.imagekit.io/cbes7rupj/m5.png"
  },
  {
    title: "🔹 Módulo 6 – Mini Donuts de Chocolate",
    description: "Domina todo el proceso de elaboración de donuts de chocolate, desde la masa hasta los rellenos trufados.",
    lessons: ["Preparación de la masa de donut de chocolate", "Ajuste de la masa para diferentes versiones", "Formado de los donuts de chocolate", "Fritura y horneado", "Preparación de relleno trufado", "Donut trufado", "Preparación de relleno trufado blanco", "Donut de chocolate relleno con Nutella"],
    image: "https://ik.imagekit.io/cbes7rupj/m6.png"
  },
  {
    title: "🎓 Módulo 7 – Producción Manual Profesional",
    description: "Especial para quienes no tienen batidora ni equipos profesionales. Aprende a preparar masas y donuts de forma totalmente manual, logrando resultados profesionales.",
    lessons: ["Preparación de masas a mano", "Técnicas de amasado sin cansancio", "Desarrollo correcto del gluten manually", "Incorporación de la mantequilla sin dañar la masa", "Cómo trabajar masas pegajosas con técnica", "Donuts con estructura profesional sin máquinas"],
    image: "https://ik.imagekit.io/cbes7rupj/p.jpg"
  }
];

const bonuses = [
  {
    title: "Bonificación 1 - Amplía Tu Menú con Recetas Premium",
    description: "Brownie especial, tarta festiva en forma de corona y donas sin gluten para diversificar tu oferta, satisfacer a distintos perfiles de clientes y aumentar el valor de tus productos.",
    lessons: ["Brownie especial", "Tarta festiva en forma de corona", "Donas sin gluten"],
    image: "https://ik.imagekit.io/cbes7rupj/b1.webp"
  },
  {
    title: "Bonificación 2 - Emprendimiento y Estrategias de Venta",
    description: "Técnicas de envasado, precios adecuados, promoción de tu trabajo y cómo usar el manual completo del curso para convertir tu producción artesanal en un negocio rentable.",
    lessons: ["Envasado de donas", "Consejos de envasado", "Cómo promocionar mi trabajo", "Precios", "Manual del curso con recetas completas"],
    image: "https://ik.imagekit.io/cbes7rupj/plan.png"
  },
  {
    title: "Bonificación 3 - Postres Adicionales",
    description: "Para que este curso sea aún más completo, incluye 3 deliciosas recetas de postres que te encantarán. ¡Sorprende a tus seres queridos con estas delicias!",
    lessons: ["Tarta de manzana especiada: Una combinación perfecta de manzana, canela y nuez moscada.", "Tronco de chocolate: El clásico tronco de chocolate, con su corteza esponjosa y su cremoso relleno de chocolate.", "Galletas de jengibre: Pequeñas y sabrosas, ideales para disfrutar con un café después de la cena."],
    image: "https://ik.imagekit.io/cbes7rupj/bon%203.jpg"
  },
  {
    title: "Recetas Saladas",
    description: "3 recetas irresistibles de comidas tradicionales para fiestas.",
    lessons: ["Pavo relleno – Un suculento pavo con un relleno de frutas y hierbas que hará que todos pidan más.", "Ensalada de manzana – Una ensalada fresca y cremosa, con manzanas, nueces y un toque de crema, perfecta para acompañar.", "Cordero al horno – Un tierno cordero asado, bañado en salsa de vino tinto, que deleitará a tus invitados."],
    image: "https://ik.imagekit.io/cbes7rupj/bonus%204.jpg"
  },
]

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que vas a aprender
          </h2>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/confeitera.jpg"
            alt="Mini Donas"
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
                    <Badge variant={index < modules.length ? "destructive" : "default"} className="absolute top-4 left-4 bg-primary text-primary-foreground">{index < modules.length ? `Módulo ${index + 1}` : `Bono ${index - modules.length + 1}`}</Badge>
                    <div className="flex-1">
                      <h3 className="font-headline text-lg font-bold text-accent">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-8 pr-4 space-y-2 mt-2">
                    {item.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-3">
                        <CircleDot className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                  {
                    index === (modules.length + bonuses.length - 2) && (
                        <p className="pl-8 pr-4 mt-4 text-foreground">¡Haz que tus celebraciones sean inolvidables con estos dulces tradicionales!</p>
                    )
                  }
                  {
                    index === (modules.length + bonuses.length - 1) && (
                        <p className="pl-8 pr-4 mt-4 text-foreground">¡Celebra con sabor y tradición!</p>
                    )
                  }
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/B102877180F?checkoutMode=10">¡Quiero empezar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
