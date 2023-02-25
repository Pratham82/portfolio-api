import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageName',
      title: 'PageName',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'workExperience',
      type: 'array',
      title: 'Work Experience',
      of: [
        {
          title: 'title',
          type: 'object',
          fields: [
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
        },
      ],
    }),

    defineField({
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          title: 'title',
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'object',
              fields: [
                {
                  name: 'institution',
                  title: 'Institution',
                  type: 'string',
                  initialValue: 'Mumbai University',
                },
                {
                  name: 'startYear',
                  title: 'Start Year',
                  type: 'date',
                  options: {dateFormat: 'YYYY'},
                },
                {
                  name: 'endYear',
                  title: 'End Year',
                  type: 'date',
                  options: {dateFormat: 'YYYY'},
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        {name: 'resumeText', type: 'string', title: 'Resume Text'},
        {name: 'resumeLink', type: 'url', title: 'Resume Link'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
})
