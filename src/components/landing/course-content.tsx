
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export function CourseContent() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-[#EFEBE9]">
      <div className="container px-0">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Imprima em casa e garanta diversão e aprendizado para toda família
            </h2>
          </div>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/046e6a10-d49e-4cc1-8f48-ed85993a2b73.png"
            alt="Conteúdo do álbum de figurinhas"
            width={1400}
            height={933}
            className="w-full shadow-lg"
          />
        </div>
      </div>
      
      <div className="container mt-12 flex justify-center px-4 md:px-6">
        <Link href="https://pay.cakto.com.br/htdkho6_763494">
          <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white">
            Quero meu álbum agora
          </Button>
        </Link>
      </div>
    </section>
  );
}
