import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock, Smartphone, Mail } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';

export function FinalOffer() {
  const heroImage = "https://ik.imagekit.io/cbes7rupj/1769758075.png";

  return (
    <section id="offer" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground scroll-mt-20">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="w-full max-w-md text-center space-y-8">
          <Card className="bg-card overflow-hidden shadow-xl text-foreground">
            <CardHeader className="p-0">
              <Image
                src={heroImage}
                width={720}
                height={405}
                alt="Bolos Sem Limites"
                className="w-full h-auto object-cover"
                data-ai-hint="cakes baking"
              />
            </CardHeader>
          </Card>

          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-accent">
            PREÇO ESPECIAL DE LANÇAMENTO
          </h2>

          <div className="space-y-1">
            <p className="text-4xl font-bold text-green-500">Leve TUDO isso por apenas R$27,90!</p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-accent">Ao acessar hoje você receberá:</h3>
          
          <ul className="space-y-3 text-left inline-block text-lg text-foreground font-bold">
            <li className="flex items-center gap-3"><span>✅</span> <span>Álbum de Figurinhas Infantil da Copa do Mundo 2026 (imprimível)</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>96 páginas de álbum</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Mais de 200 figurinhas ilustradas</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Conteúdo organizado por temas da Copa</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Material educativo e criativo</span></li>
            <li className="flex items-center gap-3"><span>✅</span> <span>Arquivo digital para imprimir quantas vezes quiser</span></li>
          </ul>

          <div className="bg-card text-foreground p-6 rounded-lg border">
            <h4 className="text-xl font-headline font-bold mb-4 text-yellow-500">BÔNUS</h4>
             <ul className="space-y-2 text-left text-card-foreground/80">
                <li className="flex items-center gap-3"><span>🎁</span> <span>BÔNUS 1: Bolos para Congelar e Consumir na Semana</span></li>
                <li className="flex items-center gap-3"><span>🎁</span> <span>BÔNUS 2: Bolos para Crianças com Restrições</span></li>
                <li className="flex items-center gap-3"><span>🎁</span> <span>BÔNUS 3: Muffins Sem Limites</span></li>
            </ul>
          </div>
          
          <div className="space-y-2">
             <div className="flex items-center justify-center gap-2"><Lock className="h-5 w-5" /> <span>Acesso seguro e 100% digital</span></div>
             <div className="flex items-center justify-center gap-2"><Smartphone className="h-5 w-5" /> <span>Compatível com qualquer dispositivo</span></div>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-400">Oferta limitada</p>
            <p className="text-muted-foreground">últimas vagas disponíveis</p>
          </div>
          
          <Button size="lg" className="w-full h-14 text-xl font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse" asChild>
            <a href="https://pay.hotmart.com/X104054100N?checkoutMode=10">QUERO Bolos Sem Limites</a>
          </Button>

          <Image
            src="https://ik.imagekit.io/cbes7rupj/Compra-Segura-2.png?updatedAt=1763430085861"
            width={400}
            height={78}
            alt="Compra Segura"
            className="mx-auto pt-4"
          />
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>Entrega imediata no e-mail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
