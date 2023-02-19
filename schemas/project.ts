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
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subTitle', type: 'string', title: 'SubTitle'},
        {name: 'mark', type: 'string', title: 'Mark'},
        {
          name: 'liveURL',
          type: 'object',
          title: 'Live URL',
          fields: [
            {
              name: 'linkText',
              type: 'string',
              title: 'Link Text',
              initialValue: 'live',
            },
            {name: 'link', type: 'url', title: 'Live URL'},
          ],
        },
        {
          name: 'githubURL',
          type: 'object',
          title: 'Github URL',
          fields: [
            {
              name: 'linkText',
              type: 'string',
              title: 'Link Text',
              initialValue: 'code',
            },
            {name: 'link', type: 'url', title: 'Github URL'},
          ],
        },
        {
          name: 'techStackUsed',
          type: 'array',
          title: 'Tech Stack Used',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'react', value: 'React'},
              {title: 'redux', value: 'Redux'},
              {title: 'typescript', value: 'TypeScript'},
              {title: 'css', value: 'CSS'},
              {title: 'scss', value: 'SCSS'},
              {title: 'contextAPI', value: 'Context API'},
              {title: 'ionic', value: 'Ionic'},
              {title: 'firebase', value: 'Firebase'},
              {title: 'nodeJS', value: 'Node.js'},
              {title: 'express', value: 'Express.js'},
              {title: 'html', value: 'HTML'},
              {title: 'js', value: 'JS'},
              {title: 'mongoDB', value: 'MongoDB'},
              {title: 'mongoose', value: 'Mongoose'},
              {title: 'pokeAPI', value: 'Poke API'},
              {title: 'unsplashAPI', value: 'Unslash API'},
              {title: 'tmdbAPI', value: 'TMDB API'},
              {title: 'openWeather', value: 'OpenWeather API'},
              {title: 'githubAPI', value: 'Github API'},
              {title: 'django', value: 'Django'},
              {title: 'docker', value: 'Docker'},
              {title: 'graphQL', value: 'GraphQL'},
              {title: 'gatsby', value: 'Gatsby'},
              {title: 'cli', value: 'CLI'},
            ],
          },
        },
        {
          name: 'projectCategory',
          type: 'string',
          title: 'Project Category',
          options: {
            list: [
              {title: 'react', value: 'React'},
              {title: 'vanillaJS', value: 'Vanilla JS'},
              {title: 'css', value: 'CSS'},
              {title: 'backend', value: 'Backend'},
              {title: 'neoGCamp', value: 'NeoG Camp'},
            ],
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'projectName',
    },
  },
})
