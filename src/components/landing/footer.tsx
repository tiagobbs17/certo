import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-muted text-muted-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex gap-4 mb-4">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Políticas de Privacidad
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Términos de Uso
          </Link>
        </div>
        <p className="text-xs mb-4">
          © {new Date().getFullYear()} Mini donuts caseros. Todos los derechos reservados.
        </p>
        <p className="text-xs max-w-2xl">
          Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Una vez que sales de Facebook, la responsabilidad no es de ellos sino de nuestro sitio. Hacemos todo lo posible para indicar y mostrar claramente todas las pruebas del producto y utilizamos resultados reales.
        </p>
      </div>
    </footer>
  )
}
