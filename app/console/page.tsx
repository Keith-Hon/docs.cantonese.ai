export default function ConsolePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">
                cantonese.ai
              </a>
              <span className="text-sm text-gray-500">API Console</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/docs" className="text-gray-600 hover:text-blue-600">
                Docs
              </a>
              <a href="/api-reference" className="text-gray-600 hover:text-blue-600">
                API Reference
              </a>
              <a href="/examples" className="text-gray-600 hover:text-blue-600">
                Examples
              </a>
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            API Console
          </h1>
          <p className="text-xl text-gray-600">
            Manage your API keys and monitor usage
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Console Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            We're building a comprehensive API console where you'll be able to:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">🔑 API Key Management</h3>
              <p className="text-sm text-gray-600">Generate, rotate, and manage your API keys securely</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Usage Analytics</h3>
              <p className="text-sm text-gray-600">Monitor your API usage, costs, and performance metrics</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">🧪 API Testing</h3>
              <p className="text-sm text-gray-600">Test API endpoints directly from the console</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">💳 Billing & Plans</h3>
              <p className="text-sm text-gray-600">Manage your subscription and billing information</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              In the meantime, you can get started with our API by following the{" "}
              <a href="/docs/quickstart" className="text-blue-600 hover:text-blue-800 underline">
                Quickstart Guide
              </a>
              .
            </p>
            <p className="text-sm text-gray-500">
              Want to be notified when the console is ready?{" "}
              <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 