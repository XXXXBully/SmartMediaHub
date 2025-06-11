import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['article', 'video'], required: true },
  fileUrl: { type: String },
  platforms: [{ type: String }],
  scheduledTime: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Content', contentSchema); 