export default function ConsolePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                cantonese.ai
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-400">API Console</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/docs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Docs
              </a>
              <a href="/api-reference" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                API Reference
              </a>
              <a href="/examples" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Examples
              </a>
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            API Console
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage your API keys and monitor usage
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Console Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're building a comprehensive API console where you'll be able to:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔑 API Key Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Generate, rotate, and manage your API keys securely</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Usage Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Monitor your API usage, costs, and performance metrics</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🧪 API Testing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Test API endpoints directly from the console</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💳 Billing & Plans</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Manage your subscription and billing information</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              For now, please contact us to get your API key:
            </p>
            <a 
              href="mailto:admin@cantonese.ai?subject=API Key Request" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Request API Key
            </a>
          </div>
        </div>

        {/* Temporary Instructions */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Getting Started Without Console
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Email us at <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">admin@cantonese.ai</a> to request an API key</li>
            <li>Include your use case and expected usage volume</li>
            <li>We'll provide you with an API key and usage instructions</li>
            <li>Start building with our <a href="/docs/quickstart" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Quickstart Guide</a></li>
          </ol>
        </div>
      </main>
    </div>
  );
} 