import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "testimonial-1",
    name: "Maria García",
    text: "¡El curso superó mis expectativas! Las recetas son increíbles y el paso a paso es muy fácil de seguir. Mis panetones fueron un éxito total en Navidad.",
  },
  {
    id: "testimonial-2",
    name: "Ana Fernández",
    text: "Ya tenía algo de experiencia, pero este curso me ayudó a perfeccionar mis técnicas. Los panetones gourmet son un diferenciador. ¡Mis ventas se duplicaron!",
  },
  {
    id: "testimonial-3",
    name: "Laura Rodriguez",
    text: "Empecé desde cero y en una semana ya estaba vendiendo mis primeros panetones. ¡Increíble! La comunidad es de gran ayuda.",
  },
  {
    id: "testimonial-4",
    name: "Sofia Martinez",
    text: "El mejor curso online que he hecho. El contenido es de altísima calidad y el soporte es muy atento. Recomiendo 100%.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¡Mira lo que dicen nuestras alumnas sobre el curso!
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Más de 10,000 mujeres ya están transformando sus vidas con Dulce Navidad.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-12">
          {testimonials.map((testimonial) => {
             const avatar = PlaceHolderImages.find(p => p.id === testimonial.id);
             return (
              <Card key={testimonial.name} className="bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {avatar ? (
                      <Image
                        src={avatar.imageUrl}
                        alt={`Avatar de ${testimonial.name}`}
                        width={48}
                        height={48}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted" />
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
