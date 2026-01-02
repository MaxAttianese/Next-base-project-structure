import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { locale } = await req.json();
  const response = NextResponse.json({ success: true });
  response.cookies.set('locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return response;
}
