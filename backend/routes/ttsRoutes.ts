import { Router } from 'express';
import { openaiTTS } from '../services/ttsService';

const router = Router();

router.post('/openai', async (req, res) => {
  const { text, voice, model } = req.body;
  try {
    const audio = await openaiTTS(text, voice, model);
    res.set('Content-Type', 'audio/mpeg');
    res.send(audio);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default router; 