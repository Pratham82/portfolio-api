import {defineType} from 'sanity'

export default defineType({
  name: 'contributions',
  title: 'Contributions',
  type: 'object',
  fields: [
    {name: 'contributionsTitle', type: 'string', title: 'Title'},
    {name: 'contributionsLink', type: 'url', title: 'link'},
  ],
})
