import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;

/**
 * Sanity client — `null` when projectId is not configured.
 * All pages handle this gracefully with fallback data.
 */
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
      useCdn: true,
    })
  : null;
