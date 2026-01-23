import Image from 'next/image';
import { Award, CheckSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Certificate() {
  const certificateImage = PlaceHolderImages.find(p => p.id === 'certificate-mockup');

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <Badge>Tu Reconocimiento</Badge>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recibe tu Certificado Profesional
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Al completar el curso, recibirás un certificado con validez nacional, respaldado por la ABED (Asociación Brasileña de Educación a Distancia), que acredita tus nuevas habilidades como especialista en bolos.
          </p>
          <ul className="grid gap-2">
            <li className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Certificado con validez nacional.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-primary" />
              <span>Asociado con la ABED.</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          {certificateImage && (
            <Image
              src={certificateImage.imageUrl}
              width="550"
              height="350"
              alt="Certificado de Conclusión del Curso Bolos Pro"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
              data-ai-hint={certificateImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {children}
        </div>
    );
}
