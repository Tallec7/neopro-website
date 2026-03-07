import { defineField } from 'sanity';

/** Image avec hotspot + champ alt reutilisable */
export const imageWithAlt = (
  name: string,
  title: string,
  options?: { required?: boolean; description?: string },
) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [
      defineField({
        name: 'alt',
        title: 'Texte alternatif',
        type: 'string',
        description: "Décrivez l'image pour l'accessibilité et le SEO.",
      }),
    ],
    ...(options?.description ? { description: options.description } : {}),
    ...(options?.required ? { validation: (rule: any) => rule.required() } : {}),
  });
