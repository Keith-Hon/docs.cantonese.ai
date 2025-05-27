export default function QuickstartPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Quickstart Guide</h1>
      
      <p>
        This guide will help you make your first API request to cantonese.ai. 
        We'll walk through authentication, making a simple request, and understanding the response.
      </p>

      <h2 id="getting-your-api-key">Getting Your API Key</h2>
      
      <p>
        Before you can make requests to the cantonese.ai API, you'll need to obtain an API key:
      </p>
      
      <ol>
        <li>Visit the <a href="/console" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">API Console</a></li>
        <li>Sign up for an account or log in if you already have one</li>
        <li>Navigate to the API Keys section</li>
        <li>Generate a new API key</li>
        <li>Copy and securely store your API key</li>
      </ol>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 not-prose">
        <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-0">
          <strong>Important:</strong> Keep your API key secure and never expose it in client-side code. 
          Store it as an environment variable in your application.
        </p>
      </div>

      <h2 id="setting-up-your-environment">Setting Up Your Environment</h2>
      
      <p>Export your API key as an environment variable:</p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`export CANTONESE_AI_API_KEY="your-api-key-here"`}
        </pre>
      </div>

      <h2 id="making-your-first-request">Making Your First Request</h2>
      
      <p>
        Let's test out the API using <code>curl</code> to make a text-to-speech request:
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`curl https://api.cantonese.ai/v1/text-to-speech \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $CANTONESE_AI_API_KEY" \\
  -d '{
    "text": "你好世界",
    "voice": "default",
    "language": "cantonese",
    "format": "mp3"
  }' \\
  --output audio.mp3`}
        </pre>
      </div>

      <h2 id="using-python">Using Python</h2>
      
      <p>Here's how to make the same request using Python with the <code>requests</code> library:</p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-blue-400 text-sm overflow-x-auto">
{`import os
import requests

# Get your API key from environment variable
api_key = os.getenv("CANTONESE_AI_API_KEY")
base_url = "https://api.cantonese.ai/v1"

# Make a text-to-speech request
response = requests.post(
    f"{base_url}/text-to-speech",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json={
        "text": "你好世界",
        "voice": "default",
        "language": "cantonese",
        "format": "mp3"
    }
)

if response.status_code == 200:
    with open("audio.mp3", "wb") as f:
        f.write(response.content)
    print("Audio file saved as audio.mp3")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
        </pre>
      </div>

      <h2 id="using-javascript">Using JavaScript (Node.js)</h2>
      
      <p>Here's how to make the request using JavaScript:</p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-yellow-400 text-sm overflow-x-auto">
{`const fs = require('fs');

const apiKey = process.env.CANTONESE_AI_API_KEY;
const baseUrl = "https://api.cantonese.ai/v1";

async function textToSpeech() {
  try {
    const response = await fetch(\`\${baseUrl}/text-to-speech\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: "你好世界",
        voice: "default",
        language: "cantonese",
        format: "mp3"
      })
    });

    if (response.ok) {
      const audioBuffer = await response.arrayBuffer();
      fs.writeFileSync('audio.mp3', Buffer.from(audioBuffer));
      console.log('Audio file saved as audio.mp3');
    } else {
      console.error(\`Error: \${response.status} - \${await response.text()}\`);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
}

textToSpeech();`}
        </pre>
      </div>

      <h2 id="understanding-the-response">Understanding the Response</h2>
      
      <p>
        For successful requests, you'll receive the audio file as binary data. 
        For other endpoints like speech-to-text, you'll receive JSON responses:
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "text": "你好世界",
  "confidence": 0.95,
  "language": "cantonese",
  "duration": 2.3,
  "timestamp": "2025-01-27T10:30:00Z"
}`}
        </pre>
      </div>

      <h2 id="error-handling">Error Handling</h2>
      
      <p>
        The API uses standard HTTP status codes. Here are some common error responses:
      </p>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-red-400 text-sm overflow-x-auto">
{`{
  "error": {
    "code": "invalid_api_key",
    "message": "The provided API key is invalid",
    "type": "authentication_error"
  }
}`}
        </pre>
      </div>

      <h2 id="rate-limits">Rate Limits</h2>
      
      <p>
        The API has rate limits to ensure fair usage. Check the response headers for rate limit information:
      </p>
      
      <ul>
        <li><code>X-RateLimit-Limit</code>: Maximum requests per time window</li>
        <li><code>X-RateLimit-Remaining</code>: Remaining requests in current window</li>
        <li><code>X-RateLimit-Reset</code>: Time when the rate limit resets</li>
      </ul>

      <h2 id="next-steps">Next Steps</h2>
      
      <p>Now that you've made your first request, explore our other services:</p>
      
      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <a href="/docs/speech-to-text" className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Speech-to-Text</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Convert audio to text</p>
        </a>
        <a href="/docs/voice-cloning" className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Voice Cloning</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Create custom voices</p>
        </a>
        <a href="/docs/translation" className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Translation</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Translate languages</p>
        </a>
        <a href="/docs/chatbot" className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chatbot</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Interactive AI assistants</p>
        </a>
      </div>
      
      <p>
        For detailed API reference documentation, visit our{" "}
        <a href="/api-reference" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          API Reference
        </a>{" "}
        section.
      </p>
    </div>
  );
} 