import { Request, Response } from 'express';
import Statistics from '../models/Statistics';

export const getTrends = async (req: Request, res: Response) => {
  const { userId, platform } = req.query;
  const stats = await Statistics.find({ userId, platform }).sort({ createdAt: -1 }).limit(10);
  res.json(stats);
}; 