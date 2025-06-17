'use client';

import { useRef } from 'react';
import Link from 'next/link'

export default function Home() {
  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-10">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Trulynotes
        </h1>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <button onClick={() => scrollTo(missionRef)} className="hover:text-blue-600 transition">
            Our Mission
          </button>
          <button onClick={() => scrollTo(valuesRef)} className="hover:text-blue-600 transition">
            Our Values
          </button>
          <button onClick={() => scrollTo(featuresRef)} className="hover:text-blue-600 transition">
            Features
          </button>
        </nav>
        <Link
          href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded shadow text-sm hover:bg-blue-700 transition">
            Log In
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 pt-24 pb-32">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          The Platform Where IB Students Actually Win
        </h2>
        <p className="text-lg max-w-2xl text-gray-600 mb-8">
          Organize your syllabus, collaborate in private rooms, and own your knowledge ecosystem. Built for clarity, not clutter.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => scrollTo(missionRef)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200 shadow-md hover:scale-[1.02]"
          >
            Learn About the Mission
          </button>
          <button
            onClick={() => scrollTo(featuresRef)}
            className="bg-white border border-gray-300 px-6 py-2 rounded hover:border-blue-400 transition duration-200 hover:scale-[1.02]"
          >
            Explore Features
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="bg-white py-20 px-6 text-center scroll-mt-20">
        <h3 className="text-3xl font-bold mb-10">Collaboration & Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Class Tables",
              desc: "Organize notes by subject, share outlines, and build a complete syllabus map with your class.",
            },
            {
              title: "Private Study Rooms",
              desc: "Drop PDFs, chat, and study in private — just you and your trusted friends.",
            },
            {
              title: "Intelligent Tagging",
              desc: "Smart tagging helps you quickly find and group relevant documents across classes and years.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="hover:bg-blue-50 p-4 rounded transition duration-200 shadow hover:shadow-lg"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 px-6 bg-blue-50 text-center scroll-mt-20">
        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Trulynotes exists to give high-performing students the cognitive infrastructure they need to collaborate intelligently — without being held back by clunky tools or outdated systems.
        </p>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-6 text-center scroll-mt-20">
        <h3 className="text-3xl font-bold mb-6">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
          {[
            {
              title: "Clarity Over Clout",
              desc: "We value depth over noise. Great thinkers deserve tools that make their ideas easier to grow, not louder to shout.",
            },
            {
              title: "Collaboration Without Chaos",
              desc: "Shared workspaces should reduce stress, not increase it. Private, focused, and built for context.",
            },
            {
              title: "Own Your Mind",
              desc: "We don’t harvest your data. We build tools for autonomy — not addiction. Your brain, your platform.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="hover:shadow-lg p-4 rounded transition duration-200 bg-white"
            >
              <h4 className="text-lg font-semibold text-blue-600 mb-1">{title}</h4>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-10">
        © {new Date().getFullYear()} Trulynotes — built by students, for students.
      </footer>
    </main>
  );
}