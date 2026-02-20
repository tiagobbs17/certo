
import Image from 'next/image';

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
            src="https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2020%20de%20fev.%20de%202026,%2001_11_52.png"
            alt="Conteúdo do álbum de figurinhas"
            width={1400}
            height={933}
            className="w-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
