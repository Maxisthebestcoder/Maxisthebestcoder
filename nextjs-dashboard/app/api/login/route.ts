import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Dummy credentials for now
  if (email === 'admin@example.com' && password === 'password123') {
    return NextResponse.json({ message: 'Logged in' }, { status: 200 });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}