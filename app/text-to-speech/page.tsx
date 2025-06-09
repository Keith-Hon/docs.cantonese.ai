import CodeExample from "@/app/examples/codeExample";

export default function TextToSpeechApiPage() {

  const ttsExamples = {
    curl: {
      language: 'bash',
      code: `curl -X POST "https://cantonese.ai/api/tts" \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "YOUR_API_KEY",
    "text": "你今日食咗飯未？",
    "frame_rate": "24000",
    "speed": 1,
    "duration": 2,
    "pitch": 0,
    "lang": "cantonese",
    "output_extension": "wav",
    "voice_id": "2725cf0f-efe2-4132-9e06-62ad84b2973d",
    "should_enhance": false,
    "should_convert_from_simplified_to_traditional": true
  }' \\
  --output output.wav`
    },
    python: {
      language: 'python',
      code: `import requests
import json

url = "https://cantonese.ai/api/tts"

payload = json.dumps({
  "api_key": "YOUR_API_KEY",
  "text": "你今日食咗飯未？",  
  "frame_rate": "24000",
  "speed": 1,
  "duration": 2,
  "pitch": 0,
  "lang": "cantonese",
  "output_extension": "wav",
  "voice_id": "2725cf0f-efe2-4132-9e06-62ad84b2973d",
  "should_enhance": False,
  "should_convert_from_simplified_to_traditional": True
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

with open('output.wav', 'wb') as f:
    f.write(response.content);`
    },
    javascript: {
      language: 'javascript',
      code: `const url = "https://cantonese.ai/api/tts";

const payload = {
  api_key: "YOUR_API_KEY",
  text: "你今日食咗飯未？",
  frame_rate: "24000",
  speed: 1,
  duration: 2,
  pitch: 0,
  lang: "cantonese",
  output_extension: "wav",
  voice_id: "2725cf0f-efe2-4132-9e06-62ad84b2973d",
  should_enhance: false,
  should_convert_from_simplified_to_traditional: true
};

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});

if (response.ok) {
  const audioBlob = await response.blob();
  const url = window.URL.createObjectURL(audioBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'output.wav';
  a.click();
} else {
  console.error('Error:', response.status);
}`
    },
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Text-to-Speech</h1>

      <p>
        Convert text to natural-sounding Cantonese speech. This endpoint supports multiple
        voice options, audio formats, and customization parameters.
      </p>

      {/* <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 not-prose">
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded text-sm font-medium">
            POST
          </span>
          <code className="text-sm font-mono">/v1/text-to-speech</code>
        </div>
      </div> */}

      <h2 id="request-body">Request Body</h2>

      <div className="overflow-x-auto not-prose">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Parameter
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Required
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900">
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                text
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Yes
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                The text to convert to speech. Maximum 5000 characters.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                voice
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Voice ID to use. Defaults to "default". See available voices below.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                language
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Language code. Defaults to "cantonese". Options: "cantonese", "english", "mandarin".
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                format
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Audio format. Defaults to "mp3". Options: "mp3", "wav", "ogg", "flac".
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                speed
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                number
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Speech speed multiplier. Range: 0.5-3.0. Defaults to 1.0.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                pitch
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                number
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Pitch adjustment in semitones. Range: -12 to +12. Defaults to 0.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <h2 id="available-voices">Available Voices</h2>

      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">default</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Standard Cantonese voice, neutral tone</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">female-young</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Young female voice, friendly tone</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">male-mature</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Mature male voice, professional tone</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">child</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Child voice, playful tone</p>
        </div>
      </div> */}

      {/* <h2 id="example-request">Example Request</h2>
      
      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-green-400 text-sm overflow-x-auto">
{`curl https://api.cantonese.ai/v1/text-to-speech \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "你好世界，歡迎使用廣東話AI",
    "voice": "female-young",
    "language": "cantonese",
    "format": "mp3",
    "speed": 1.0,
    "pitch": 0
  }' \\
  --output audio.mp3`}
        </pre>
      </div> */}

      <section className="mb-16">
        <CodeExample
          title="Example Request"
          description="Here are examples of how to transcribe audio files using different programming languages."
          examples={ttsExamples}
        />
      </section>


      {/* <h2 id="python-example">Python Example</h2>

      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-blue-400 text-sm overflow-x-auto">
          {`import requests
import os

api_key = os.getenv("CANTONESE_AI_API_KEY")
url = "https://api.cantonese.ai/v1/text-to-speech"

payload = {
    "text": "你好世界，歡迎使用廣東話AI",
    "voice": "female-young",
    "language": "cantonese",
    "format": "mp3",
    "speed": 1.0,
    "pitch": 0
}

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    with open("output.mp3", "wb") as f:
        f.write(response.content)
    print("Audio saved successfully!")
else:
    print(f"Error: {response.status_code}")
    print(response.json())`}
        </pre>
      </div> */}

      <h2 id="response">Response</h2>

      <p>
        On success, the response body contains the audio file in the requested format.
        The response headers include:
      </p>

      <ul>
        <li><code>Content-Type</code>: The MIME type of the audio file</li>
        <li><code>Content-Length</code>: Size of the audio file in bytes</li>
      </ul>

      {/* <h2 id="error-responses">Error Responses</h2>

      <div className="bg-gray-900 rounded-lg p-4 not-prose">
        <pre className="text-red-400 text-sm overflow-x-auto">
          {`{
  "error": {
    "code": "text_too_long",
    "message": "Text exceeds maximum length of 5000 characters",
    "type": "invalid_request_error",
    "param": "text"
  }
}`}
        </pre>
      </div>

      <h2 id="common-errors">Common Error Codes</h2>

      <div className="overflow-x-auto not-prose">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Error Code
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900">
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                text_required
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                The text parameter is required
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                text_too_long
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Text exceeds maximum length of 5000 characters
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                invalid_voice
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                The specified voice ID is not available
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                invalid_format
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                The specified audio format is not supported
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                rate_limit_exceeded
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                Too many requests, please slow down
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="rate-limits">Rate Limits</h2>

      <p>
        The Text-to-Speech endpoint has the following rate limits:
      </p>

      <ul>
        <li><strong>Free tier:</strong> 100 requests per hour, 10,000 characters per day</li>
        <li><strong>Pro tier:</strong> 1,000 requests per hour, 100,000 characters per day</li>
        <li><strong>Enterprise tier:</strong> Custom limits based on your plan</li>
      </ul>

      <p>
        For higher limits, please{" "}
        <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          contact us
        </a>
        .
      </p> */}
    </div>
  );
} 