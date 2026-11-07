import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PortableTextBody } from '@/components/blog/PortableTextBody'
import { SanityImage } from '@/components/blog/SanityImage'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { formatDate } from '@/lib/formatDate'
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/image'
import { BLOG_POST_QUERY, BLOG_POST_SLUGS_QUERY } from '@/sanity/lib/queries'

type Props = { params: Promise<{ slug: string }> }

function getPost(slug: string) {
  return sanityFetch({
    query: BLOG_POST_QUERY,
    params: { slug },
    tags: [`post:${slug}`, 'author'],
  })
}

export async function generateStaticParams() {
  const slugs = await client
    .withConfig({ useCdn: false })
    .fetch(BLOG_POST_SLUGS_QUERY)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const ogImage = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url()
    : undefined

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <Header />
      <main className="flex-1 pt-12 pb-24 sm:pt-16 sm:pb-32">
        <Container>
          <article className="mx-auto max-w-[720px]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/80 hover:text-blue"
            >
              <span aria-hidden="true">←</span> All posts
            </Link>

            <header className="mt-8">
              <time
                dateTime={post.publishedAt}
                className="font-mono text-[13px] text-blue"
              >
                {formatDate(post.publishedAt)}
              </time>
              <h1 className="mt-3 font-display text-[32px] leading-[1.1] font-bold tracking-[-0.015em] text-navy sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-muted">{post.excerpt}</p>

              {post.author ? (
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  {post.author.image?.asset ? (
                    <SanityImage
                      value={post.author.image}
                      width={88}
                      height={88}
                      className="size-11 rounded-full object-cover"
                    />
                  ) : null}
                  <div className="text-sm">
                    <p className="font-semibold text-ink">{post.author.name}</p>
                    {post.author.role ? (
                      <p className="text-muted">{post.author.role}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </header>
          </article>

          {post.mainImage?.asset ? (
            <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl bg-surface">
              <SanityImage
                value={post.mainImage}
                width={1600}
                height={900}
                sizes="(min-width: 1120px) 1040px, 100vw"
                priority
                className="w-full"
              />
            </div>
          ) : null}

          <div className="mx-auto max-w-[720px]">
            {post.body ? <PortableTextBody value={post.body} /> : null}

            {post.author?.bio ? (
              <aside className="mt-16 rounded-2xl border border-border bg-surface p-6">
                <p className="font-mono text-[13px] text-blue">
                  ABOUT THE AUTHOR
                </p>
                <p className="mt-2 font-display text-lg font-bold text-navy">
                  {post.author.name}
                </p>
                <p className="mt-2 text-[15px] text-muted">{post.author.bio}</p>
              </aside>
            ) : null}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
