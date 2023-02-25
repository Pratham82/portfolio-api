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
      name: 'pageHeader',
      title: 'Page Header',
      type: 'reference',
      to: {type: 'pageHeader'},
    }),

    defineField({
      name: 'workExperience',
      title: 'Work Experience',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workExperience'}}],
    }),

    defineField({
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [{type: 'reference', to: {type: 'education'}}],
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        {name: 'resumeText', type: 'string', title: 'Resume Text'},
        {name: 'resumeLink', type: 'url', title: 'Resume Link'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
})
