'use client';
import Input from '../input/Input';
import Button from '../Button';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const HabitForm = ({ mutate }) => {
  const session = useSession();
  const [habit, setHabit] = useState('');
  const username = session.data && session.data.user.email;

  const handleInputChange = (e) => {
    const { value } = e.target;

    setHabit(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHabit('');
    try {
      const res = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          habitName: habit.charAt(0).toUpperCase() + habit.slice(1),
          streak: 0,
          lastCompleted: null,
          lastCompletedMs: null,
        }),
      });
      res.status === 201 && console.log('habit created');
      mutate();
    } catch (err) {
      // setError(err);
      console.log(err);
    }
  };

  return (
    <form className='habit-form' onSubmit={handleSubmit}>
      <Input
        type='text'
        name='habits'
        value={habit}
        placeholder='Enter new habit'
        className='habit-input'
        handleInputChange={handleInputChange}
      />
      <Button
        text='Add Habit'
        className='primary-btn habit-btn'
        formInputs={habit}
      />
    </form>
  );
};

export default HabitForm;
