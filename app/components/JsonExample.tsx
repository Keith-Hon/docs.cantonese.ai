"use client";

import { useState, useEffect, useRef } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface JsonExampleProps {
  // title: string;
  // description: React.ReactNode;
  code: string;
}

export default function JsonExample({ code }: JsonExampleProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Remove existing highlighting
      codeRef.current.removeAttribute('data-highlighted');
      
      // Apply new highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full mb-8">
      {/* <h3 id={title.toLowerCase().replace(/ /g, "-")}>{title}</h3>
      <div>{description}</div> */}
      
      <div className="bg-gray-900 rounded-lg overflow-hidden w-full relative not-prose">
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
          
          <pre className="p-3 sm:p-4 pr-10 sm:pr-16 text-xs sm:text-sm overflow-x-auto bg-gray-900">
            <code 
              ref={codeRef}
              className="language-json"
            >
              {code}
            </code>
          </pre>
        </div>
    </div>
  );
} 