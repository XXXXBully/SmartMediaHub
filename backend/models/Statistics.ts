import mongoose from 'mongoose';

const statisticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, required: true },
  views: { type: Number, default: 0 },
  reads: { type: Number, default: 0 },
  fans: { type: Number, default: 0 },
  earnings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Statistics', statisticsSchema); 