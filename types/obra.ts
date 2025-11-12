export type TipoObra = 'poema' | 'cuento' | 'cancion';

export interface Obra {
  slug: string;
  tipo: TipoObra;
  titulo: string;
  contenido: string;
  fecha: string;
  lugar?: string; 
  audio?: string;
  imagen?: string;
  tags: string[];
  descripcion?: string;
}

export interface ObraMetadata {
  slug: string;
  tipo: TipoObra;
  titulo: string;
  fecha: string;
  lugar?: string;
  descripcion?: string;
  tags: string[];
}

export interface LugarMojana {
  id: string;
  nombre: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  descripcion: string;
  obras: string[];
}