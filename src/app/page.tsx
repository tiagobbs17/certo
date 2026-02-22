
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-headline font-bold sm:text-5xl md:text-6xl text-green-500">
          Quase lá!
        </h1>
        <p className="max-w-md text-lg text-muted-foreground md:text-xl">
          Clique no botão abaixo para concluir sua compra com segurança.
        </p>
        <Link href="https://pay.cakto.com.br/htdkho6_763494" className="w-full max-w-xs">
          <Button size="lg" className="w-full h-14 text-xl font-bold bg-green-500 hover:bg-green-600 text-white animate-button-pulse">
            Ir para o Pagamento
          </Button>
        </Link>
      </main>
    </div>
  );
}
