
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

export function FinalOffer() {
  return (
    <section id="offer" className="scroll-mt-20 w-full py-16 md:py-24 lg:py-32 bg-orange-100 text-foreground">
      <div className="container px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-yellow-500">
            Aproveite o futebol de forma divertida e educativa com o pacote completo 2026 👇
          </h2>
        </div>

        <div className="flex justify-center max-w-2xl mx-auto">
          {/* Offer - Pacote Completo */}
          <Card className="flex flex-col border-2 border-green-500 relative w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                🔥 OFERTA EXCLUSIVA | ⭐ RECOMENDADO
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-xl text-yellow-500">🟩 PACOTE COMPLETO (R$29,90)</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                    <p className="text-4xl font-bold text-green-500">R$29,90</p>
                    <p className="text-sm text-green-600 font-semibold mt-2">💡 Leve tudo por menos de R$1 por dia</p>
                </div>
                <ul className="space-y-3 text-left text-foreground/80 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Álbum completo do Brasileirão Kids 2026 (imprimível)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Mais de 300 figurinhas para recortar e colar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Material educativo e criativo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Atualizações com novos jogadores</span>
                    </li>
                </ul>
              <div className="bg-card/50 text-foreground p-4 rounded-lg border">
                <h4 className="text-lg font-headline font-bold mb-4 text-yellow-500 text-center">🎁 BÔNUS EXCLUSIVOS INCLUSOS</h4>
                <ul className="space-y-3 text-left text-card-foreground/80 text-sm font-medium">
                    <li className="flex items-start gap-3"><span>🎁</span> <span>Cards dos jogadores para brincar e colecionar (as crianças amam)</span></li>
                    <li className="flex items-start gap-3"><span>🎁</span> <span>Certificado de colecionador para imprimir</span></li>
                    <li className="flex items-start gap-3"><span>🎁</span> <span>Jogo “Quem é o jogador”</span></li>
                    <li className="flex items-start gap-3"><span>🎁</span> <span>Jogo da memória do Brasileirão Kids 2026</span></li>
                    <li className="flex items-start gap-3"><span>🎁</span> <span>Calendário dos jogos do Brasileirão 2026</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 mt-auto">
                <Button size="lg" className="w-full h-12 text-lg font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
                    👉 QUERO O PACOTE COMPLETO AGORA
                </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="w-full max-md mx-auto mt-8 text-center space-y-2">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/formas-pagamento.png"
              width={400}
              height={40}
              alt="Formas de Pagamento"
              className="mx-auto"
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
