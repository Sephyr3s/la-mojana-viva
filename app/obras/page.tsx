import { getAllObras } from '@/lib/markdown';
import ObraCard from '@/components/obras/ObraCard';
import { TipoObra } from '@/types/obra';

export const metadata = {
  title: 'Todas las Obras',
  description: 'Explora la colección completa de poemas, cuentos y canciones de Ubaldo Munive Rodelo',
};

export default async function ObrasPage({
  searchParams,
}: {
  searchParams: { tipo?: TipoObra };
}) {
  const todasLasObras = await getAllObras();
  
  // Filtrar por tipo si existe el parámetro
  const obrasFiltradas = searchParams.tipo
    ? todasLasObras.filter((obra) => obra.tipo === searchParams.tipo)
    : todasLasObras;

  // Contar por tipo
  const conteos = {
    total: todasLasObras.length,
    poema: todasLasObras.filter((o) => o.tipo === 'poema').length,
    cuento: todasLasObras.filter((o) => o.tipo === 'cuento').length,
    cancion: todasLasObras.filter((o) => o.tipo === 'cancion').length,
  };

  const tipoActual = searchParams.tipo || 'todas';

  return (
    <div className="container-mojana py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="animate-fade-in">Archivo Literario</h1>
        <p className="text-xl text-mist">
          {conteos.total} obras preservadas para la posteridad
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="/obras"
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            tipoActual === 'todas'
              ? 'bg-ink text-white'
              : 'bg-white text-ink hover:bg-paper-dark'
          }`}
        >
          Todas ({conteos.total})
        </a>
        
        <a
          href="/obras?tipo=poema"
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            tipoActual === 'poema'
              ? 'bg-river text-white'
              : 'bg-white text-ink hover:bg-river-light hover:text-white'
          }`}
        >
          📜 Poemas ({conteos.poema})
        </a>
        <a
          href="/obras?tipo=cuento"
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            tipoActual === 'cuento'
              ? 'bg-earth text-white'
              : 'bg-white text-ink hover:bg-earth-light hover:text-white'
          }`}
        >
          📚 Cuentos ({conteos.cuento})
        </a>
        
        <a
          href="/obras?tipo=cancion"
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            tipoActual === 'cancion'
              ? 'bg-sunset text-white'
              : 'bg-white text-ink hover:bg-sunset-light hover:text-white'
          }`}
        >
          🎵 Canciones ({conteos.cancion})
        </a>
      </div>

      {/* Grid de obras */}
      {obrasFiltradas.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {obrasFiltradas.map((obra) => (
            <ObraCard key={obra.slug} obra={obra} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-mist">
            No hay obras de este tipo aún. Pronto habrá más contenido.
          </p>
        </div>
      )}
    </div>
  );
}

