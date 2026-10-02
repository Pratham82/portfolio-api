import {defineField, defineType} from 'sanity'

/** The /now page text. Rendered as MDX by the site, so MDX comments work. */
/** One of the Letterboxd top 4 shown on /now. Named so GraphQL can type it. */
export const favouriteFilm = defineType({
  name: 'favouriteFilm',
  title: 'Favourite film',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Release year',
      description: 'Picks the right film on TMDB when titles clash.',
      type: 'number',
      validation: (rule) => rule.integer().min(1880).max(2100),
    }),
    defineField({
      name: 'letterboxdUrl',
      title: 'Letterboxd URL',
      description: 'e.g. https://letterboxd.com/film/parasite-2019/',
      type: 'url',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year'},
    prepare: ({title, subtitle}) => ({title, subtitle: subtitle ? String(subtitle) : undefined}),
  },
})

export default defineType({
  name: 'nowPage',
  title: 'Now',
  type: 'document',

  fields: [
    defineField({
      name: 'updated',
      title: 'Updated',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'favouriteFilms',
      title: 'Favourite films',
      description: 'Your Letterboxd top 4. Posters are looked up on TMDB by title and year.',
      type: 'array',
      of: [{type: 'favouriteFilm'}],
      validation: (rule) => rule.max(4),
    }),
  ],

  preview: {
    select: {subtitle: 'updated'},
    prepare: ({subtitle}) => ({title: 'Now', subtitle}),
  },
})
