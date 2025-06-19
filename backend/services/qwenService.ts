import axios from 'axios';

const apiUrl = process.env.npm_package_config_qwen_api_url || 'https://dashscope.aliyuncs.com/api/v1';
const apiKey = process.env.npm_package_config_qwen_api_key;

export async function qwenGenerateText(prompt: string) {
  const res = await axios.post(
    `${apiUrl}/services/aigc/text-generation/generation`,
    {
      model: 'qwen-turbo',
      input: { prompt }
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
}

export async function qwenGenerateImage(prompt: string) {
  const res = await axios.post(
    `${apiUrl}/services/aigc/text2image/image-synthesis`,
    {
      model: 'wanx-v1',
      prompt
    },
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );
  return res.data;
} 