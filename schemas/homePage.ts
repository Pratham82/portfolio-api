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
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subTitle', type: 'string', title: 'SubTitle'},
      ],
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
      type: 'object',
      fields: [
        {name: 'techStackTitle', type: 'string', title: 'Title'},
        {
          name: 'techStacks',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),

    defineField({
      name: 'contributions',
      title: 'Contributions',
      type: 'object',
      fields: [
        {name: 'contributionsTitle', type: 'string', title: 'Title'},
        {name: 'contributionsLink', type: 'url', title: 'link'},
      ],
    }),

    defineField({
      name: 'pageRedirects',
      title: 'Page Redirects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'linkTitle', type: 'string', title: 'LinkTitle'},
            {name: 'link', type: 'string', title: 'linkURL'},
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'pageName',
      media: 'image',
    },
  },
})
