export default function MissionTeamPage() {
    return (
      <main className="min-h-screen px-6 py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
            Meet the Founders
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Trulynotes was born from late-night study sessions, broken school portals, and the belief that the smartest students deserve better tools.
          </p>
  
          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
            {/* Founder 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Max</h2>
              <p className="text-sm text-gray-700 mb-2">
                Max leads the front-end vision of Trulynotes. Obsessed with design systems and the IB curriculum, he's the reason everything you click feels natural.
              </p>
              <p className="text-xs text-gray-500">"If it's not intuitive, it’s not finished."</p>
            </div>
  
            {/* Founder 2 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Beckett</h2>
              <p className="text-sm text-gray-700 mb-2">
                Beckett is the architect of the backend and Firebase brain behind Trulynotes. He turns wild ideas into real-time rooms and perfectly synced data.
              </p>
              <p className="text-xs text-gray-500">"Every keystroke should be powerfully simple."</p>
            </div>
          </div>
  
          {/* Philosophy */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why We Built This</h3>
            <p className="text-md text-gray-700">
              We were tired of copying notes into Google Docs and chasing PDFs through WhatsApp. Trulynotes is the tool we wished existed: private, powerful, structured for how real IB students think.
            </p>
          </div>
  
          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/mission"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              ← Back to Our Mission
            </a>
            <a
              href="/features"
              className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Explore Features →
            </a>
          </div>
        </div>
      </main>
    );
  }
  