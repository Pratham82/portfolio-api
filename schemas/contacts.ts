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
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subTitle', type: 'string', title: 'SubTitle'},
      ],
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
