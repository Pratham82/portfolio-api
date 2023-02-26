import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogsPage',
  title: 'Blogs Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'PageName',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Blogs Page Title',
      type: 'string',
    }),

    defineField({
      name: 'subTitle',
      title: 'Blogs Page Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'blog',
      type: 'array',
      title: 'Blogs',
      of: [
        {
          type: 'reference',
          to: {type: 'post'},
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
})
