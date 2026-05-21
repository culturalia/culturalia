import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'show',
  title: 'Espetáculo / Produção',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'tagline', title: 'Tipo (musical, dança, etc.)', type: 'string' }),
    defineField({ name: 'year', title: 'Ano', type: 'string' }),
    defineField({ name: 'venue', title: 'Local / Teatro', type: 'string' }),
    defineField({ name: 'duration', title: 'Duração', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 6,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'images',
      title: 'Galeria de imagens',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'featured',
      title: 'Destacar?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'color',
      title: 'Cor de destaque',
      type: 'string',
      options: {
        list: [
          { title: 'Magenta', value: 'magenta' },
          { title: 'Royal', value: 'royal' },
          { title: 'Mustard', value: 'mustard' },
          { title: 'Orange', value: 'orange' },
          { title: 'Cyan', value: 'cyan' },
        ],
      },
      initialValue: 'magenta',
    }),
  ],
  preview: {
    select: { title: 'title', year: 'year' },
    prepare({ title, year }) {
      return { title, subtitle: year || '—' };
    },
  },
});
