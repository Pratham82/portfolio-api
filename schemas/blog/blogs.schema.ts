import {defineField, defineType} from 'sanity'

const blogTitle = defineType({
  name: 'blogTitle',
  title: 'Blog Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'blogTitle', type: 'string', title: 'Blog Title'},
        {name: 'blogSubTitle', type: 'string', title: 'Blog SubTitle'},
      ],
    }),
  ],
})

export {blogTitle}
