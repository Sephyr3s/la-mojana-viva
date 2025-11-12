import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-sunset/30 shadow-sm sticky top-0 z-50">
      <div className="container-mojana">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Título */}
          <Link href="/" className="no-underline">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-river mb-0">
              La Mojana Viva
            </h1>
            <p className="text-sm text-mist mt-1">
              Legado de Ubaldo Munive Rodelo
            </p>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex gap-8">
            <Link 
              href="/" 
              className="text-ink hover:text-river transition-colors font-medium no-underline"
            >
              Inicio
            </Link>
            <Link 
              href="/obras" 
              className="text-ink hover:text-river transition-colors font-medium no-underline"
            >
              Obras
            </Link>
            <Link 
              href="/autor" 
              className="text-ink hover:text-river transition-colors font-medium no-underline"
            >
              El Autor
            </Link>
            <Link 
              href="/mapa" 
              className="text-ink hover:text-river transition-colors font-medium no-underline"
            >
              Mapa Cultural
            </Link>
          </nav>

          {/* Menú móvil (por ahora solo placeholder) */}
          <button className="md:hidden text-river">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}