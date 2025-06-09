export default function IntroductionPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Introduction</h1>
      
      <h2 id="what-is-cantonese-ai-api">What is cantonese.ai and cantonese.ai API</h2>
      
      <p>
        cantonese.ai is a family of AI services specifically designed for the Cantonese language, 
        developed by a Hong Kong-based company founded in 2023.
      </p>
      
      <p>
        Inspired by the mission to promote and preserve the Cantonese language in the AI era, 
        cantonese.ai provides cutting-edge AI technologies that empower the Cantonese-speaking 
        community and enhance their daily lives and competitiveness. Our services include 
        speech-to-text, text-to-speech, voice cloning, translation, chatbots, and speech editing 
        capabilities.
      </p>
      
      <p>
        cantonese.ai offers an API interface for developers to programmatically interact with 
        our AI services, enabling seamless integration into applications and workflows.
      </p>

      <hr />

      <h2 id="how-is-cantonese-ai-trained">How are cantonese.ai models trained?</h2>
      
      <p>
        Our AI models are trained on carefully curated datasets of Cantonese language content, 
        including speech, text, and conversational data. We work with native Cantonese speakers 
        and language experts to ensure cultural authenticity and linguistic accuracy.
      </p>
      
      <p>
        The training process involves multiple stages of refinement, with particular attention 
        to the nuances of Cantonese pronunciation, grammar, and cultural context that distinguish 
        it from other Chinese dialects.
      </p>

      <hr />

      <h2 id="what-is-an-api">What is an API? Do I need it?</h2>
      
      <p>
        An API (Application Programming Interface) is a set of protocols and tools for building 
        software and applications. It allows different software to communicate with each other, 
        enabling developers to add cantonese.ai's functionalities to their own projects.
      </p>
      
      <p>
        You probably won't need cantonese.ai API if you're only interested in using our services 
        through the web interface at{" "}
        <a href="https://cantonese.ai" className="text-blue-600 hover:text-blue-800">
          cantonese.ai
        </a>
        . But to integrate Cantonese AI capabilities into your application, or to add our services 
        to third-party tools, you would need to use the cantonese.ai API.
      </p>
      
      <p className="italic">
        Head to the{" "}
        <a href="/docs/quickstart" className="text-blue-600 hover:text-blue-800">
          Quickstart Guide
        </a>{" "}
        and you will find (almost) all you need to start using cantonese.ai API.
      </p>

      <hr />

      <h2 id="cantonese-ai-web-vs-api">cantonese.ai Web vs cantonese.ai API</h2>
      
      <p>To illustrate more, here are some main differences between cantonese.ai Web and cantonese.ai API:</p>
      
      <ul>
        <li>
          <strong>cantonese.ai Web</strong>
          <ul>
            <li>Accessible on: <a href="https://cantonese.ai" className="text-blue-600 hover:text-blue-800">cantonese.ai</a></li>
            <li>Programming knowledge: Not required</li>
            <li>Account: Managed by cantonese.ai</li>
            <li>Provides web-based AI services for speech-to-text, text-to-speech, translation, chatbots, and more.</li>
          </ul>
        </li>
        <li>
          <strong>cantonese.ai API</strong>
          <ul>
            <li>Accessible via: cantonese.ai API Endpoint (<code>https://api.cantonese.ai</code>)</li>
            <li>Programming knowledge: Likely required</li>
            <li>Account: Managed by cantonese.ai</li>
            <li>API access that provides a programmatic way to interact with Cantonese AI services. Developers can integrate our capabilities into applications to expand their functionality.</li>
          </ul>
        </li>
      </ul>
      
      <p>This documentation is primarily focused on cantonese.ai API access.</p>

      <h3 id="benefits-of-cantonese-ai-api">Benefits of cantonese.ai API</h3>
      
      <ul>
        <li><strong>Customization:</strong> You can adjust parameters and settings to personalize the AI responses and outputs.</li>
        <li><strong>Automation:</strong> In workflows, you might want to process multiple requests or chain different services together.</li>
        <li><strong>Integration:</strong> Seamlessly embed Cantonese AI capabilities into your existing applications and services.</li>
        <li><strong>Scalability:</strong> Handle large volumes of requests programmatically with proper rate limiting and error handling.</li>
      </ul>

      <hr />

      <h2 id="supported-services">Supported Services</h2>
      
      <p>cantonese.ai API currently supports the following services:</p>
      
      <div className="grid md:grid-cols-2 gap-6 not-prose">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Speech-to-Text</h4>
          <p className="text-gray-600 text-sm">Convert Cantonese audio to accurate text transcriptions</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Text-to-Speech</h4>
          <p className="text-gray-600 text-sm">Generate natural-sounding Cantonese speech from text</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Voice Cloning</h4>
          <p className="text-gray-600 text-sm">Create custom voices that mimic specific speakers</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Translation</h4>
          <p className="text-gray-600 text-sm">Translate between Cantonese and other languages</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Chatbot</h4>
          <p className="text-gray-600 text-sm">Interactive AI assistants with Cantonese cultural context</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Speech Editing</h4>
          <p className="text-gray-600 text-sm">Modify and enhance audio content seamlessly</p>
        </div>
      </div>
    </div>
  );
} 