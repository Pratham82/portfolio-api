import {defineField, defineType} from 'sanity'

const pageHeader = defineType({
  name: 'pageHeader',
  title: 'Page Header',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subTitle', type: 'string', title: 'SubTitle'},
      ],
    }),
  ],
})

export {pageHeader}
