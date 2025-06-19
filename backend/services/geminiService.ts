import axios from 'axios';

const apiUrl = process.env.npm_package_config_gemini_api_url || 'https://generativelanguage.googleapis.com/v1beta';
const apiKey = process.env.npm_package_config_gemini_api_key;

export async function geminiGenerateText(prompt: string, model = 'models/gemini-pro') {
  const res = await axios.post(
    `${apiUrl}/${model}:generateContent?key=${apiKey}`,
    {
      contents: [{ parts: [{ text: prompt }] }]
    }
  );
  return res.data;
} 