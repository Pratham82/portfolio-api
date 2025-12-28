// blog
import blockContent from './blog/blockContent'
import category from './blog/category'
import post from './blog/post'
import author from './blog/author'
import projects from './project/projects'
import blogs from './blog/blogs'

import contacts from './contacts'
import about from './aboutPage'
import homePage from './homePage'
import workExperiencePage from './workExperience'

// Schemas
import {contributions, pageRedirects, techStack, pageRedirect} from './homePage/homepage.schema'
import {education, institution, resume, workExperience} from './aboutPage/about.schema'
import {githubURL, liveURL, metaProject} from './project/project.schema'
import {contactsLink} from './contacts/contacts.schema'
import project from './project/project'
import photos from './photos/photos.schema'

export const schemaTypes = [
  // projects
  liveURL,
  project,
  projects,
  githubURL,

  // home page
  homePage,
  techStack,
  contributions,
  pageRedirects,
  pageRedirect,
  metaProject,

  // blogs
  post,
  blogs,
  author,
  category,
  blockContent,

  // contacts
  contacts,
  contactsLink,

  // about
  about,
  workExperiencePage,
  workExperience,
  education,
  resume,
  institution,

  //photos
  photos,
]
