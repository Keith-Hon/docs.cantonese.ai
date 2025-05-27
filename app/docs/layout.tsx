'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs/introduction" },
      { name: "Quickstart", href: "/docs/quickstart" },
      { name: "Authentication", href: "/docs/authentication" },
      { name: "Migration Guide", href: "/docs/migration" },
    ],
  },
  {
    title: "API Services",
    items: [
      { name: "Speech-to-Text", href: "/docs/speech-to-text" },
      { name: "Text-to-Speech", href: "/docs/text-to-speech" },
      { name: "Voice Cloning", href: "/docs/voice-cloning" },
      { name: "Translation", href: "/docs/translation" },
      { name: "Chatbot", href: "/docs/chatbot" },
      { name: "Speech Editing", href: "/docs/speech-editing" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { name: "Rate Limits", href: "/docs/rate-limits" },
      { name: "Error Handling", href: "/docs/error-handling" },
      { name: "Webhooks", href: "/docs/webhooks" },
      { name: "SDKs", href: "/docs/sdks" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                cantonese.ai
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">API Documentation</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* <Link href="/docs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Docs
              </Link> */}
              {/* <Link href="/api-reference" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                API Reference
              </Link> */}
              {/* <Link href="/examples" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Examples
              </Link> */}
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Main Site
              </a>
            </nav>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
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
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen`}>
          <nav className="p-6">
            {navigation.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          pathname === item.href
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
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
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
} 