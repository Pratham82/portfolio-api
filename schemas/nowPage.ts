import {defineField, defineType} from 'sanity'

/** The /now page text. Rendered as MDX by the site, so MDX comments work. */
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
  ],

  preview: {
    select: {subtitle: 'updated'},
    prepare: ({subtitle}) => ({title: 'Now', subtitle}),
  },
})
