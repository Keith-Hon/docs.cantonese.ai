const OpenAI = require('openai');
const fs = require('fs');

if (!globalThis.File) {
    globalThis.File = require('node:buffer').File;
}

async function main() {
    const client = new OpenAI({
        baseURL: 'https://stt-api.cantonese.ai/v1/',
        apiKey: 'XXXXXXX'
    });

    const audioFile = fs.createReadStream('audio.wav');
    const transcript = await client.audio.transcriptions.create({
        file: audioFile,
        language: 'zh'
    });
    console.log(transcript.text);
}

main().catch(console.error);