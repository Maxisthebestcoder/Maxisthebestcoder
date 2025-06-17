'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Log In
        </button>
      </form>

      <div className="text-center">— or —</div>

      <button
        onClick={() => signIn('google')}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}