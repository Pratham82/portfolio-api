import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'techStack',
      title: 'TechStack',
      type: 'techStack',
    }),

    defineField({
      name: 'contributions',
      title: 'Contributions',
      type: 'contributions',
    }),

    defineField({
      name: 'pageRedirects',
      title: 'Page Redirects',
      type: 'array',
      of: [{type: 'pageRedirect'}],
    }),
  ],

  preview: {
    select: {
      title: 'pageName',
      media: 'image',
    },
  },
})
