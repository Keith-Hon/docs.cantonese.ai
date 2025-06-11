const formData = new FormData();
formData.append('api_key', 'YOUR_API_KEY');
formData.append('with_timestmap', 'false');
formData.append('with_diarization', 'false');
formData.append('data', audioFile, 'audio.wav');

const response = await fetch('https://paid-api.cantonese.ai', {
  method: 'POST',
  body: formData
});

const data = await response.json();
console.log(data);