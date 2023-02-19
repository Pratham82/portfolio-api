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
      name: 'blogsPage',
      title: 'Blogs Page',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subTitle', type: 'string', title: 'SubTitle'},
      ],
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
