import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const openaiApiUrl = process.env.npm_package_config_openai_api_url || 'https://api.openai.com/v1';
const openaiApiKey = process.env.npm_package_config_openai_api_key;

export async function openaiASR(audioFilePath: string, model = 'whisper-1') {
  const form = new FormData();
  form.append('file', fs.createReadStream(audioFilePath));
  form.append('model', model);

  const res = await axios.post(
    `${openaiApiUrl}/audio/transcriptions`,
    form,
    {
      headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${openaiApiKey}`
      }
    }
  );
  return res.data;
} 