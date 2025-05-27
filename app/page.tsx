import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                cantonese.ai
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">API Documentation</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* <Link href="/docs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Docs
              </Link> */}
              {/* <Link href="/api-reference" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                API Reference
              </Link> */}
              {/* <Link href="/examples" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Examples
              </Link> */}
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What's up, Developers?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            First time using cantonese.ai API or Large Language Model API? Go to the{" "}
            <Link href="/docs/introduction" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
              Introduction
            </Link>{" "}
            for a brief background on Cantonese AI and interacting with our services through API.
          </p>
        </div>

        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Getting Started
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Ready to build? Go to our{" "}
              <Link href="/docs/quickstart" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-semibold">
                Quickstart Guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quick Reference */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Reference
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/console" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Console</h3>
              <p className="text-gray-600 dark:text-gray-300">Create an API key to access the API</p>
            </Link>
            <Link href="/api-reference" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Endpoints</h3>
              <p className="text-gray-600 dark:text-gray-300">See parameters for each endpoint</p>
            </Link>
            <Link href="/integrations" className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Integrations</h3>
              <p className="text-gray-600 dark:text-gray-300">Use the cantonese.ai API in your application</p>
            </Link>
          </div>
        </section> */}

        {/* Featured Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Text-to-Speech</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transform written text into natural-sounding Cantonese speech with multiple voice options.
              </p>
              <Link href="/docs/text-to-speech" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Speech-to-Text</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convert Cantonese audio files into accurate written text with high precision.
              </p>
              <Link href="/docs/speech-to-text" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div>
       
            {/* <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Voice Cloning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate speech that mimics specific voices with advanced AI voice cloning technology.
              </p>
              <Link href="/docs/voice-cloning" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Translation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Translate text between Cantonese and other languages with context-aware AI.
              </p>
              <Link href="/docs/translation" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Chatbot</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interactive Cantonese chatbots that can respond to user queries with cultural context.
              </p>
              <Link href="/docs/chatbot" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Speech Editing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modify audio content with new words, phrases, or sentences seamlessly.
              </p>
              <Link href="/docs/speech-editing" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Learn more →
              </Link>
            </div> */}
          </div>
        </section>

        {/* Migration Section */}
        {/* <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Migrating from another AI provider?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            With just a few line changes to your code, you're on cantonese.ai! Our API endpoint is designed to be compatible with standard REST APIs and popular SDKs.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You might want to read our guide{" "}
            <Link href="/docs/migration" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
              Migration from Other Providers
            </Link>{" "}
            for more information and caveats.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Python SDK Example</h3>
            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import requests

# Set your API key
api_key = "your-cantonese-ai-api-key"
base_url = "https://api.cantonese.ai/v1"

# Make a request
response = requests.post(
    f"{base_url}/speech-to-text",
    headers={"Authorization": f"Bearer {api_key}"},
    files={"audio": open("audio.wav", "rb")}
)`}
            </pre>
          </div>
        </section> */}

        {/* Questions and Feedback */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions and feedback
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions or feedback, feel free to email us at{" "}
            <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
              admin@cantonese.ai
            </a>
            .
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Happy Building! 🚀
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 cantonese.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
