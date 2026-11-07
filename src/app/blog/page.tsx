import { type Metadata } from 'next'

import { PostCard } from '@/components/blog/PostCard'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { sanityFetch } from '@/sanity/lib/fetch'
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on revenue administration, digital payments and public-sector technology from the Atlas team.',
}

export default async function BlogIndexPage() {
  const posts = await sanityFetch({
    query: BLOG_POSTS_QUERY,
    tags: ['post', 'author'],
  })
  const [featured, ...rest] = posts

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <Container>
          <div className="mb-12 max-w-[620px]">
            <p className="mb-3.5 font-mono text-[13px] text-blue">ATLAS BLOG</p>
            <h1 className="font-display text-[32px] font-bold tracking-[-0.01em] text-navy sm:text-5xl">
              Insights for a digital government.
            </h1>
            <p className="mt-3.5 text-[16.5px] text-muted">
              Briefings on revenue administration, payments and public-sector
              technology.
            </p>
          </div>

          {featured ? (
            <>
              <div className="grid">
                <PostCard post={featured} featured />
              </div>
              {rest.length ? (
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {rest.map((post) => (
                    <li key={post._id} className="grid">
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
              <p className="font-display text-xl font-bold text-navy">
                No posts yet
              </p>
              <p className="mt-2 text-muted">
                Check back soon for our first articles.
              </p>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}
