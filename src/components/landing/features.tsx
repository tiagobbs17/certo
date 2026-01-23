import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: "feature-1",
    title: "Aprende desde cero",
    description: "Paso a paso, de forma clara y práctica, incluso si nunca has preparado pasteles sin gluten o sin ciertos ingredientes."
  },
  {
    icon: "feature-2",
    title: "Mejora y perfecciona tus recetas",
    description: "Ideal para quienes ya hacen pasteles y desean adaptarlos para versiones más saludables, ligeras y accesibles para todos."
  },
  {
    icon: "feature-3",
    title: "Amplía tus posibilidades en la cocina",
    description: "Aprende a preparar pasteles que se adaptan a diferentes necesidades y preferencias, ofreciendo opciones deliciosas para más personas, sin complicaciones."
  }
]

export function Features() {
  const backgroundImage = "https://ik.imagekit.io/cbes7rupj/capa%20fundo%202.jpg";
  
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background de bolos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Ventajas del producto digital
          </h2>
          <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nunca fue tan fácil aprender todo sobre Bolos.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {features.map((feature, index) => {
            const featureImage = feature.icon ? PlaceHolderImages.find(p => p.id === feature.icon) : null;
            return (
              <Card key={index} className="text-center transition-all hover:shadow-lg hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  {featureImage ? (
                    <Image 
                      src={featureImage.imageUrl}
                      alt={feature.title}
                      width={96}
                      height={96}
                      className="rounded-full object-cover h-24 w-24"
                      data-ai-hint={featureImage.imageHint}
                    />
                  ) : (
                    <div className="h-24 w-24 bg-muted rounded-full" />
                  )}
                  <h3 className="text-2xl font-bold font-headline text-accent">{feature.title}</h3>
                  <p className="text-card-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
