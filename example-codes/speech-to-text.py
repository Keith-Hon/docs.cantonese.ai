import requests

url = "https://paid-api.cantonese.ai"

payload = {
    "api_key": "YOUR_API_KEY",
    "with_timestmap": "false",
    "with_diarization": "false"
}
files=[
  ('data',('audio.wav',open('ABSOLUTE_FILE_PATH','rb'),'audio/wav'))
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)