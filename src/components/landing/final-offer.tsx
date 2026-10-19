"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, XCircle, Gift, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function FinalOffer() {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  return (
    <section id="offer" className="scroll-mt-20 w-full py-16 md:py-24 lg:py-32 bg-orange-100 text-foreground">
      <div className="container px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-yellow-500 uppercase">
            Escolha o melhor plano para o seu pequeno torcedor 👇
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offer - Só o Álbum */}
          <Card className="flex flex-col border-2 border-muted relative w-full opacity-90 shadow-sm">
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-xl text-muted-foreground">⬜ SÓ O ÁLBUM 2026</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                    <p className="text-4xl font-bold text-muted-foreground">R$10,00</p>
                    <p className="text-sm text-muted-foreground font-semibold mt-2">📍 A maioria das famílias prefere o Pacote Completo</p>
                </div>
                <ul className="space-y-3 text-left text-foreground/80 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Álbum completo do Brasileirão Kids 2026 (imprimível)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Mais de 400 figurinhas para recortar e colar</span>
                    </li>
                    <li className="pt-4 border-t border-muted-foreground/20">
                      <p className="text-xs font-bold text-muted-foreground mb-2 flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-400" /> NÃO INCLUSO:
                      </p>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Atualizações com novos jogadores</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Cards dos jogadores para colecionar</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Certificado de colecionador</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Jogo “Quem é o jogador”</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Jogo da memória</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Calendário dos jogos do brasileirão 2026</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground/50 line-through text-sm">
                      <span>❌</span>
                      <span>Participação no sorteio da camisa oficial</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4 mt-auto">
                <Button 
                  onClick={handleBasicClick}
                  size="lg" 
                  className="w-full h-12 text-base font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-0"
                >
                    QUERO APENAS O ÁLBUM
                </Button>
            </CardFooter>
          </Card>

          {/* Offer - Pacote Completo */}
          <Card className="flex flex-col border-2 border-green-500 relative w-full shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap z-10">
                🔥 OFERTA EXCLUSIVA | ⭐ MAIS ESCOLHIDO
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-xl text-yellow-500 uppercase">🟩 PACOTE COMPLETO 2026 + 6 BÔNUS</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                    <p className="text-4xl font-bold text-green-500">R$19,90</p>
                    <p className="text-sm text-green-600 font-semibold mt-2">💡 Leve tudo por menos de R$0,70 por dia</p>
                </div>
                <ul className="space-y-3 text-left text-foreground/80 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Álbum completo do Brasileirão Kids 2026 (imprimível)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Mais de 400 figurinhas para recortar e colar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Atualizações com novos jogadores</span>
                    </li>
                </ul>
              <div className="bg-green-50 text-foreground p-4 rounded-lg border border-green-100">
                <h4 className="text-lg font-headline font-bold mb-4 text-green-600 text-center">🎁 6 BÔNUS EXCLUSIVOS INCLUSOS</h4>
                <ul className="space-y-2 text-left text-card-foreground/80 text-sm font-medium">
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Cards dos jogadores para colecionar</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Certificado de colecionador</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Jogo “Quem é o jogador”</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Jogo da memória</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Calendário dos jogos do brasileirão 2026</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Participação no sorteio da camisa oficial</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 mt-auto">
                <Button asChild size="lg" className="w-full h-12 text-base font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
                    <a href="https://pay.wiapy.com/Gp0WOsmksLug">👉 QUERO O PACOTE COMPLETO</a>
                </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="w-full max-md mx-auto mt-12 text-center space-y-2">
            <Image
              src="https://ik.imagekit.io/cbes7rupj/formas-pagamento.png"
              width={400}
              height={40}
              alt="Formas de Pagamento"
              className="mx-auto"
            />
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <Mail className="h-5 w-5" />
                <span>Entrega imediata no seu e-mail</span>
            </div>
        </div>
      </div>

      {/* Modal de Upsell Reduzido */}
      <Dialog open={showUpsell} onOpenChange={setShowUpsell}>
        <DialogContent className="sm:max-w-[380px] p-0 overflow-hidden border-none bg-white">
          <div className="bg-green-600 p-4 text-white text-center space-y-1">
            <div className="flex justify-center mb-1">
              <div className="bg-yellow-400 p-1.5 rounded-full animate-bounce">
                <Sparkles className="h-4 w-4 text-green-700" />
              </div>
            </div>
            <DialogTitle className="text-xl font-headline font-bold uppercase leading-tight">
              PRESENTE EXCLUSIVO! 🎁
            </DialogTitle>
          </div>
          
          <div className="p-4 space-y-4 text-center">
            <DialogDescription className="text-base text-foreground font-medium leading-snug">
              Leve a <span className="text-green-600 font-bold underline">EXPERIÊNCIA COMPLETA</span> com todos os <span className="font-bold">6 BÔNUS</span> por um preço especial!
            </DialogDescription>

            <div className="bg-orange-50 border-2 border-dashed border-orange-200 p-3 rounded-xl space-y-1">
              <p className="text-muted-foreground line-through text-sm">De R$ 19,90</p>
              <p className="text-3xl font-black text-green-600">Por R$ 14,90</p>
              <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">⚡ OFERTA ÚNICA AGORA ⚡</p>
            </div>

            <div className="space-y-3">
              <Button asChild size="lg" className="w-full h-14 text-base font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse shadow-md">
                <a href="https://pay.wiapy.com/34mgLqByq_-">SIM! QUERO COM DESCONTO</a>
              </Button>
              
              <Button 
                variant="ghost" 
                asChild
                className="text-xs text-muted-foreground hover:text-foreground underline"
              >
                <a href="https://pay.wiapy.com/ghU791LMnYwx">Não, quero apenas o álbum por R$ 10</a>
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 py-2 text-center border-t">
            <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">
              Garantia de 7 Dias Inclusa
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
