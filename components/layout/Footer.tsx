export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-white mt-auto">
      <div className="container-mojana py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna 1: Sobre el proyecto */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-sunset">
              La Mojana Viva
            </h3>
            <p className="text-sm leading-relaxed text-paper-light">
              Archivo digital dedicado a preservar la obra literaria y musical 
              de Ubaldo Munive Rodelo, poeta y cuentista de La Mojana.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-sunset">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/obras" className="text-paper-light hover:text-sunset transition-colors">
                  Todas las obras
                </a>
              </li>
              <li>
                <a href="/autor" className="text-paper-light hover:text-sunset transition-colors">
                  Sobre el autor
                </a>
              </li>
              <li>
                <a href="/mapa" className="text-paper-light hover:text-sunset transition-colors">
                  Mapa cultural
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Créditos */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-sunset">
              Contacto
            </h3>
            <p className="text-sm text-paper-light mb-4">
              Para más información sobre la obra de Ubaldo Munive Rodelo.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-sunset/30 mt-8 pt-6 text-center">
          <p className="text-sm text-paper-light">
            © {currentYear} La Mojana Viva. Preservando la memoria cultural de La Mojana.
          </p>
          <p className="text-xs text-mist-light mt-2">
            Desarrollado con ❤️ en honor a Ubaldo Munive Rodelo
          </p>
        </div>
      </div>
    </footer>
  );
}