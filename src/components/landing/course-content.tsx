
import { Button } from "@/components/ui/button";
import { Smartphone, Paintbrush, Users, Smile, Scissors, BookCheck } from 'lucide-react';

const advantages = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Menos tempo de tela",
    description: "Uma alternativa divertida para a criança brincar longe do celular e da TV."
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Estimula a criatividade",
    description: "Recortar, colar e completar o álbum desenvolve imaginação e coordenação motora."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Diversão em família",
    description: "Um momento para pais e filhos brincarem juntos e criarem memórias especiais."
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "100% infantil e ilustrado",
    description: "Personagens desenhados, coloridos e pensados para o público infantil."
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "Fácil de usar",
    description: "É só imprimir, recortar, colar e começar a coleção."
  },
  {
    icon: <BookCheck className="h-8 w-8 text-primary" />,
    title: "Perfeito para colecionar",
    description: "Incentiva organização, paciência e o prazer de completar o álbum."
  }
];

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Imprima em casa e garanta diversão e aprendizado para toda família
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
            {advantages.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-2">
                 <div className="mb-4 rounded-full bg-primary/10 p-4">{item.icon}</div>
                 <h3 className="font-headline text-xl font-bold text-accent mb-2">{item.title}</h3>
                 <p className="text-muted-foreground text-center">{item.description}</p>
              </div>
            ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button size="lg" asChild className="font-bold animate-button-pulse">
            <a href="https://pay.hotmart.com/X104054100N?checkoutMode=10">¡Quiero empezar ahora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
