"use client";

import { useState, useEffect, useRef } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface CodeExampleProps {
  // title: string;
  // description: string;
  examples: {
    [key: string]: {
      language: string;
      code: string;
    };
  };
}

export default function CodeExample({ 
  // title,
  // description,
  examples
}: CodeExampleProps) {
  const [activeTab, setActiveTab] = useState(() => Object.keys(examples)[0] || 'curl');
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Remove existing highlighting
      codeRef.current.removeAttribute('data-highlighted');
      
      // Apply new highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [activeTab]);

  const copyToClipboard = async () => {
    try {
      const currentExample = examples[activeTab as keyof typeof examples];
      await navigator.clipboard.writeText(currentExample.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getLanguageDisplayName = (lang: string) => {
    const names = {
      curl: 'cURL',
      python: 'Python',
      javascript: 'JavaScript',
    };
    return names[lang as keyof typeof names] || lang;
  };

  const currentExample = examples[activeTab as keyof typeof examples];

  return (
    <div className="w-full">
      {/* <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
        {description}
      </p> */}
      
      {/* Code Example with Tabs */}
      <div className="bg-gray-800 rounded-lg overflow-hidden w-full">
        {/* Language Tabs */}
        <div className="flex bg-gray-900 border-b border-gray-700 overflow-x-auto">
          {Object.keys(examples).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors border-b-2 whitespace-nowrap flex-shrink-0 ${
                activeTab === lang
                  ? 'text-white border-blue-400'
                  : 'text-gray-400 border-transparent hover:text-gray-300'
              }`}
            >
              {getLanguageDisplayName(lang)}
            </button>
          ))}
        </div>

        {/* Code Display with Copy Button */}
        <div className="relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors group z-10"
            title="Copy code"
          >
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              )}
            </svg>
          </button>
          
          <pre className="p-3 sm:p-4 pr-10 sm:pr-16 text-xs sm:text-sm overflow-x-auto bg-gray-800">
            <code 
              ref={codeRef}
              className={`language-${currentExample.language}`}
            >
              {currentExample.code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
