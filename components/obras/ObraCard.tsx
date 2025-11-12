	import Link from 'next/link';
import { ObraMetadata } from '@/types/obra';

interface ObraCardProps {
  obra: ObraMetadata;
}

export default function ObraCard({ obra }: ObraCardProps) {
  // Mapear tipo a emoji y color
  const tipoConfig = {
    poema: { emoji: '📜', color: 'bg-river', label: 'Poema' },
    cuento: { emoji: '📖', color: 'bg-earth', label: 'Cuento' },
    cancion: { emoji: '🎵', color: 'bg-sunset', label: 'Canción' },
  };

  const config = tipoConfig[obra.tipo];
  const fechaFormateada = new Date(obra.fecha).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      href={`/obras/${obra.slug}`}
      className="obra-card block p-6 hover:no-underline group"
    >
      {/* Badge de tipo */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`${config.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
          {config.emoji} {config.label}
        </span>
        {obra.lugar && (
          <span className="text-mist text-xs">
            📍 {obra.lugar}
          </span>
        )}
      </div>

      {/* Título */}
      <h3 className="text-2xl font-serif font-bold text-ink group-hover:text-river transition-colors mb-2">
        {obra.titulo}
      </h3>

      {/* Descripción */}
      {obra.descripcion && (
        <p className="text-mist-light line-clamp-2 mb-3">
          {obra.descripcion}
        </p>
      )}

      {/* Metadata inferior */}
<div className="flex items-center justify-between text-sm text-mist mt-4 pt-4 border-t border-mist-light">
        <span>{fechaFormateada}</span>
        {obra.tags && Array.isArray(obra.tags) && obra.tags.length > 0 && (
          <div className="flex gap-2">
            {obra.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-earth">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>  
    </Link>
  );
}	