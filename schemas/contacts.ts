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
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          title: 'link',
          type: 'object',
          fields: [
            {
              name: 'socialLink',
              title: 'Social Link',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
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
