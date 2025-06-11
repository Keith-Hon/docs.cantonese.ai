import CodeExample from "@/app/components/CodeExample";
// import { openaiExamples } from "../example-codes";
import fs from "fs";

const sttOpenAIPythonCode = fs.readFileSync("../example-codes/stt-openai.py", "utf8");
const sttOpenAIShCode = fs.readFileSync("../example-codes/stt-openai.sh", "utf8");
const sttOpenAIJSCode = fs.readFileSync("../example-codes/stt-openai.js", "utf8");

export default function OpenAICompatibilityPage() {

    const openaiExamples = {
        curl: {
          language: 'bash',
          code: sttOpenAIShCode,
        },
        python: {
          language: 'python',
          code: sttOpenAIPythonCode,
        },
        javascript: {
          language: 'javascript',
          code: sttOpenAIJSCode,
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
                To start using Cantonese.AI with OpenAI's client libraries, pass in your Cantonese.AI API key to the{' '}
                <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">api_key</code> option, and 
                change the <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">base_url</code> to{' '}
                <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">https://stt-api.cantonese.ai/v1/</code> for Speech-to-Text.
            </p>

            <section className="mb-16">
                <CodeExample
                    title="Example"
                    description="Convert audio files to text using OpenAI-compatible client libraries with Cantonese.AI."
                    examples={openaiExamples}
                />
            </section>


        </div>
    );
}
