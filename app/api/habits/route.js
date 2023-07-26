import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Habit from '@/models/Habit';

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get('username');
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  const todaysDateMs = todaysDate.getTime();
  const timezoneOffsetInMilliseconds =
    todaysDate.getTimezoneOffset() * 60 * 1000;
  const utcTimestamp = todaysDateMs - timezoneOffsetInMilliseconds;
  console.log(utcTimestamp);

  try {
    await connect();

    await Habit.updateMany(
      {
        $expr: {
          $gte: [{ $subtract: [utcTimestamp, '$lastCompletedMs'] }, 172800000],
        },
      },
      {
        $set: {
          streak: 0,
        },
      }
    );

    const habits = await Habit.find({ username })
      .sort({ lastCompleted: 1 })
      .lean();
    const habitsCount = await Habit.countDocuments({ username });

    return new NextResponse(JSON.stringify(habits, habitsCount), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const newHabit = new Habit(body);

  try {
    await connect();

    await newHabit.save();

    return new NextResponse('Habit has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
