import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'PageName',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    }),

    defineField({
      name: 'workExperience',
      type: 'array',
      title: 'Work Experience',
      of: [{type: 'workExperience'}],
    }),

    defineField({
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          type: 'education',
        },
      ],
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'resume',
    }),
  ],

  preview: {
    select: {
      title: 'pageName',
    },
  },
})
