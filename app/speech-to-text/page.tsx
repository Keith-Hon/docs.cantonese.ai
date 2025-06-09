import CodeExample from "@/app/examples/codeExample";

export default function SpeechToTextApiPage() {
    const sttExamples = {
        curl: {
            language: 'bash',
            code: `curl -X POST "https://paid-api.cantonese.ai" \\
      -F "api_key=YOUR_API_KEY" \\
      -F "with_timestmap=false" \\
      -F "with_diarization=false" \\
      -F "data=@audio.wav;type=audio/wav"`
        },
        python: {
            language: 'python',
            code: `import requests
    
    url = "https://paid-api.cantonese.ai"
    
    payload = {
        "api_key": "YOUR_API_KEY",
        "with_timestmap": "false",
        "with_diarization": "false"
    }
    files=[
      ('data',('audio.wav',open('ABSOLUTE_FILE_PATH','rb'),'audio/wav'))
    ]
    headers = {}
    
    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    
    print(response.text)`
        },
        javascript: {
            language: 'javascript',
            code: `const formData = new FormData();
    formData.append('api_key', 'YOUR_API_KEY');
    formData.append('with_timestmap', 'false');
    formData.append('with_diarization', 'false');
    formData.append('data', audioFile, 'audio.wav');
    
    const response = await fetch('https://paid-api.cantonese.ai', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    console.log(data);`
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
                                Audio file to transcribe. Supported formats: wav, mp3, m4a, flac, ogg. Max size: 25MB, max duration: 30 minutes.
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



{/* 
            <h2 id="error-responses">Error Responses</h2>
            
            <div className="bg-gray-900 rounded-lg p-4 not-prose">
                <pre className="text-red-400 text-sm overflow-x-auto">
{`{
  "error": {
    "code": "file_too_large",
    "message": "Audio file exceeds maximum size of 25MB",
    "type": "invalid_request_error",
    "param": "data"
  }
}`}
                </pre>
            </div>

            h2 id="common-errors">Common Error Codes</h2>
            
            <div className="overflow-x-auto not-prose">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                                Error Code
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                api_key_required
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                The api_key parameter is required
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                file_required
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                No audio file was provided
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                file_too_large
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Audio file exceeds maximum size of 25MB
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                duration_too_long
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Audio duration exceeds maximum of 30 minutes
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                unsupported_format
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                The audio format is not supported
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                audio_corrupted
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                The audio file is corrupted or unreadable
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                no_speech_detected
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                No speech was detected in the audio file
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm font-mono text-gray-900 border-b border-gray-200">
                                rate_limit_exceeded
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                                Too many requests, please slow down
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="rate-limits">Rate Limits</h2>
            
            <p>
                The Speech-to-Text endpoint has the following rate limits:
            </p>
            
            <ul>
                <li><strong>Free tier:</strong> 50 requests per hour, 5 hours of audio per day</li>
                <li><strong>Pro tier:</strong> 500 requests per hour, 50 hours of audio per day</li>
                <li><strong>Enterprise tier:</strong> Custom limits based on your plan</li>
            </ul>
            
            <p>
                For higher limits, please{" "}
                <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800">
                    contact us
                </a>
                .
            </p>

            <h2 id="best-practices">Best Practices</h2>
            
            <ul>
                <li><strong>Audio Quality:</strong> Use high-quality audio (16kHz+ sample rate) for better transcription accuracy</li>
                <li><strong>Background Noise:</strong> Minimize background noise and echo for optimal results</li>
                <li><strong>File Size:</strong> For large files, consider splitting them into smaller chunks to reduce processing time</li>
                <li><strong>Language Detection:</strong> Specify the language parameter when you know the source language for better accuracy</li>
                <li><strong>Timestamps:</strong> Enable timestamps for applications that need time-synchronized transcriptions</li>
                <li><strong>Speaker Diarization:</strong> Use speaker diarization for multi-speaker conversations to identify who said what</li>
            </ul> */}
        </div>
    )
}