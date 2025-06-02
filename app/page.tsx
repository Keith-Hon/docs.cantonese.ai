import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600">
                cantonese.ai
              </div>
              <span className="text-sm text-gray-500">API Documentation</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What's up, Developers?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            First time using cantonese.ai API or Large Language Model API? Go to the{" "}
            <Link href="/docs/introduction" className="text-blue-600 hover:text-blue-800 underline">
              Introduction
            </Link>{" "}
            for a brief background on Cantonese AI and interacting with our services through API.
          </p>
        </div>

        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Getting Started
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to build? Go to our{" "}
              <Link href="/docs/quickstart" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                Quickstart Guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Reference
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/docs" className="group">
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-600">
                  Comprehensive guides and tutorials to help you get started with our APIs.
                </p>
              </div>
            </Link>

            <Link href="/api-reference" className="group">
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API Reference</h3>
                <p className="text-gray-600">
                  Complete reference for all endpoints, parameters, and response formats.
                </p>
              </div>
            </Link>

            <Link href="/examples" className="group">
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Examples</h3>
                <p className="text-gray-600">
                  Code examples and integration patterns for popular frameworks.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Text-to-Speech</h3>
              <p className="text-gray-600 mb-4">
                Transform written text into natural-sounding Cantonese speech with multiple voice options.
              </p>
              <Link href="/docs/text-to-speech" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speech-to-Text</h3>
              <p className="text-gray-600 mb-4">
                Convert Cantonese audio files into accurate written text with high precision.
              </p>
              <Link href="/docs/speech-to-text" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>
       
            {/* <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Cloning</h3>
              <p className="text-gray-600 mb-4">
                Generate speech that mimics specific voices with advanced AI voice cloning technology.
              </p>
              <Link href="/docs/voice-cloning" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Translation</h3>
              <p className="text-gray-600 mb-4">
                Translate text between Cantonese and other languages with context-aware AI.
              </p>
              <Link href="/docs/translation" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chatbot</h3>
              <p className="text-gray-600 mb-4">
                Interactive Cantonese chatbots that can respond to user queries with cultural context.
              </p>
              <Link href="/docs/chatbot" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speech Editing</h3>
              <p className="text-gray-600 mb-4">
                Modify audio content with new words, phrases, or sentences seamlessly.
              </p>
              <Link href="/docs/speech-editing" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </Link>
            </div> */}

            {/* Placeholder for third service */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">More Services</h3>
                <p className="text-gray-500 text-sm">
                  Additional AI services coming soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Simple, Powerful API
            </h2>
            <p className="text-gray-600 mb-6">
              Our RESTful API makes it easy to integrate Cantonese AI capabilities into your applications. 
              Get started with just a few lines of code.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-green-400 overflow-x-auto">
{`curl -X POST "https://api.cantonese.ai/v1/text-to-speech" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "你好世界",
    "voice": "female-1",
    "format": "mp3"
  }'`}
              </pre>
            </div>
          </div>
        </section>

        {/* Questions and feedback */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions and feedback
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or feedback, feel free to email us at{" "}
            <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 underline">
              admin@cantonese.ai
            </a>
            .
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Happy Building! 🚀
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 cantonese.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
