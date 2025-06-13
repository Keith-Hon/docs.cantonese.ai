import CodeExample from "@/app/components/CodeExample";
// import { openaiExamples } from "../example-codes";
import fs from "fs";
import path from "path";

const sttOpenAIPythonCode = fs.readFileSync(path.join(process.cwd(), "example-codes/stt-openai.py"), "utf8");
const sttOpenAIShCode = fs.readFileSync(path.join(process.cwd(), "example-codes/stt-openai.sh"), "utf8");
const sttOpenAIJSCode = fs.readFileSync(path.join(process.cwd(), "example-codes/stt-openai.js"), "utf8");

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
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">OpenAI Compatible</h1>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Cantonese.AI's API is compatible with OpenAI's libraries, making it easy to integrate our specialized 
                Cantonese language models into your existing applications.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                To start using Cantonese.AI with OpenAI's client libraries, pass in your Cantonese.AI API key to the{' '}
                <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-words">api_key</code> option, and 
                change the <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-words">base_url</code> to{' '}
                <code className="text-xs sm:text-sm bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-words">https://stt-api.cantonese.ai/v1/</code> for Speech-to-Text.
            </p>

            <section className="mb-8 sm:mb-12 lg:mb-16">
                <CodeExample
                    title="Example"
                    description="Convert audio files to text using OpenAI-compatible client libraries with Cantonese.AI."
                    examples={openaiExamples}
                />
            </section>


        </div>
    );
}
