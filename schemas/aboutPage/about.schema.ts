import {defineType} from 'sanity'

const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
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
      description:
        'Must match the company name in the resume PDF; the site uses it to find the logo.',
      validation: (rule) => rule.required(),
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
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Work Description',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'companyName', subtitle: 'position', media: 'companyLogo'},
  },
})

const education = defineType({
  title: 'Education',
  name: 'education',
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
      type: 'institution',
    },
  ],
  preview: {
    select: {title: 'degree', subtitle: 'institution.institution'},
  },
})

const resume = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'object',
  fields: [
    {name: 'resumeText', type: 'string', title: 'Resume Text'},
    {
      name: 'resumeLink',
      type: 'url',
      title: 'Resume Link',
      description: 'Public link to the resume PDF. The site parses its Experience section.',
      validation: (rule) => rule.uri({scheme: ['https']}),
    },
  ],
})

const institution = defineType({
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
})

export {workExperience, education, resume, institution}
