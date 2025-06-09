// export default function ApiReferencePage() {
//   return (
//     <div className="prose prose-lg max-w-none">
//       <h1>REST API</h1>

//       <p>
//         The cantonese.ai API is a robust, high-performance RESTful interface designed for
//         seamless integration into existing systems. It offers advanced AI capabilities
//         specifically tailored for the Cantonese language.
//       </p>

//       <p>
//         The base URL for all routes is <code>https://api.cantonese.ai</code>.
//       </p>

//       <h2 id="endpoints-overview">Endpoints Overview</h2>

//       <div className="grid gap-6 not-prose">
//         <div className="border border-gray-200 rounded-lg p-6">
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">
//             Speech-to-Text
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Convert Cantonese audio files to accurate text transcriptions.
//           </p>
//           <div className="bg-gray-50 rounded p-3 mb-3">
//             <code className="text-sm">POST /v1/speech-to-text</code>
//           </div>
//           <a href="/speech-to-text" className="text-blue-600 hover:text-blue-800 font-medium">
//             View Documentation →
//           </a>
//         </div>

//         <div className="border border-gray-200 rounded-lg p-6">
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">
//             Text-to-Speech
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Generate natural-sounding Cantonese speech from text input.
//           </p>
//           <div className="bg-gray-50 rounded p-3 mb-3">
//             <code className="text-sm">POST /v1/text-to-speech</code>
//           </div>
//           <a href="/text-to-speech" className="text-blue-600 hover:text-blue-800 font-medium">
//             View Documentation →
//           </a>
//         </div>
//       </div>

//       <hr />

//       <p>
//         For detailed error codes and handling, see our{" "}
//         <a href="/api-reference/errors" className="text-blue-600 hover:text-blue-800">
//           Error Reference
//         </a>
//         .
//       </p>

//       <hr />

//       <h2 id="getting-started">Getting Started</h2>

//       <p>
//         Ready to start building? Check out our{" "}
//         <a href="/docs/quickstart" className="text-blue-600 hover:text-blue-800">
//           Quickstart Guide
//         </a>{" "}
//         for step-by-step instructions on making your first API request.
//       </p>

//       <p>
//         For code examples and integration patterns, visit our{" "}
//         <a href="/examples" className="text-blue-600 hover:text-blue-800">
//           Examples
//         </a>{" "}
//         section.
//       </p>
//     </div>
//   );
// }

// redirect to /speech-to-text
import { redirect } from 'next/navigation'

const Blog = () => {
    redirect('/speech-to-text')
}

export default Blog;