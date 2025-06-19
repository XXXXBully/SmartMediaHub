import axios from 'axios';

const openaiApiUrl = process.env.npm_package_config_openai_api_url || 'https://api.openai.com/v1';
const openaiApiKey = process.env.npm_package_config_openai_api_key;

export async function openaiTTS(text: string, voice = 'alloy', model = 'tts-1') {
  const res = await axios.post(
    `${openaiApiUrl}/audio/speech`,
    {
      model,
      input: text,
      voice
    },
    {
      headers: { 'Authorization': `Bearer ${openaiApiKey}` },
      responseType: 'arraybuffer'
    }
  );
  return res.data;
} 