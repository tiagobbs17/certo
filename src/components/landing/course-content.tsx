
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Imprima em casa e garanta diversão e aprendizado para toda família
          </h2>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2002_21_35.png"
            alt="Conteúdo do álbum de figurinhas"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
          />
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
