import { NextRequest, NextResponse } from 'next/server';
import { inferBias } from '@/ml/inference';

/**
 * This API route executes the bias inference on incoming text. It is
 * configured to run at the edge, minimising latency for client requests.
 */
export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }
  try {
    const body = await req.json();
    const { text } = body;
    const result = await inferBias(text);
    return NextResponse.json(result);
  } catch (err: any) {
    return new NextResponse(err.message || 'Internal Error', { status: 500 });
  }
}