export default function ApiReferencePage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>REST API</h1>
      
      <p>
        The cantonese.ai API is a robust, high-performance RESTful interface designed for 
        seamless integration into existing systems. It offers advanced AI capabilities 
        specifically tailored for the Cantonese language.
      </p>
      
      <p>
        The base URL for all routes is <code>https://api.cantonese.ai</code>.
      </p>

      <hr />

      <h2 id="authentication">Authentication</h2>
      
      <p>
        All API requests require authentication using an API key. Include your API key 
        in the Authorization header:
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`Authorization: Bearer YOUR_API_KEY`}
        </pre>
      </div>

      <hr />

      <h2 id="content-types">Content Types</h2>
      
      <p>
        The API accepts and returns data in JSON format for most endpoints. 
        For file uploads (audio, images), use <code>multipart/form-data</code>.
        For audio downloads, the response will be in the requested audio format.
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`Content-Type: application/json
Content-Type: multipart/form-data  # For file uploads`}
        </pre>
      </div>

      <hr />

      <h2 id="rate-limiting">Rate Limiting</h2>
      
      <p>
        API requests are rate limited to ensure fair usage and system stability. 
        Rate limits vary by endpoint and subscription tier.
      </p>
      
      <p>Rate limit information is included in response headers:</p>
      
      <ul>
        <li><code>X-RateLimit-Limit</code>: Maximum requests per time window</li>
        <li><code>X-RateLimit-Remaining</code>: Remaining requests in current window</li>
        <li><code>X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
      </ul>

      <hr />

      <h2 id="endpoints-overview">Endpoints Overview</h2>
      
      <div className="grid gap-6 not-prose">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Speech-to-Text
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Convert Cantonese audio files to accurate text transcriptions.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/speech-to-text</code>
          </div>
          <a href="/api-reference/speech-to-text" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Text-to-Speech
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Generate natural-sounding Cantonese speech from text input.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/text-to-speech</code>
          </div>
          <a href="/api-reference/text-to-speech" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Voice Cloning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Create custom voices and generate speech that mimics specific speakers.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/voice-cloning/create</code><br />
            <code className="text-sm">POST /v1/voice-cloning/synthesize</code>
          </div>
          <a href="/api-reference/voice-cloning" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Translation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Translate text between Cantonese and other languages with cultural context.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/translation</code>
          </div>
          <a href="/api-reference/translation" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Chatbot
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interactive AI assistants with Cantonese cultural understanding.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/chat/completions</code>
          </div>
          <a href="/api-reference/chatbot" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Speech Editing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Modify and enhance audio content with new words, phrases, or sentences.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <code className="text-sm">POST /v1/speech-editing</code>
          </div>
          <a href="/api-reference/speech-editing" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            View Documentation →
          </a>
        </div>
      </div>

      <hr />

      <h2 id="error-handling">Error Handling</h2>
      
      <p>
        The API uses conventional HTTP response codes to indicate the success or failure of requests.
        Error responses include a JSON object with details about the error.
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-red-400 text-sm overflow-x-auto">
{`{
  "error": {
    "code": "invalid_request",
    "message": "The request is missing required parameters",
    "type": "invalid_request_error",
    "param": "text"
  }
}`}
        </pre>
      </div>
      
      <p>
        For detailed error codes and handling, see our{" "}
        <a href="/api-reference/errors" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Error Reference
        </a>
        .
      </p>

      <hr />

      <h2 id="getting-started">Getting Started</h2>
      
      <p>
        Ready to start building? Check out our{" "}
        <a href="/docs/quickstart" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Quickstart Guide
        </a>{" "}
        for step-by-step instructions on making your first API request.
      </p>
      
      <p>
        For code examples and integration patterns, visit our{" "}
        <a href="/examples" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Examples
        </a>{" "}
        section.
      </p>
    </div>
  );
} 