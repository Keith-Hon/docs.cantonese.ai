import CodeExample from "@/app/components/CodeExample";
// import { sttExamples } from "../example-codes";
import fs from "fs";
import path from "path";

const sttPythonCode = fs.readFileSync(path.join(process.cwd(), "example-codes/speech-to-text.py"), "utf8");
const sttShCode = fs.readFileSync(path.join(process.cwd(), "example-codes/speech-to-text.sh"), "utf8");
const sttJSCode = fs.readFileSync(path.join(process.cwd(), "example-codes/speech-to-text.js"), "utf8");

export default function SpeechToTextApiPage() {
    const sttExamples = {
        curl: {
            language: 'bash',
            code: sttShCode,
        },
        python: {
            language: 'python',
            code: sttPythonCode,
        },
        javascript: {
            language: 'javascript',
            code: sttJSCode,
        },
    };
    return (
        <div className="prose prose-lg max-w-none">
            <h1>Speech-to-Text</h1>

            <p>
                Convert Cantonese audio files to accurate text transcriptions. This endpoint supports multiple 
                audio formats, timestamps, speaker diarization, and advanced transcription options.
            </p>

            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 not-prose">
                <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        POST
                    </span>
                    <code className="text-sm font-mono">/v1/speech-to-text</code>
                </div>
            </div> */}

            <h2 id="request-parameters">Request Parameters</h2>
            
            <p>This endpoint requires multipart/form-data for file uploads.</p>
            
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
                                Your <a href="https://cantonese.ai/api-keys" className="text-blue-600 hover:text-blue-800">API key</a> for authentication
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                data
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                file
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Yes
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Audio file to transcribe. Supported formats: wav, mp3, m4a, flac, ogg.
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                with_timestmap
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                No
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Include word-level timestamps in the response. Defaults to false.
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                with_diarization
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                No
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Enable speaker diarization to identify different speakers. Defaults to false.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <h2 id="supported-formats">Supported Audio Formats</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">WAV</h4>
                    <p className="text-sm text-gray-600">Uncompressed audio, best quality</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">MP3</h4>
                    <p className="text-sm text-gray-600">Compressed format, good for web</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">M4A</h4>
                    <p className="text-sm text-gray-600">Apple's audio format</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">FLAC</h4>
                    <p className="text-sm text-gray-600">Lossless compression</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">OGG</h4>
                    <p className="text-sm text-gray-600">Open source format</p>
                </div>
            </div> */}

            <section className="mb-16">
                <CodeExample
                    title="Example Request"
                    description="Here are examples of how to transcribe audio files using different programming languages."
                    examples={sttExamples}
                />
            </section>

            <h2 id="response">Response</h2>
            
            <p>
                On success, the response returns a JSON object with the transcription results:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 not-prose">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "text":"你好 我係 Alice。你好 我係 Bob。",
  "is_cached":true,
  "duration":14.912,
  "process_time":0.3366544246673584
}`}
                </pre>
            </div>
        </div>
    )
}