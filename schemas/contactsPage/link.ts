import {defineType} from 'sanity'

defineType

export default defineType({
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
})
