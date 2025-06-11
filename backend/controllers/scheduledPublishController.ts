import { Request, Response } from 'express';
import Content from '../models/Content';

export const addScheduledTask = async (req: Request, res: Response) => {
  const { userId, title, content, type, fileUrl, platforms, scheduledTime } = req.body;
  const newContent = new Content({ userId, title, content, type, fileUrl, platforms, scheduledTime });
  await newContent.save();
  res.status(201).json(newContent);
};

export const deleteScheduledTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Content.findByIdAndDelete(id);
  res.status(200).json({ message: '定时任务删除成功' });
}; 