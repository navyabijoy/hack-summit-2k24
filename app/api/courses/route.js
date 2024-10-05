import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import Course from '../../../models/Course';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    await clientPromise;
    await mongoose.connect(process.env.MONGODB_URI);
    const courses = await Course.find({ userId });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}