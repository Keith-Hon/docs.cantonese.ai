const path = require('path');
const fs = require('fs');

const url = "https://cantonese.ai/api/tts";

const payload = {
  api_key: "YOUR_API_KEY",
  text: "你今日食咗飯未？",
  frame_rate: "24000",
  speed: 1,
  duration: 2,
  pitch: 0,
  language: "cantonese",
  output_extension: "wav",
  voice_id: "2725cf0f-efe2-4132-9e06-62ad84b2973d",
  should_enhance: false,
  should_convert_from_simplified_to_traditional: true,
  should_return_timestamp: false
};

(async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const outputPath = path.join(__dirname, 'output.wav');
    fs.writeFileSync(outputPath, buffer);
    
  } else {
    console.error('Error:', response.status);
  }
})();