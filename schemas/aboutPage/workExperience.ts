import {defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'workExperience',
  type: 'array',
  of: [
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM-YYYY',
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM-YYYY',
      },
    },
  ],
})
