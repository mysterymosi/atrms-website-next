import { defineQuery } from 'next-sanity'

const imageFields = /* groq */ `
  asset->{ _id, url, metadata { lqip, dimensions { width, height } } },
  alt,
  hotspot,
  crop
`

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage { ${imageFields} },
    author->{ name, role, image { ${imageFields} } }
  }
`)

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage { ${imageFields} },
    author->{ name, role, bio, image { ${imageFields} } },
    body[] {
      ...,
      _type == "image" => { ${imageFields}, caption }
    }
  }
`)

export const BLOG_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)].slug.current
`)
