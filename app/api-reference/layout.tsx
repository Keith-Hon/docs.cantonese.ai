'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "REST API", href: "/api-reference" },
      { name: "Authentication", href: "/api-reference/authentication" },
      { name: "Errors", href: "/api-reference/errors" },
    ],
  },
  {
    title: "Endpoints",
    items: [
      { name: "Speech-to-Text", href: "/api-reference/speech-to-text" },
      { name: "Text-to-Speech", href: "/api-reference/text-to-speech" },
      { name: "Voice Cloning", href: "/api-reference/voice-cloning" },
      { name: "Translation", href: "/api-reference/translation" },
      { name: "Chatbot", href: "/api-reference/chatbot" },
      { name: "Speech Editing", href: "/api-reference/speech-editing" },
    ],
  },
  {
    title: "Models",
    items: [
      { name: "Available Models", href: "/api-reference/models" },
      { name: "Model Pricing", href: "/api-reference/pricing" },
    ],
  },
];

export default function ApiReferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                cantonese.ai
              </Link>
              <span className="text-sm text-gray-500">API Reference</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/api-reference" className="text-gray-600 hover:text-blue-600">
                API Reference
              </Link>
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600">
                Main Site
              </a>
            </nav>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 bg-gray-50 border-r border-gray-200 min-h-screen`}>
          <nav className="p-6">
            {navigation.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          pathname === item.href
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 max-w-none p-8 bg-white">
          <div className="max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 