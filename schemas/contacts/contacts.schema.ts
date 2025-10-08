import {defineType} from 'sanity'

const links = defineType({
  name: 'link',
  title: 'Link',
  type: 'array',
  of: [
    {
      type: 'link',
    },
  ],
})

const link = defineType({
  title: 'link',
  name: 'Links',
  type: 'object',
  fields: [
    {
      name: 'socialLink',
      title: 'Social Link',
      type: 'string',
    },
    {
      name: 'link1',
      title: 'Link1',
      type: 'string',
    },
  ],
})

const contactsLink = defineType({
  name: 'contactsLink',
  title: 'Contacts Link',
  type: 'object',

  fields: [
    {
      name: 'socialLink',
      title: 'Social Link',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
})

export {links, link, contactsLink}
// export {link}
