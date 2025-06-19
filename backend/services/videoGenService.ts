import axios from 'axios';

export async function audioToVideo(audioUrl: string, prompt: string, apiUrl: string, apiKey: string) {
  const res = await axios.post(
    apiUrl,
    {
      audio_url: audioUrl,
      prompt
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
}

export async function imageToVideo(imageUrl: string, prompt: string, apiUrl: string, apiKey: string) {
  const res = await axios.post(
    apiUrl,
    {
      image_url: imageUrl,
      prompt
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
} 