import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <div className="h-16 w-16 bg-muted rounded-full" />,
    title: "Aprende todo desde cero",
    description: "Paso a paso, totalmente didáctico, no importa si no tienes conocimientos previos en la materia."
  },
  {
    icon: <div className="h-16 w-16 bg-muted rounded-full" />,
    title: "Mejora y evoluciona tus técnicas",
    description: "Para ti que ya trabajas en el área o que ya haces Panetones y quieres mejorar tus técnicas."
  },
  {
    icon: <div className="h-16 w-16 bg-muted rounded-full" />,
    title: "Conquista muchos más clientes",
    description: "Conviértete en especialista en Panetones, destácate en tu ciudad y comienza en el campo de la forma correcta."
  }
]

export function Features() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Ventajas del producto digital Dulce Navidad
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nunca fue tan fácil aprender todo sobre Panetones.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center transition-all hover:shadow-lg hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                {feature.icon}
                <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
