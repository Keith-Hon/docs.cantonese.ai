curl -X POST "https://paid-api.cantonese.ai" \
  -F "api_key=YOUR_API_KEY" \
  -F "with_timestmap=false" \
  -F "with_diarization=false" \
  -F "data=@audio.wav;type=audio/wav"