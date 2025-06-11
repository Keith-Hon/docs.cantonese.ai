import CodeExample from "@/app/components/CodeExample";

export default function OpenAICompatibilityPage() {
    const openaiExamples = {
        curl: {
            language: 'bash',
            code: `curl -X POST "https://stt.cantonese.ai/v1/audio/transcriptions" \\
  -H "Authorization: Bearer XXXXXXX" \\
  -F "file=@audio.wav" \\
  -F "model=whisper-1" \\
  -F "language=zh"`
        },
        python: {
            language: 'python',
            code: `from openai import OpenAI

client = OpenAI(base_url="https://stt.cantonese.ai/v1/", api_key="XXXXXXX")

audio_file = open("audio.wav", "rb")
transcript = client.audio.transcriptions.create(file=audio_file, language="zh")
print(transcript.text)`
        },
        javascript: {
            language: 'javascript',
            code: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
    baseURL: 'https://stt.cantonese.ai/v1/',
    apiKey: 'XXXXXXX'
});

const audioFile = fs.createReadStream('audio.wav');
const transcript = await client.audio.transcriptions.create({
    file: audioFile,
    language: 'zh'
});
console.log(transcript.text);`
        },
        typescript: {
            language: 'typescript',
            code: `import OpenAI from 'openai';
import fs from 'fs';

const client: OpenAI = new OpenAI({
    baseURL: 'https://stt.cantonese.ai/v1/',
    apiKey: 'XXXXXXX'
});

const audioFile: fs.ReadStream = fs.createReadStream('audio.wav');
const transcript: OpenAI.Audio.Transcription = await client.audio.transcriptions.create({
    file: audioFile,
    language: 'zh'
});
console.log(transcript.text);`
        },
    };

    return (
        <div className="prose prose-lg max-w-none">
            <h1>OpenAI Compatibility</h1>

            <p>
                Cantonese.AI's API is compatible with OpenAI's libraries, making it easy to integrate our specialized 
                Cantonese language models into your existing applications.
            </p>

            <p>
                Cantonese.AI's API endpoints for speech-to-text are compatible with OpenAI's API format.
            </p>
            
            <p>
                If you have an application that uses OpenAI's client libraries, you can easily configure it to point to 
                Cantonese.AI's API servers, and start using our specialized Cantonese language processing capabilities.
            </p>

            <h2 id="configuring-openai">Configuring OpenAI to use Cantonese.AI</h2>
            
            <p>
                To start using Cantonese.AI with OpenAI's client libraries, pass in your Cantonese.AI API key to the{' '}
                <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">api_key</code> option, and 
                change the <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">base_url</code> to{' '}
                <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">https://stt.cantonese.ai/v1/</code> for Speech-to-Text:
            </p>

            <section className="mb-16">
                <CodeExample
                    title="Speech-to-Text Example"
                    description="Convert audio files to text using OpenAI-compatible client libraries with Cantonese.AI."
                    examples={openaiExamples}
                />
            </section>


        </div>
    );
}
