import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'metaProject',
    }),
  ],

  preview: {
    select: {
      title: 'projectName',
    },
  },
})
