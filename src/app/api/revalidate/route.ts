import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = { tags?: (string | null)[] }

/**
 * Called by a Sanity GROQ-powered webhook when posts or authors change.
 * Webhook projection: { "tags": [_type, _type + ":" + slug.current] }
 */
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      return new Response('Missing SANITY_REVALIDATE_SECRET', { status: 500 })
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      secret,
      true, // wait briefly so the Sanity CDN has the new content
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    const tags = (body?.tags ?? []).filter(
      (tag): tag is string => typeof tag === 'string' && tag.length > 0,
    )
    if (!tags.length) {
      return new Response('Missing tags', { status: 400 })
    }

    tags.forEach((tag) => revalidateTag(tag))
    return NextResponse.json({ revalidated: tags, now: Date.now() })
  } catch (err) {
    console.error(err)
    return new Response((err as Error).message, { status: 500 })
  }
}
