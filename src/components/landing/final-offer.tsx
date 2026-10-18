"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, XCircle } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

export function FinalOffer() {
  return (
    <section id="offer" className="scroll-mt-20 w-full py-16 md:py-24 lg:py-32 bg-orange-100 text-foreground">
      <div className="container px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-yellow-500">
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
                    <p className="text-sm text-muted-foreground font-semibold mt-2">📍 Ideal para quem quer apenas colecionar</p>
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
                    <li className="pt-4 border-t border-muted-foreground/20">
                      <p className="text-xs font-bold text-muted-foreground mb-2 flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-400" /> NÃO INCLUSO:
                      </p>
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
                </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4 mt-auto">
                <Button asChild size="lg" variant="outline" className="w-full h-12 text-base font-bold border-2">
                    <a href="https://pay.kiwify.com.br/o3C79YL">QUERO APENAS O ÁLBUM</a>
                </Button>
            </CardFooter>
          </Card>

          {/* Offer - Pacote Completo */}
          <Card className="flex flex-col border-2 border-green-500 relative w-full shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap z-10">
                🔥 OFERTA EXCLUSIVA | ⭐ RECOMENDADO
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-xl text-yellow-500">🟩 PACOTE COMPLETO 2026</CardTitle>
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
                      <span>Mais de 300 figurinhas para recortar e colar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✅</span>
                      <span>Atualizações com novos jogadores</span>
                    </li>
                </ul>
              <div className="bg-green-50 text-foreground p-4 rounded-lg border border-green-100">
                <h4 className="text-lg font-headline font-bold mb-4 text-green-600 text-center">🎁 BÔNUS EXCLUSIVOS INCLUSOS</h4>
                <ul className="space-y-2 text-left text-card-foreground/80 text-sm font-medium">
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Cards dos jogadores para colecionar</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Certificado de colecionador</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Jogo “Quem é o jogador”</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Jogo da memória</span></li>
                    <li className="flex items-start gap-2"><span>🎁</span> <span>Calendário dos jogos do brasileirão 2026</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 mt-auto">
                <Button asChild size="lg" className="w-full h-12 text-base font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
                    <a href="https://pay.kiwify.com.br/o3C79YL">👉 QUERO O PACOTE COMPLETO</a>
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
    </section>
  );
}
