import CodeExample from "@/app/components/CodeExample";
// import { ttsExamples } from "../example-codes";

import fs from "fs";
import path from "path";
import JsonExample from "@/app/components/JsonExample";

const ttsPythonCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.py"), "utf8");
const ttsShCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.sh"), "utf8");
const ttsJSCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.js"), "utf8");

const responseExamplesRaw = fs.readFileSync(path.join(process.cwd(), "example-codes/response-example.json"), "utf8");
const responseExamples = JSON.parse(responseExamplesRaw);


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
      <h1 className="text-xl sm:text-2xl lg:text-3xl">Text-to-Speech</h1>

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
          description="Here are examples of how to generate audio from text using different programming languages."
          examples={ttsExamples}
        />
      </section>

      <h2 id="response">Response</h2>

      <p>
        The API can return either the audio file directly or a JSON object.
        By default, the audio file is returned. If <code>is_from_frontend: true</code> is
        sent in the request, a JSON object is returned instead, which is useful for web clients.
      </p>


      <div className="my-6 not-prose p-4 rounded-lg border bg-gray-50">
          <h3 className="text-base font-semibold">Direct Audio File Response</h3>
          <p className="text-sm text-gray-600 mt-1">
              The API returns the synthesized audio file directly. The response headers will include:
          </p>
          <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
              <li><code>Content-Type</code>: The MIME type of the audio file (e.g., <code>audio/mpeg</code>).</li>
              <li><code>Content-Length</code>: The size of the audio file in bytes.</li>
          </ul>
      </div>

      <JsonExample
        title="JSON Response"
        description={
          <>
            <p className="text-sm">The JSON object contains the base64-encoded audio file and detailed metadata.</p>
            <p className="text-sm mt-2"><b>JSON Response Fields:</b></p>
            <ul className="text-sm list-disc pl-5 mt-1 space-y-1">
              <li><code>file</code>: A base64 encoded string of the audio file.</li>
              <li><code>request_id</code>: A unique identifier for the request.</li>
              <li><code>srt_timestamp</code>: A string containing timestamps in SubRip (SRT) format.</li>
              <li><code>timestamps</code>: An array of word-level timestamp objects, each with start/end times.</li>
            </ul>
          </>
        }
        code={JSON.stringify(responseExamples.text_to_speech, null, 2)}
      />
    </div>
  );
} 