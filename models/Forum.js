import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ForumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },
  isPinned: { type: Boolean, default: false },
  comments: [CommentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Forum || mongoose.model('Forum', ForumSchema);