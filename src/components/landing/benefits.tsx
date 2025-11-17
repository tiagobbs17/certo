import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, UtensilsCrossed, Zap, Briefcase, BadgeCheck, Clock, MessageSquare, Users } from 'lucide-react';

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

const additionalBenefits = [
    {
        icon: <BadgeCheck className="h-5 w-5 text-primary" />,
        text: 'Un certificado digital reconocido, válido para el ejercicio profesional',
    },
    {
        icon: <Clock className="h-5 w-5 text-primary" />,
        text: 'Acceso inmediato y de por vida al contenido completo del curso',
    },
    {
        icon: <MessageSquare className="h-5 w-5 text-primary" />,
        text: 'Soporte disponible para resolver todas tus dudas durante el proceso de aprendizaje',
    },
    {
        icon: <Users className="h-5 w-5 text-primary" />,
        text: 'Una comunidad exclusiva de estudiantes para compartir tu progreso e inspirarte',
    },
]

export function Benefits() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
            Al final del material serás capaz de:
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold font-headline text-accent">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl mt-16 text-center">
            <h3 className="text-2xl font-headline font-bold mb-6 text-accent">Además, recibirás acceso a:</h3>
            <ul className="grid gap-4 sm:grid-cols-2 text-left">
                {additionalBenefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {item.icon}
                        <span className="text-muted-foreground flex-1">{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
