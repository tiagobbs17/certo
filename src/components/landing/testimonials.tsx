import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¡Mira lo que dicen nuestras alumnas sobre el curso!
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
          <Card className="aspect-square bg-muted overflow-hidden">
            <Image 
              src="https://ik.imagekit.io/cbes7rupj/depoimento%201.jpeg" 
              alt="Depoimento 1" 
              width={400} 
              height={400}
              className="object-cover w-full h-full"
            />
          </Card>
          <Card className="aspect-square bg-muted overflow-hidden">
            <Image 
              src="https://ik.imagekit.io/cbes7rupj/depoimento%203.jpeg" 
              alt="Depoimento 2" 
              width={400} 
              height={400}
              className="object-cover w-full h-full"
            />
          </Card>
          <Card className="aspect-square bg-muted overflow-hidden">
            <Image 
              src="https://ik.imagekit.io/cbes7rupj/depoimento%204.jpeg" 
              alt="Depoimento 3" 
              width={400} 
              height={400}
              className="object-cover w-full h-full"
            />
          </Card>
          <Card className="aspect-square bg-muted overflow-hidden">
            <Image 
              src="https://ik.imagekit.io/cbes7rupj/depoimento%202.jpeg" 
              alt="Depoimento 4" 
              width={400} 
              height={400}
              className="object-cover w-full h-full"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
