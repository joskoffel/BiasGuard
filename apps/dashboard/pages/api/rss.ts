import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

/**
 * Fetches an RSS feed from a remote URL. The feed is returned as plain
 * text in a JSON wrapper. This allows the front‑end to parse it
 * without encountering CORS restrictions. Consider caching the result
 * using a KV store or revalidation strategy to reduce repeated
 * requests.
 */
export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const feedUrl = searchParams.get('url');
  if (!feedUrl) {
    return new NextResponse('Missing url parameter', { status: 400 });
  }
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      return new NextResponse(`Error fetching feed: ${response.status}`, { status: 502 });
    }
    const feed = await response.text();
    return NextResponse.json({ feed });
  } catch (err: any) {
    return new NextResponse(err.message || 'Internal Error', { status: 500 });
  }
}