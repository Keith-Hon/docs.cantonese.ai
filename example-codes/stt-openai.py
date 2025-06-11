from openai import OpenAI

client = OpenAI(base_url="https://stt-api.cantonese.ai/v1/", api_key="XXXXXXX")

audio_file = open("audio.wav", "rb")
transcript = client.audio.transcriptions.create(file=audio_file, model="", language="zh")
print(transcript.text)