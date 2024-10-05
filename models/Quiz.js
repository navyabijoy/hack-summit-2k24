import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  title: String,
  score: Number,
  userId: String,
});

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);