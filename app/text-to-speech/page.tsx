import CodeExample from "@/app/components/CodeExample";
// import { ttsExamples } from "../example-codes";

import fs from "fs";
import path from "path";
import JsonExample from "@/app/components/JsonExample";

const ttsPyCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.py"), "utf8");
const ttsShCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.sh"), "utf8");
const ttsJSCode = fs.readFileSync(path.join(process.cwd(), "example-codes/text-to-speech.js"), "utf8");

const ttsPyCodeWithTimestamp = fs.readFileSync(path.join(process.cwd(), "example-codes/tts-with-timestamp.py"), "utf8");
const ttsShCodeWithTimestamp = fs.readFileSync(path.join(process.cwd(), "example-codes/tts-with-timestamp.sh"), "utf8");
const ttsJSCodeWithTimestamp = fs.readFileSync(path.join(process.cwd(), "example-codes/tts-with-timestamp.js"), "utf8");

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
      code: ttsPyCode,
    },
    javascript: {
      language: 'javascript',
      code: ttsJSCode,
    },
  };

  const ttsExamplesWithTimestamp = {
    curl: {
      language: 'bash',
      code: ttsShCodeWithTimestamp,
    },
    python: {
      language: 'python',
      code: ttsPyCodeWithTimestamp,
    },
    javascript: {
      language: 'javascript',
      code: ttsJSCodeWithTimestamp,
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
            <tr>
              <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                should_return_timestamp
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                boolean
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                No
              </td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                Defaults to false.
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <h2 id="example-request">Example Request</h2>

      <p>When <code>should_return_timestamp = false</code>, the API returns an audio file as output.</p>


      <section className="mb-16">
        <CodeExample
          // title="Example Request"
          // description="Here are examples of how to generate audio from text using different programming languages."
          examples={ttsExamples}
        />
      </section>

      <p><b>Output:</b> An audio file (.mp3, .wav, .ogg, .flac) </p>


      <h2 id="json-response-example">Generate a JSON response with timestamp</h2>

      <p>
        When <code>should_return_timestamp = true</code>, the API returns a JSON response containing the base64-encoded audio file and timing information.
      </p>

      <section className="mb-16">
        <CodeExample
          // title="Example Request"
          // description="Here are examples of how to generate audio from text using different programming languages."
          examples={ttsExamplesWithTimestamp}
        />
      </section>

      <p><b>Output Format:</b> The response includes the generated audio and detailed timing data:</p>

      <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
        <li><code>file</code>: Base64-encoded audio file in the requested format</li>
        <li><code>request_id</code>: Unique identifier for this request</li>
        <li><code>srt_timestamp</code>: Subtitle timestamps in SRT format</li>
        <li><code>timestamps</code>: Array of word-level timing data with start/end times and text</li>
      </ul>

      <JsonExample
        // title="Output Format"
        // description={
        //   <>
        //     <p className="text-m">The response includes the generated audio and detailed timing data:</p>
        //     <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
        //       <li><code>file</code>: Base64-encoded audio file in the requested format</li>
        //       <li><code>request_id</code>: Unique identifier for this request</li>
        //       <li><code>srt_timestamp</code>: Subtitle timestamps in SRT format</li>
        //       <li><code>timestamps</code>: Array of word-level timing data with start/end times and text</li>
        //     </ul>
        //   </>
        // }
        code={JSON.stringify(responseExamples.text_to_speech, null, 2)}
      />
    </div>
  );
} 