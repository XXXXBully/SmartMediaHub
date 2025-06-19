import axios from 'axios';

const apiUrl = process.env.npm_package_config_deepseek_api_url || 'https://api.deepseek.com/v1';
const apiKey = process.env.npm_package_config_deepseek_api_key;

export async function deepseekGenerateText(prompt: string) {
  const res = await axios.post(
    `${apiUrl}/chat/completions`,
    {
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
}

export async function deepseekGenerateImage(prompt: string) {
  const res = await axios.post(
    `${apiUrl}/images/generations`,
    {
      model: 'deepseek-vision',
      prompt
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
} 