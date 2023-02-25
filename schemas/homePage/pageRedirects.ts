import {defineType} from 'sanity'

export default defineType({
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
})
