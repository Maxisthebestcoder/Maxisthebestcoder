export default function MissionPage() {
    return (
      <main className="min-h-screen px-6 py-20 bg-blue-50 text-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
            Our Mission
          </h1>
  
          <p className="text-lg text-gray-700 mb-6">
            Trulynotes exists to empower students with tools built for real academic thinking — structured, social, and stress-free.
          </p>
  
          <p className="text-md text-gray-600 mb-8">
            Our goal is to replace outdated school portals and chaotic group chats with an intelligent, collaborative study experience. If you're in the IB program, you're already juggling complexity. We're here to simplify the way you engage with it.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="/mission/team"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Meet the Founders →
            </a>
  
            <a
              href="/"
              className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition"
            >
              ← Back to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }
  