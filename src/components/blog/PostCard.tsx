import Link from 'next/link'

import { SanityImage } from '@/components/blog/SanityImage'
import { formatDate } from '@/lib/formatDate'
import type { BLOG_POSTS_QUERY_RESULT } from '../../../sanity.types'

type Post = BLOG_POSTS_QUERY_RESULT[number]

export function PostCard({
  post,
  featured = false,
}: {
  post: Post
  featured?: boolean
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-supporting transition duration-150 ease-out hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_18px_40px_-20px_rgba(11,42,99,0.35)]">
      <div className="aspect-[16/9] overflow-hidden bg-surface">
        {post.mainImage?.asset ? (
          <SanityImage
            value={post.mainImage}
            width={featured ? 1200 : 800}
            height={featured ? 675 : 450}
            sizes={
              featured
                ? '(min-width: 1024px) 1160px, 100vw'
                : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'
            }
            priority={featured}
            className="size-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="size-full bg-linear-to-br from-navy via-blue to-secondary opacity-90"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.publishedAt}
          className="font-mono text-[13px] text-blue"
        >
          {formatDate(post.publishedAt)}
        </time>
        <h3
          className={
            featured
              ? 'mt-3 font-display text-2xl font-bold tracking-[-0.01em] text-navy sm:text-[28px] sm:leading-tight'
              : 'mt-3 font-display text-xl font-bold tracking-[-0.01em] text-navy'
          }
        >
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline-none"
          >
            <span aria-hidden="true" className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[15px] text-muted">
          {post.excerpt}
        </p>
        {post.author ? (
          <div className="mt-auto flex items-center gap-3 pt-6">
            {post.author.image?.asset ? (
              <SanityImage
                value={post.author.image}
                width={64}
                height={64}
                className="size-8 rounded-full object-cover"
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
      </div>
    </article>
  )
}
