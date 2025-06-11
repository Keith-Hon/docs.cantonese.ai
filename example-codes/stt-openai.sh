curl -X POST "https://stt-api.cantonese.ai/v1/audio/transcriptions" \
-H "Authorization: Bearer XXXXXXX" \
-F "file=@audio.wav" \
-F "language=zh"