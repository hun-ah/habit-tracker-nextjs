import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return new NextResponse('Email is already registered', {
        status: 409,
      });
    }
    // If no existing user found, create a new user
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
  // const { name, email, password } = await request.json();
  // await connect();
  // const hashedPassword = await bcrypt.hash(password, 5);
  // const newUser = new User({
  //   name,
  //   email,
  //   password: hashedPassword,
  // });
  // try {
  //   await newUser.save();
  //   return new NextResponse('User has been created', {
  //     status: 201,
  //   });
  // } catch (err) {
  //   return new NextResponse(err.message, {
  //     status: 500,
  //   });
  // }
};
