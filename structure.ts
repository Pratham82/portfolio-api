import type {StructureResolver} from 'sanity/structure'

/** Documents that must exist exactly once. The fixed IDs let the frontend assume one entry. */
export const singletons = [
  {type: 'homePage', title: 'Home Page'},
  {type: 'workExperiencePage', title: 'Experience'},
] as const

export const singletonTypes = new Set<string>(singletons.map(({type}) => type))

/** Types the v5 frontend no longer reads, kept until the blog migration is planned. */
const legacyTypes = [
  {type: 'aboutPage', title: 'About Page'},
  {type: 'post', title: 'Posts'},
  {type: 'blogsPage', title: 'Blogs Page'},
  {type: 'category', title: 'Categories'},
  {type: 'contactsPage', title: 'Contacts Page'},
  {type: 'photo', title: 'Photos'},
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(({type, title}) =>
        S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type)),
      ),
      S.divider(),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      S.listItem()
        .title('Legacy (not used by the site)')
        .id('legacy')
        .child(
          S.list()
            .title('Legacy')
            .items(legacyTypes.map(({type, title}) => S.documentTypeListItem(type).title(title))),
        ),
    ])
