import { Request, Response } from 'express';
import PlatformAccount from '../models/PlatformAccount';

export const addPlatformAccount = async (req: Request, res: Response) => {
  const { userId, platform, username } = req.body;
  const newAccount = new PlatformAccount({ userId, platform, username });
  await newAccount.save();
  res.status(201).json(newAccount);
};

export const deletePlatformAccount = async (req: Request, res: Response) => {
  const { id } = req.params;
  await PlatformAccount.findByIdAndDelete(id);
  res.status(200).json({ message: '账号删除成功' });
}; 