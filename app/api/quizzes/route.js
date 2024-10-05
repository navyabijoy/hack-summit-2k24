import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Quiz from '../../../models/Quiz';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    const quizzes = await Quiz.find({ userId });
    return NextResponse.json(quizzes);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}