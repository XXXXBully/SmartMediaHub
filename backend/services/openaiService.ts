import axios from 'axios';

const apiUrl = process.env.npm_package_config_openai_api_url || 'https://api.openai.com/v1';
const apiKey = process.env.npm_package_config_openai_api_key;

export async function openaiGenerateText(prompt: string, model = 'gpt-3.5-turbo') {
  const res = await axios.post(
    `${apiUrl}/chat/completions`,
    {
      model,
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
}

export async function openaiGenerateImage(prompt: string, model = 'dall-e-3') {
  const res = await axios.post(
    `${apiUrl}/images/generations`,
    {
      model,
      prompt
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
} 