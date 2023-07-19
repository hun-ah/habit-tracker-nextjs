'use client';
import '../styles/habits.css';
import TodaysDate from '../components/habits/TodaysDate';
import HabitsLeft from '../components/habits/HabitsLeft';
import HabitForm from '../components/habits/HabitForm';
import Card from '../components/habits/Card';
import Loader from '../components/loader/Loader';
import NoHabits from '../components/habits/NoHabits';
import LoadingCard from '../components/habits/LoadingCard';
import CompletedMsg from '../components/habits/CompletedMsg';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const HabitPage = () => {
  const session = useSession();
  const router = useRouter();
  const userName =
    session.data &&
    session.data.user.name.charAt(0).toUpperCase() +
      session.data.user.name.slice(1);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/habits?username=${
      session.data && session.data.user.email
    }`,
    fetcher
  );

  // determine how many habits left
  const filtered =
    data &&
    data.filter((habit) => habit.lastCompleted !== currentDate.toISOString());
  let habitsLeft = data && filtered.length;

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/login');
    }
  }, [router, session]);

  if (session.status === 'loading') {
    return <Loader />;
  }

  if (session.status === 'authenticated') {
    return (
      <div className='flex-column'>
        <div className='inner-container'>
          <div className='habit-container'>
            <div className='top-text'>
              <TodaysDate />
              <HabitsLeft habitsLeft={habitsLeft} isLoading={isLoading} />
            </div>
            <div className='left-container'>
              <div className='bottom-text'>
                <h1 className='shorten-width'>{userName}&apos;s habits</h1>
                <h2 className='shorten-width'>
                  Start with 1-2 easily achievable habits and build from there!
                </h2>
                <HabitForm mutate={mutate} />
              </div>
            </div>
            <div className='right-container'>
              {data && data.length > 0 && habitsLeft === 0 && <CompletedMsg />}
              {data && data.length < 1 && <NoHabits />}
              {isLoading ? (
                <>
                  <LoadingCard />
                  <LoadingCard />
                </>
              ) : (
                data &&
                data.map((habit) => (
                  <Card
                    key={habit._id}
                    habitId={habit._id}
                    name={habit.habitName}
                    streak={habit.streak}
                    lastCompleted={habit.lastCompleted}
                    currentDate={currentDate}
                    mutate={mutate}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HabitPage;
