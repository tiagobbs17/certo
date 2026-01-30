import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Quando receberei o material?",
    answer: "O acesso a todo o material digital, incluindo o álbum e os bônus, é imediato após a confirmação do seu pagamento. Você receberá um e-mail com todos os detalhes para acessar o conteúdo."
  },
  {
    question: "Como vou receber o álbum?",
    answer: "Você receberá o álbum em formato PDF no seu e-mail. Poderá imprimir em casa, em uma gráfica ou usar no seu dispositivo preferido, como tablet, celular ou computador."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício. Você poderá baixar e imprimir o material quantas vezes quiser, para sempre."
  },
  {
    question: "Posso pagar com PIX ou boleto?",
    answer: "Sim! Aceitamos PIX, boleto bancário e cartão de crédito. Com PIX e cartão, o acesso é liberado na hora. Com boleto, pode levar até 2 dias úteis."
  },
  {
    question: "A compra é segura?",
    answer: "Sim, 100% segura. Usamos a Hotmart, a maior plataforma de produtos digitais da América Latina, que protege todos os seus dados com criptografia de ponta."
  }
]

export function Faq() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Perguntas Frequentes
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
            <a href="https://pay.hotmart.com/X104054100N?checkoutMode=10">Resolvi minhas dúvidas, quero comprar agora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
