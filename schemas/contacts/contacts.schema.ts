import {defineType} from 'sanity'

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

export {contactsLink}
