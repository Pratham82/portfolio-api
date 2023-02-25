import {defineType} from 'sanity'

export default defineType({
  name: 'pageHeader',
  title: 'Page Header',
  type: 'object',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'subTitle', type: 'string', title: 'SubTitle'},
  ],
})
