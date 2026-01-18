import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "¿Cuándo me envían los libros?",
    answer: "El acceso a todo el material digital, incluyendo los libros y bonos, es inmediato después de la confirmación de tu pago. Recibirás un correo electrónico con todos los detalles para acceder a la plataforma del curso."
  },
  {
    question: "¿Los ingredientes utilizados son fáciles de conseguir?",
    answer: "Sí, todas nuestras recetas están diseñadas con ingredientes que puedes encontrar fácilmente en supermercados locales o tiendas especializadas. Además, ofrecemos sugerencias de sustituciones para ingredientes más específicos."
  },
  {
    question: "¿Necesito tener experiencia en la cocina?",
    answer: "¡Absolutamente no! Nuestro curso está diseñado para todos los niveles, desde principiantes completos hasta personas que ya tienen experiencia y desean perfeccionar sus técnicas. Te guiaremos paso a paso."
  },
  {
    question: "¿Cómo puedo leer el libro digital?",
    answer: "Puedes acceder a los libros digitales (en formato PDF) desde cualquier dispositivo: tu computadora, tablet o smartphone. También puedes imprimirlos si prefieres tener una copia física."
  },
  {
    question: "¿Es seguro comprar online en este sitio web?",
    answer: "Sí, 100% seguro. Utilizamos una plataforma de pago reconocida a nivel mundial que cuenta con encriptación de datos para proteger tu información personal y financiera. Tu compra es completamente segura."
  }
]

export function Faq() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/J103933545W?off=ox4eio1y">Resolví mis dudas, ¡quiero comprar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
