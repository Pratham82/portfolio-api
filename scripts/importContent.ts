/**
 * One-off import of the site's Now and Links MDX files into Sanity. Safe to run more than once.
 *
 *   npm run import-content -- --dry-run   # print the planned mutations
 *   npm run import-content                # apply them
 *
 * Reads ../portfolio-v5/content/now.mdx and ../portfolio-v5/content/links/*.mdx.
 */
import fs from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'
import {parse} from 'yaml'

const dryRun = process.argv.includes('--dry-run')
const client = getCliClient({apiVersion: '2025-01-01'})
const tx = client.transaction()
const CONTENT = path.resolve(process.cwd(), '../portfolio-v5/content')

const readMdx = (file: string) => {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(fs.readFileSync(file, 'utf-8'))
  if (!match) throw new Error(`${file} has no frontmatter`)
  // YAML 1.2 keeps 2025-01-01 as a string, which is what a Sanity date field wants.
  return {data: (parse(match[1]) ?? {}) as Record<string, unknown>, body: match[2].trim()}
}

const asDate = (value: unknown) => (value ? String(value).slice(0, 10) : undefined)

const asCategories = (value: unknown): string[] =>
  Array.isArray(value) ? value.map(String) : value ? [String(value)] : []

const plan = (doc: {_id: string; _type: string; [key: string]: unknown}) => {
  console.log(`${dryRun ? '[dry run] ' : ''}createOrReplace ${doc._id}`)
  if (dryRun) console.log(JSON.stringify(doc, null, 2))
  tx.createOrReplace(doc)
}

const now = readMdx(path.join(CONTENT, 'now.mdx'))
plan({_id: 'nowPage', _type: 'nowPage', updated: asDate(now.data.updated), body: now.body})

const linksDir = path.join(CONTENT, 'links')
for (const file of fs.readdirSync(linksDir).filter((name) => /\.mdx?$/.test(name))) {
  const slug = file.replace(/\.mdx?$/, '')
  const {data, body} = readMdx(path.join(linksDir, file))
  plan({
    _id: `link-${slug}`,
    _type: 'link',
    title: String(data.title ?? slug),
    slug: {_type: 'slug', current: slug},
    description: data.description ? String(data.description) : undefined,
    category: asCategories(data.category),
    url: data.url ? String(data.url) : undefined,
    date: asDate(data.date) ?? new Date().toISOString().slice(0, 10),
    body,
  })
}

if (!dryRun) {
  await tx.commit()
  console.log('Imported.')
}
