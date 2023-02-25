import {defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'array',
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
})
