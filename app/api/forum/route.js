import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import Forum from '../../../models/Forum';
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    await clientPromise;
    await mongoose.connect(process.env.MONGODB_URI);
    const posts = await Forum.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    await clientPromise;
    await mongoose.connect(process.env.MONGODB_URI);
    const newPost = new Forum(body);
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, action, data } = body;
    await clientPromise;
    await mongoose.connect(process.env.MONGODB_URI);
    
    let updatedPost;
    
    switch (action) {
      case 'like':
        updatedPost = await Forum.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
        break;
      case 'comment':
        updatedPost = await Forum.findByIdAndUpdate(id, { $push: { comments: data } }, { new: true });
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
    
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}