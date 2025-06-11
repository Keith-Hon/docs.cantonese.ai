import requests
import json

url = "https://cantonese.ai/api/tts"

payload = json.dumps({
  "api_key": "YOUR_API_KEY",
  "text": "你今日食咗飯未？",  
  "frame_rate": "24000",
  "speed": 1,
  "duration": 2,
  "pitch": 0,
  "language": "cantonese",
  "output_extension": "wav",
  "voice_id": "2725cf0f-efe2-4132-9e06-62ad84b2973d",
  "should_enhance": False,
  "should_convert_from_simplified_to_traditional": True
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

with open('output.wav', 'wb') as f:
    f.write(response.content);