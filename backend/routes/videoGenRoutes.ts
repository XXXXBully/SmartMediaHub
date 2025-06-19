import { Router } from 'express';
import { audioToVideo, imageToVideo } from '../services/videoGenService';

const router = Router();

router.post('/audio2video', async (req, res) => {
  const { audioUrl, prompt, apiUrl, apiKey } = req.body;
  try {
    const result = await audioToVideo(audioUrl, prompt, apiUrl, apiKey);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/image2video', async (req, res) => {
  const { imageUrl, prompt, apiUrl, apiKey } = req.body;
  try {
    const result = await imageToVideo(imageUrl, prompt, apiUrl, apiKey);
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 