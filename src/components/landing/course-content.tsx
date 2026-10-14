
import Image from 'next/image';

export function CourseContent() {
  return (
    <section id="content" className="w-full py-16 md:py-24 lg:py-32 bg-[#063b21]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed">
              Conheça os detalhes dessa coleção ilustrada e descubra como a diversão começa!
            </p>
          </div>
          <div className="w-full mt-8 px-0">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/IMG_5303.JPG"
              alt="Conteúdo do álbum de figurinhas"
              width={1400}
              height={933}
              className="w-full shadow-2xl rounded-lg border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
