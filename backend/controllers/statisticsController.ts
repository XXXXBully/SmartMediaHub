import { Request, Response } from 'express';
import Statistics from '../models/Statistics';

export const getStatistics = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const stats = await Statistics.find({ userId });
  res.json(stats);
};

export const updateStatistics = async (req: Request, res: Response) => {
  const { userId, platform, views, reads, fans, earnings } = req.body;
  const stats = await Statistics.findOneAndUpdate(
    { userId, platform },
    { views, reads, fans, earnings },
    { new: true, upsert: true }
  );
  res.json(stats);
}; 