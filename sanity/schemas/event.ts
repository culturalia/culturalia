import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Evento / Apresentação',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data e hora',
      type: 'datetime',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'venue', title: 'Local', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'city', title: 'Cidade', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 4 }),
    defineField({ name: 'ticketUrl', title: 'Link do ingresso', type: 'url' }),
    defineField({
      name: 'poster',
      title: 'Cartaz / Imagem',
      type: 'image',
      options: { hotspot: true },
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
    select: { title: 'title', date: 'date', venue: 'venue' },
    prepare({ title, date, venue }) {
      return {
        title,
        subtitle: `${new Date(date).toLocaleDateString('pt-BR')} — ${venue}`,
      };
    },
  },
});
