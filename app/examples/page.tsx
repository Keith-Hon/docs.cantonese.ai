import Image from "next/image";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">
              <Image
                  src="/logo.svg"
                  alt="cantonese.ai"
                  width={138}
                  height={27}
                  className="h-7 w-auto"
                />
              </a>
              <span className="text-sm text-gray-500">Examples</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/docs" className="text-gray-600 hover:text-blue-600">
                Docs
              </a>
              <a href="/api-reference" className="text-gray-600 hover:text-blue-600">
                API Reference
              </a>
              <a href="/examples" className="text-blue-600 font-medium">
                Examples
              </a>
              <a href="https://cantonese.ai" className="text-gray-600 hover:text-blue-600">
                Main Site
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Code Examples
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore practical examples and use cases for integrating cantonese.ai API 
            into your applications. From simple requests to complex workflows.
          </p>
        </div>

        {/* Quick Start Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Quick Start Examples
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text-to-Speech Example */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Text-to-Speech
              </h3>
              <p className="text-gray-600 mb-4">
                Convert Cantonese text to natural speech
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-blue-400 overflow-x-auto">
{`import requests

response = requests.post(
    "https://api.cantonese.ai/v1/text-to-speech",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "text": "你好世界",
        "voice": "female-young",
        "format": "mp3"
    }
)

with open("output.mp3", "wb") as f:
    f.write(response.content)`}
                </pre>
              </div>
            </div>

            {/* Speech-to-Text Example */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Speech-to-Text
              </h3>
              <p className="text-gray-600 mb-4">
                Transcribe Cantonese audio to text
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`import requests

with open("audio.wav", "rb") as f:
    response = requests.post(
        "https://api.cantonese.ai/v1/speech-to-text",
        headers={"Authorization": "Bearer YOUR_API_KEY"},
        files={"audio": f}
    )

result = response.json()
print(result["text"])`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Use Case Examples
          </h2>
          
          <div className="space-y-8">
            {/* Voice Assistant */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Cantonese Voice Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Build a complete voice assistant that can understand and respond in Cantonese.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-yellow-400 overflow-x-auto">
{`import requests
import io
from pydub import AudioSegment
from pydub.playback import play

class CantoneseAssistant:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.cantonese.ai/v1"
        
    def transcribe_audio(self, audio_file):
        """Convert speech to text"""
        with open(audio_file, "rb") as f:
            response = requests.post(
                f"{self.base_url}/speech-to-text",
                headers={"Authorization": f"Bearer {self.api_key}"},
                files={"audio": f}
            )
        return response.json()["text"]
    
    def get_response(self, text):
        """Get chatbot response"""
        response = requests.post(
            f"{self.base_url}/chat/completions",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "messages": [{"role": "user", "content": text}],
                "language": "cantonese"
            }
        )
        return response.json()["choices"][0]["message"]["content"]
    
    def speak(self, text):
        """Convert text to speech and play"""
        response = requests.post(
            f"{self.base_url}/text-to-speech",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "text": text,
                "voice": "female-young",
                "format": "mp3"
            }
        )
        
        audio = AudioSegment.from_mp3(io.BytesIO(response.content))
        play(audio)
    
    def process_voice_input(self, audio_file):
        """Complete voice interaction pipeline"""
        # 1. Transcribe user speech
        user_text = self.transcribe_audio(audio_file)
        print(f"User said: {user_text}")
        
        # 2. Get AI response
        ai_response = self.get_response(user_text)
        print(f"AI response: {ai_response}")
        
        # 3. Speak the response
        self.speak(ai_response)

# Usage
assistant = CantoneseAssistant("YOUR_API_KEY")
assistant.process_voice_input("user_question.wav")`}
                </pre>
              </div>
            </div>

            {/* Language Learning App */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Language Learning App
              </h3>
              <p className="text-gray-600 mb-6">
                Create pronunciation practice and translation exercises for Cantonese learners.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-purple-400 overflow-x-auto">
{`class CantoneseLanguageLearning:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.cantonese.ai/v1"
    
    def pronunciation_practice(self, target_text, user_audio):
        """Evaluate pronunciation accuracy"""
        # Generate reference audio
        ref_response = requests.post(
            f"{self.base_url}/text-to-speech",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={"text": target_text, "voice": "default"}
        )
        
        # Transcribe user's pronunciation
        with open(user_audio, "rb") as f:
            user_response = requests.post(
                f"{self.base_url}/speech-to-text",
                headers={"Authorization": f"Bearer {self.api_key}"},
                files={"audio": f}
            )
        
        user_text = user_response.json()["text"]
        accuracy = self.calculate_similarity(target_text, user_text)
        
        return {
            "target": target_text,
            "spoken": user_text,
            "accuracy": accuracy,
            "reference_audio": ref_response.content
        }
    
    def translate_and_speak(self, text, source_lang="english"):
        """Translate text and provide audio"""
        # Translate to Cantonese
        translation_response = requests.post(
            f"{self.base_url}/translation",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "text": text,
                "source_language": source_lang,
                "target_language": "cantonese"
            }
        )
        
        translated_text = translation_response.json()["translated_text"]
        
        # Generate speech
        speech_response = requests.post(
            f"{self.base_url}/text-to-speech",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={"text": translated_text, "voice": "female-young"}
        )
        
        return {
            "original": text,
            "translation": translated_text,
            "audio": speech_response.content
        }
    
    def create_voice_clone_lesson(self, teacher_audio, lesson_text):
        """Create personalized lessons with teacher's voice"""
        # Create voice clone from teacher sample
        clone_response = requests.post(
            f"{self.base_url}/voice-cloning/create",
            headers={"Authorization": f"Bearer {self.api_key}"},
            files={"audio": open(teacher_audio, "rb")},
            data={"name": "teacher_voice"}
        )
        
        voice_id = clone_response.json()["voice_id"]
        
        # Generate lesson audio with cloned voice
        lesson_response = requests.post(
            f"{self.base_url}/voice-cloning/synthesize",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "text": lesson_text,
                "voice_id": voice_id
            }
        )
        
        return lesson_response.content

# Usage example
learner = CantoneseLanguageLearning("YOUR_API_KEY")

# Practice pronunciation
result = learner.pronunciation_practice(
    "你好嗎？", 
    "student_pronunciation.wav"
)
print(f"Accuracy: {result['accuracy']}%")

# Translate and learn
translation = learner.translate_and_speak("How are you today?")
print(f"Translation: {translation['translation']}")`}
                </pre>
              </div>
            </div>

            {/* Content Localization */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Content Localization Pipeline
              </h3>
              <p className="text-gray-600 mb-6">
                Automate the process of localizing content for Cantonese-speaking audiences.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-cyan-400 overflow-x-auto">
{`import os
from pathlib import Path

class ContentLocalizer:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.cantonese.ai/v1"
    
    def localize_video_content(self, video_script, voice_style="professional"):
        """Localize video content for Cantonese audience"""
        
        # 1. Translate script
        translation_response = requests.post(
            f"{self.base_url}/translation",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "text": video_script,
                "source_language": "english",
                "target_language": "cantonese",
                "context": "video_narration"
            }
        )
        
        cantonese_script = translation_response.json()["translated_text"]
        
        # 2. Generate voiceover
        voiceover_response = requests.post(
            f"{self.base_url}/text-to-speech",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "text": cantonese_script,
                "voice": voice_style,
                "format": "wav",
                "speed": 0.9  # Slightly slower for clarity
            }
        )
        
        return {
            "original_script": video_script,
            "localized_script": cantonese_script,
            "voiceover_audio": voiceover_response.content
        }
    
    def batch_translate_documents(self, documents_folder):
        """Translate multiple documents in batch"""
        results = []
        
        for file_path in Path(documents_folder).glob("*.txt"):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            response = requests.post(
                f"{self.base_url}/translation",
                headers={"Authorization": f"Bearer {self.api_key}"},
                json={
                    "text": content,
                    "source_language": "english",
                    "target_language": "cantonese"
                }
            )
            
            translated_content = response.json()["translated_text"]
            
            # Save translated file
            output_path = file_path.parent / f"{file_path.stem}_cantonese.txt"
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(translated_content)
            
            results.append({
                "original_file": str(file_path),
                "translated_file": str(output_path),
                "word_count": len(content.split())
            })
        
        return results
    
    def create_audio_book(self, text_file, chapter_breaks=None):
        """Convert text to audiobook with chapter navigation"""
        with open(text_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if chapter_breaks:
            chapters = self.split_by_chapters(content, chapter_breaks)
        else:
            chapters = [content]
        
        audio_chapters = []
        
        for i, chapter in enumerate(chapters):
            response = requests.post(
                f"{self.base_url}/text-to-speech",
                headers={"Authorization": f"Bearer {self.api_key}"},
                json={
                    "text": chapter,
                    "voice": "narrator",
                    "format": "mp3",
                    "speed": 1.0
                }
            )
            
            chapter_file = f"chapter_{i+1}.mp3"
            with open(chapter_file, 'wb') as f:
                f.write(response.content)
            
            audio_chapters.append(chapter_file)
        
        return audio_chapters

# Usage
localizer = ContentLocalizer("YOUR_API_KEY")

# Localize video content
video_result = localizer.localize_video_content(
    "Welcome to our product demonstration. Today we'll show you..."
)

# Batch translate documents
translation_results = localizer.batch_translate_documents("./documents")

# Create audiobook
audiobook_chapters = localizer.create_audio_book(
    "novel.txt", 
    chapter_breaks=["Chapter", "第"]
)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Framework Integrations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* React Integration */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                React Hook
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-blue-300 overflow-x-auto">
{`import { useState, useCallback } from 'react';

export const useCantoneseAI = (apiKey) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const textToSpeech = useCallback(async (text, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/cantonese-ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, ...options })
      });
      
      if (!response.ok) throw new Error('TTS failed');
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      return audioUrl;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  return { textToSpeech, loading, error };
};`}
                </pre>
              </div>
            </div>

            {/* Node.js Express */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Express.js Middleware
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-green-300 overflow-x-auto">
{`const express = require('express');
const multer = require('multer');
const CantoneseAI = require('./cantonese-ai-client');

const app = express();
const upload = multer({ dest: 'uploads/' });
const ai = new CantoneseAI(process.env.CANTONESE_AI_API_KEY);

app.post('/api/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const result = await ai.speechToText(req.file.path);
    res.json({ text: result.text, confidence: result.confidence });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/speak', express.json(), async (req, res) => {
  try {
    const { text, voice = 'default' } = req.body;
    const audioBuffer = await ai.textToSpeech(text, { voice });
    
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length
    });
    res.send(audioBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            SDK Examples
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Coming Soon: Official SDKs
            </h3>
            <p className="text-gray-600 mb-4">
              We're working on official SDKs for popular programming languages:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🐍</div>
                <div className="font-medium">Python SDK</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-medium">JavaScript SDK</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">☕</div>
                <div className="font-medium">Java SDK</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🦀</div>
                <div className="font-medium">Rust SDK</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Want to be notified when SDKs are available? 
              <a href="mailto:admin@cantonese.ai" className="text-blue-600 hover:text-blue-800 ml-1">
                Contact us
              </a>
            </p>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our comprehensive documentation and start building with cantonese.ai today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/docs/quickstart" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Quickstart Guide
            </a>
            <a 
              href="/api-reference" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              API Reference
            </a>
          </div>
        </section>
      </main>
    </div>
  );
} 