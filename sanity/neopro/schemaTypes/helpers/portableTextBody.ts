import { defineField, defineArrayMember } from 'sanity';

/** Champ Portable Text reutilisable (paragraphes, listes, liens, gras, italique) */
export const portableTextBody = (
  name: string,
  title: string,
  options?: { required?: boolean; description?: string },
) =>
  defineField({
    name,
    title,
    type: 'array',
    ...(options?.description ? { description: options.description } : {}),
    ...(options?.required ? { validation: (rule: any) => rule.required() } : {}),
    of: [
      defineArrayMember({
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'Titre H3', value: 'h3' },
          { title: 'Titre H4', value: 'h4' },
        ],
        marks: {
          decorators: [
            { title: 'Gras', value: 'strong' },
            { title: 'Italique', value: 'em' },
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Lien',
              fields: [
                defineField({
                  name: 'href',
                  title: 'URL',
                  type: 'url',
                  validation: (rule) =>
                    rule.required().uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                }),
              ],
            },
          ],
        },
        lists: [
          { title: 'Liste à puces', value: 'bullet' },
          { title: 'Liste numérotée', value: 'number' },
        ],
      }),
    ],
  });
