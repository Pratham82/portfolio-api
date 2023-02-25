import {defineType} from 'sanity'

export default defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'object',
  fields: [
    {name: 'techStackTitle', type: 'string', title: 'Title'},
    {
      name: 'techStacks',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
