import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'This API loves CSE3CWA-CSE5007' });
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  return NextResponse.json({ message: `ID received: ${id}` });
}

