/**
 * One-off data migration for the Sanity 6 schema update. Safe to run more than once.
 *
 *   npm run migrate -- --dry-run   # print the planned mutations
 *   npm run migrate                # apply them
 *
 * 1. Moves the homePage and workExperiencePage documents to their fixed singleton IDs.
 * 2. Sets workExperiencePage.resume.resumeLink to the current resume (the site reads it from there now).
 * 3. Renames the "Unslash API" tech stack value to "Unsplash API" on projects.
 */
import {getCliClient} from 'sanity/cli'
import type {SanityDocument} from 'sanity'
import {singletons} from '../structure'

const dryRun = process.argv.includes('--dry-run')
const client = getCliClient({apiVersion: '2025-01-01'})
const tx = client.transaction()
let changes = 0
const moved = new Set<string>()

const plan = (message: string) => {
  changes++
  console.log(`${dryRun ? '[dry run] ' : ''}${message}`)
}

const stripSystemFields = ({_id, _rev, _createdAt, _updatedAt, ...rest}: SanityDocument) => rest

// 1. Singletons
for (const {type} of singletons) {
  const docs = await client.fetch<SanityDocument[]>(
    `*[_type == $type && !(_id in path("drafts.**"))] | order(_createdAt asc)`,
    {type},
  )
  if (docs.some((doc) => doc._id === type)) continue
  if (docs.length === 0) {
    console.warn(`No ${type} document found; skipping.`)
    continue
  }
  if (docs.length > 1) {
    console.warn(
      `Found ${docs.length} ${type} documents (${docs.map((d) => d._id).join(', ')}). ` +
        'Delete the extra ones in the Studio, then run this again.',
    )
    continue
  }
  const [doc] = docs
  plan(`Move ${type} ${doc._id} -> ${type}`)
  tx.createOrReplace({...stripSystemFields(doc), _id: type, _type: type})
  tx.delete(doc._id)
  tx.delete(`drafts.${doc._id}`)
  moved.add(type)
}

// 2. Resume link. The site used to read it from aboutPage; this is the current resume.
const RESUME_LINK =
  'https://drive.google.com/file/d/1uZaOcihbnmPX_OMSsAIOwnzx7Y5Dn07W/view?usp=drive_link'
const experience = await client.fetch<{_id: string; resume?: {resumeLink?: string}} | null>(
  `*[_type == "workExperiencePage" && !(_id in path("drafts.**"))] | order(select(_id == "workExperiencePage" => 0, 1) asc)[0]{_id, resume}`,
)
if (experience && experience.resume?.resumeLink !== RESUME_LINK) {
  plan(`Set workExperiencePage resume link to ${RESUME_LINK}`)
  // If step 1 moved it, it lives at the fixed ID by the time this patch runs.
  const id = moved.has('workExperiencePage') ? 'workExperiencePage' : experience._id
  tx.patch(id, (p) => p.set({'resume.resumeLink': RESUME_LINK}))
}

// 3. Tech stack typo
const projects = await client.fetch<{_id: string; techStackUsed: string[]}[]>(
  `*[_type == "project" && "Unslash API" in project.techStackUsed]{_id, "techStackUsed": project.techStackUsed}`,
)
for (const {_id, techStackUsed} of projects) {
  plan(`Rename "Unslash API" on ${_id}`)
  tx.patch(_id, (p) =>
    p.set({
      'project.techStackUsed': techStackUsed.map((t) => (t === 'Unslash API' ? 'Unsplash API' : t)),
    }),
  )
}

if (changes === 0) {
  console.log('Nothing to migrate.')
} else if (!dryRun) {
  await tx.commit()
  console.log(`Applied ${changes} change(s).`)
}
