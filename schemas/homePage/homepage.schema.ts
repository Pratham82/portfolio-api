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

const techStack = defineType({
  name: 'techStack',
  title: 'TechStack',
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

const contributions = defineType({
  name: 'contributions',
  title: 'Contributions',
  type: 'object',
  fields: [
    {name: 'contributionsTitle', type: 'string', title: 'Title'},
    {name: 'contributionsLink', type: 'url', title: 'link'},
  ],
})

const pageRedirects = defineType({
  name: 'pageRedirects',
  title: 'Page Redirects',
  type: 'array',
  of: [
    {
      type: 'pageRedirect',
    },
  ],
})

const pageRedirect = defineType({
  name: 'pageRedirect',
  title: 'Page Redirect',
  type: 'object',
  fields: [
    {name: 'linkTitle', type: 'string', title: 'LinkTitle'},
    {name: 'link', type: 'string', title: 'linkURL'},
  ],
})

export {pageHeader, techStack, contributions, pageRedirects, pageRedirect}
