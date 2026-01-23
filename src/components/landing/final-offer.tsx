import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock, Smartphone, Mail } from 'lucide-react';

export function FinalOffer() {
  const heroImage = "https://ik.imagekit.io/cbes7rupj/ChatGPT%20Image%2023%20de%20jan.%20de%202026,%2018_07_28.png";

  return (
    <section id="offer" className="w-full py-16 md:py-24 lg:py-32 bg-purple-50 text-gray-800 scroll-mt-20">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <Image
          src={heroImage}
          width={720}
          height={405}
          alt="Pasteles caseros"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl mb-12"
          data-ai-hint="cakes baking"
        />

        <div className="w-full max-w-md text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-gray-900">
            PRECIO ESPECIAL DE LANZAMIENTO
          </h2>

          <div className="space-y-1">
            <p className="text-4xl font-bold text-green-600">¡Llévate TODO esto por solo $6,90 USD!</p>
            <p className="text-sm text-gray-600">(Puedes pagar en tu moneda local)</p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-gray-900">Al acceder hoy a <span className="text-accent">Pasteles Sin Límites</span>, recibirás:</h3>
          
          <ul className="space-y-3 text-left inline-block text-lg">
            <li className="flex items-center gap-3"><span>✅</span> <span>Pasteles con o sin azúcar</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Pasteles con o sin huevos</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Pasteles sin leche</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Pasteles sin gluten</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Pasteles para el día a día</span></li>
          </ul>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h4 className="text-xl font-headline font-bold mb-4 text-yellow-600">BONOS</h4>
             <ul className="space-y-2 text-left text-gray-700">
                <li className="flex items-center gap-3"><span>🎁</span> <span>BONO 1: Pasteles para Congelar y Consumir en la Semana</span></li>
                <li className="flex items-center gap-3"><span>🎁</span> <span>BONO 2: Pasteles para Niños con Restricciones</span></li>
                <li className="flex items-center gap-3"><span>🎁</span> <span>BONO 3: Muffins Sin Límites</span></li>
            </ul>
          </div>
          
          <div className="space-y-2">
             <div className="flex items-center justify-center gap-2"><Lock className="h-5 w-5" /> <span>Acceso seguro y 100% digital</span></div>
             <div className="flex items-center justify-center gap-2"><Smartphone className="h-5 w-5" /> <span>Compatible con cualquier dispositivo</span></div>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-600">Oferta limitada</p>
            <p className="text-gray-600">últimos cupos disponibles</p>
          </div>
          
          <Button size="lg" className="w-full h-14 text-xl font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse" asChild>
            <a href="https://pay.hotmart.com/J103933545W?checkoutMode=10">QUIERO Pasteles Sin Límites</a>
          </Button>

          <Image
            src="https://ik.imagekit.io/cbes7rupj/Compra-Segura-2.png?updatedAt=1763430085861"
            width={400}
            height={78}
            alt="Compra Segura"
            className="mx-auto pt-4"
          />
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <Mail className="h-5 w-5" />
              <span>Entrega inmediata al correo electrónico</span>
          </div>
        </div>
      </div>
    </section>
  );
}
