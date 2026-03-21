"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function FinalOffer() {
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);

  return (
    <>
      <section id="offer" className="scroll-mt-20 w-full py-16 md:py-24 lg:py-32 bg-orange-100 text-foreground">
        <div className="container px-4 md:px-6">
          <div className="w-full max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter text-yellow-500">
              PREÇO ESPECIAL DE LANÇAMENTO
            </h2>
            <p className="text-xl text-foreground/80">Escolha a melhor oferta para você!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Offer 2 - Pacote Completo */}
            <Card className="flex flex-col border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  🎉 MAIS VENDIDO
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl text-yellow-500">Pacote Completo</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                  <div className="text-center">
                      <p className="text-4xl font-bold text-green-500">R$29,90</p>
                      <p className="text-sm text-green-600 font-semibold mt-1">Junte-se a mais de 30 mil colecionadores!</p>
                  </div>
                  <ul className="space-y-3 text-left text-foreground/80 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="mt-1">✅</span>
                        <span>Álbum de Figurinhas Infantil da Copa do Mundo 2026 (imprimível)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1">✅</span>
                        <span>96 páginas de álbum e mais de 400 figurinhas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1">✅</span>
                        <span>Material educativo e criativo para imprimir.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1">✅</span>
                        <span>Atualizações semanais com mais seleções e figurinhas.</span>
                      </li>
                  </ul>
                <div className="bg-card/50 text-foreground p-4 rounded-lg border">
                  <h4 className="text-lg font-headline font-bold mb-2 text-yellow-500">BÔNUS EXCLUSIVOS</h4>
                  <ul className="space-y-2 text-left text-card-foreground/80 text-sm font-medium">
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 1: Cartas dos Jogadores para Colecionar</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 2: Certificado Infantil de Colecionador</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 3: Imagens dos Jogadores para Colorir</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 4: Kit festa com tema da seleção brasileira</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 5: Receitas kids</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 6: Desafio quem é o jogador</span></li>
                      <li className="flex items-start gap-3"><span>🎁</span> <span>BÔNUS 7: Jogo da Memória da Copa 2026</span></li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4 mt-auto">
                  <a href="https://pay.kiwify.com.br/Ec3XbsC" className="w-full">
                      <Button size="lg" className="w-full h-12 text-lg font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
                      QUERO O PACOTE COMPLETO
                      </Button>
                  </a>
              </CardFooter>
            </Card>

            {/* Offer 1 - Pacote Básico */}
            <Card className="flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl text-yellow-500">Pacote Básico</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">R$10,00</p>
                </div>
                <ul className="space-y-3 text-left text-foreground/80 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">✅</span>
                    <span>Álbum de Figurinhas Infantil da Copa do Mundo 2026 (imprimível)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">✅</span>
                    <span>96 páginas de álbum e mais de 400 figurinhas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">✅</span>
                    <span>Material educativo e criativo para imprimir.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-4 mt-auto">
                <Button onClick={() => setIsCustomDialogOpen(true)} size="lg" className="w-full h-12 text-lg font-bold bg-green-500/80 hover:bg-green-600/80 text-white animate-button-pulse">
                  QUERO O MEU ÁLBUM
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full max-w-md mx-auto mt-8 text-center space-y-2">
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

      <Dialog open={isCustomDialogOpen} onOpenChange={setIsCustomDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline text-center text-green-500">Oferta Exclusiva!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Leve o <strong>Pacote Completo</strong> com todos os bônus e atualizações de <span className="line-through">R$29,90</span> por apenas <strong className="text-green-500 text-lg">R$19,90</strong>!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 pt-4">
            <a href="https://pay.kiwify.com.br/ZixRSlp" className="w-full">
              <Button className="w-full h-12 font-bold text-base bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
                Sim, quero aproveitar o desconto!
              </Button>
            </a>
            <a href="https://pay.kiwify.com.br/C8kHErO" className="w-full">
              <Button className="w-full h-12 font-bold text-base bg-green-500/80 hover:bg-green-600/80 text-white animate-button-pulse">
                Quero o básico mesmo
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
