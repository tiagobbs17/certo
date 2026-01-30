import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-muted text-muted-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex gap-4 mb-4">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Políticas de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Termos de Uso
          </Link>
        </div>
        <p className="text-xs mb-4">
          © {new Date().getFullYear()} Álbum de figurinhas da copa 2026. Todos os direitos reservados.
        </p>
        <p className="text-xs max-w-2xl">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sai do Facebook, a responsabilidade não é deles, mas do nosso site. Fazemos todos os esforços para indicar e mostrar claramente todas as provas do produto e usamos resultados reais.
        </p>
      </div>
    </footer>
  )
}
