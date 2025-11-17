import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, UtensilsCrossed, Zap, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: 'Panetones Artesanales',
    description: 'Hacer panetones artesanales, con recetas tradicionales y gourmet.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Técnicas Profesionales',
    description: 'Técnicas de preparación de la masa, fermentación y horneado, garantizando panetones suaves y sabrosos.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: 'Creaciones Deliciosas',
    description: 'Crear combinaciones de rellenos y coberturas deliciosas.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Tu Propio Negocio',
    description: 'Desarrollar tu propio negocio de panetones artesanales, ofreciendo productos exclusivos.',
  },
];

export function Benefits() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Al final del material serás capaz de:
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Domina el arte del panettone y convierte tu pasión en un negocio exitoso.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
