import {defineField, defineType} from 'sanity'

const workExperience = defineType({
  name: 'workExperience',
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
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})

const education = defineType({
  title: 'title',
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
})

const resume = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'object',
  fields: [
    {name: 'resumeText', type: 'string', title: 'Resume Text'},
    {name: 'resumeLink', type: 'url', title: 'Resume Link'},
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
