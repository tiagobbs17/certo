import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "📦 Como vou receber o álbum e os bônus?",
    answer: "Após a confirmação da compra, você recebe acesso imediato ao material digital.\nTodo o conteúdo é entregue em PDF, pronto para baixar e imprimir quantas vezes quiser."
  },
  {
    question: "🔐 Onde vou acessar o conteúdo?",
    answer: "O acesso chega diretamente no seu e-mail, no mesmo endereço usado na compra.\nVocê receberá um link exclusivo para acessar o álbum e todos os bônus."
  },
  {
    question: "⏱️ Em quanto tempo recebo o acesso?",
    answer: "O acesso é liberado imediatamente após a aprovação do pagamento.\nSem espera, sem envio físico."
  },
  {
    question: "🖨️ Preciso de algum material especial?",
    answer: `Não!
Você só precisa de:

- Uma impressora comum
- Tesoura e cola
- Lápis de cor ou canetinhas

Tudo foi pensado para ser simples e acessível para toda a família.`
  },
  {
    question: "👧🧒 Para qual idade o álbum é indicado?",
    answer: "O álbum é recomendado para crianças de 4 a 10 anos.\nEle estimula a criatividade, a coordenação motora, a diversão em família e o amor pelo futebol."
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
                  <p className="text-muted-foreground whitespace-pre-wrap">{faq.answer}</p>
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
