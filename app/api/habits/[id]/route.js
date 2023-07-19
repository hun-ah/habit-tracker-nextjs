import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Habit from '@/models/Habit';

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Habit.findOneAndDelete({ _id: id });

    return new NextResponse('Habit has been deleted', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { id } = params;
  const body = await req.json();

  try {
    await connect();

    await Habit.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          streak: body.streak,
          lastCompleted: body.lastCompleted,
          lastCompletedMs: body.lastCompletedMs,
        },
      }
    ).lean();

    return new NextResponse('Habit has been completed', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
