import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactsPage',
  title: 'Contacts Page',
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
      name: 'contactsLinks',
      type: 'array',
      title: 'Contacts Links',
      of: [
        {
          type: 'contactsLink',
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
