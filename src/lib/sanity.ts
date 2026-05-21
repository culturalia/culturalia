/**
 * Cliente Sanity para Culturalia.
 *
 * Como ativar:
 *   1. Criar projeto em https://sanity.io (gratuito)
 *   2. Preencher .env com PUBLIC_SANITY_PROJECT_ID e PUBLIC_SANITY_DATASET
 *   3. Subir o Studio em /sanity (ver pasta sanity/ na raiz)
 *   4. Importar este módulo nas pages que precisarem (ex: agenda.astro)
 */

import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const isSanityConfigured = Boolean(projectId);

export const sanity: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = sanity ? imageUrlBuilder(sanity) : null;
export const urlFor = (source: any) => (builder ? builder.image(source) : null);

/* ---------- Tipos ---------- */
export interface SanityEvent {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  venue: string;
  city: string;
  description?: string;
  ticketUrl?: string;
  poster?: any;
  color?: string;
}

export interface SanityShow {
  _id: string;
  title: string;
  slug: { current: string };
  tagline?: string;
  year?: string;
  venue?: string;
  duration?: string;
  description: string;
  images?: any[];
  color?: string;
}

/* ---------- Queries ---------- */
export async function getUpcomingEvents(): Promise<SanityEvent[]> {
  if (!sanity) return [];
  const now = new Date().toISOString();
  return sanity.fetch<SanityEvent[]>(
    `*[_type == "event" && date >= $now] | order(date asc) {
      _id, title, slug, date, venue, city, description, ticketUrl, poster, color
    }`,
    { now }
  );
}

export async function getShows(): Promise<SanityShow[]> {
  if (!sanity) return [];
  return sanity.fetch<SanityShow[]>(
    `*[_type == "show"] | order(featured desc, year desc) {
      _id, title, slug, tagline, year, venue, duration, description, images, color
    }`
  );
}
