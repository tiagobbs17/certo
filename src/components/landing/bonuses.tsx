
import Image from 'next/image';

export function Bonuses() {
  return (
    <section className="w-full pt-36 pb-16 md:pt-44 md:pb-24 lg:pt-52 lg:pb-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent-foreground">
            Leve hoje + 3 super Bônus
          </h2>
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2030%20de%20jan.%20de%202026,%2003_34_30.png"
            alt="Bônus"
            width={1024}
            height={1024}
            className="rounded-xl shadow-lg max-w-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
}
