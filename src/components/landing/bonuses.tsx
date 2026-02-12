
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Bonuses() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-accent">
      <div className="container px-0">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent-foreground px-4 md:px-6">
            Leve hoje + 3 super Bônus
          </h2>
          <Image
            src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2003_34_30.png"
            alt="Bônus"
            width={1200}
            height={1200}
            className="shadow-lg w-full"
          />
        </div>
      </div>
      <div className="container mt-12 flex justify-center px-4 md:px-6">
        <Link href="https://pay.cakto.com.br/htdkho6_763494">
          <Button size="lg" className="font-bold animate-button-pulse bg-green-500 hover:bg-green-600 text-white">
            Quero meu álbum e bônus!
          </Button>
        </Link>
      </div>
    </section>
  );
}
