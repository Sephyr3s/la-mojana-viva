import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Obra, ObraMetadata, TipoObra } from '@/types/obra';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getObrasByTipo(tipo: TipoObra): Promise<ObraMetadata[]> {
  const tipoDir = path.join(CONTENT_DIR, tipo === 'cancion' ? 'canciones' : `${tipo}s`);
  
  if (!fs.existsSync(tipoDir)) {
    return [];
  }

  const files = fs.readdirSync(tipoDir);
  const obras = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(tipoDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

          return {
          slug,
          tipo,
          titulo: data.titulo || slug,
          fecha: data.fecha || new Date().toISOString(),
          lugar: data.lugar,
          descripcion: data.descripcion,
          tags: Array.isArray(data.tags) ? data.tags : [], // ← ASEGURAR QUE SEA ARRAY
        } as ObraMetadata;
    });

  return obras.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
}

export async function getAllObras(): Promise<ObraMetadata[]> {
  const tipos: TipoObra[] = ['poema', 'cuento', 'cancion'];
  const allObras = await Promise.all(
    tipos.map(tipo => getObrasByTipo(tipo))
  );
  
  return allObras.flat().sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
}

export async function getObra(tipo: TipoObra, slug: string): Promise<Obra | null> {
  const tipoDir = tipo === 'cancion' ? 'canciones' : `${tipo}s`;
  const filePath = path.join(CONTENT_DIR, tipoDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    tipo,
    titulo: data.titulo || slug,
    contenido: content,
    fecha: data.fecha || new Date().toISOString(),
    lugar: data.lugar,
    audio: data.audio,
    imagen: data.imagen,
    tags: Array.isArray(data.tags) ? data.tags : [], // ← ASEGURAR QUE SEA ARRAY
    descripcion: data.descripcion,
  };
}