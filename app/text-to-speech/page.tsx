import CodeExample from "@/app/components/CodeExample";
// import { ttsExamples } from "../example-codes";

import fs from "fs";
import path from "path";

const ttsPythonCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.py"), "utf8");
const ttsShCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.sh"), "utf8");
const ttsJSCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.js"), "utf8");

export default function TextToSpeechApiPage() {


  const ttsExamples = {
    curl: {
      language: 'bash',
      code: ttsShCode,
    },
    python: {
      language: 'python',
      code: ttsPythonCode,
    },
    javascript: {
      language: 'javascript',
      code: ttsJSCode,
    },
  };

  return (
    <div className="prose prose-lg max-w-none">
      <h1>Text-to-Speech</h1>

      <p>
        Convert text to natural-sounding Cantonese speech. This endpoint supports multiple
        voice options, audio formats, and customization parameters.
      </p>

      {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 not-prose">
        <div className="flex items-center space-x-2">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
            POST
          </span>
          <code className="text-sm font-mono">/v1/text-to-speech</code>
        </div>
      </div> */}

      <h2 id="request-body">Request Body</h2>

      <div className="overflow-x-auto not-prose">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                Parameter
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                Required
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                api_key
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Yes
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Your <a href="https://cantonese.ai/api-keys" className="text-blue-600 hover:text-blue-800">API key</a> for authentication.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                text
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Yes
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                The text to convert to speech. Maximum 5000 characters.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                frame_rate
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Audio frame rate in Hz. Common values: "16000", "24000", "44100". Defaults to "24000".
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                speed
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                number
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Speech speed multiplier. Range: 0.5-3.0. Defaults to 1.0.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                duration
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                number
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Target duration (seconds).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                pitch
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                number
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Pitch adjustment in semitones. Range: -12 to +12. Defaults to 0.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                language
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Language code. Defaults to "cantonese". Options: "cantonese", "english", "mandarin".
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                output_extension
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Audio output format. Defaults to "mp3". Options: "mp3", "wav", "ogg", "flac".
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                voice_id
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                string
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Unique identifier for the voice to use. Defaults to system default voice.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                should_enhance
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                boolean
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Whether to apply audio enhancement. Defaults to false.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                should_convert_from_simplified_to_traditional
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                boolean
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Whether to convert simplified Chinese to traditional Chinese before synthesis. Defaults to false.
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      <section className="mb-16">
        <CodeExample
          title="Example Request"
          description="Here are examples of how to transcribe audio files using different programming languages."
          examples={ttsExamples}
        />
      </section>

      <h2 id="response">Response</h2>

      <p>
        On success, the response body contains the audio file in the requested format.
        The response headers include:
      </p>

      <ul>
        <li><code>Content-Type</code>: The MIME type of the audio file</li>
        <li><code>Content-Length</code>: Size of the audio file in bytes</li>
      </ul>
    </div>
  );
} 