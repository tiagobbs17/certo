import { ShieldCheck, CalendarClock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Garantía
          </div>
          <Image 
            src="https://ik.imagekit.io/cbes7rupj/simbolo-inifinito-dourado.png"
            alt="Símbolo do Infinito"
            width={80}
            height={40}
          />
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Acceso Vitalicio e Ilimitado</h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-prose">
            Con tu compra, garantizas acceso permanente al curso. Estudia a tu propio ritmo, sin plazos ni presiones. Siempre recibirás actualizaciones y contenido adicional de forma gratuita. Tu aprendizaje no tiene fecha de vencimiento.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">7 Días de Garantía</CardTitle>
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">Compra sin riesgos</div>
                <p className="text-xs text-muted-foreground">
                  Si no estás satisfecha, te devolvemos tu dinero.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Acceso de por Vida</CardTitle>
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">Siempre Tuyo</div>
                <p className="text-xs text-muted-foreground">
                  Accede al contenido y a las actualizaciones futuras para siempre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
