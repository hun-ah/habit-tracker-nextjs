'use client';
import styles from './page.module.css';
import TodaysDate from '../components/habits/TodaysDate';
import HabitsLeft from '../components/habits/HabitsLeft/HabitsLeft';
import HabitForm from '../components/habits/HabitForm/HabitForm';
import Card from '../components/habits/card/Card';
import Loader from '../components/loader/Loader';
import NoHabits from '../components/habits/NoHabits/NoHabits';
import LoadingCard from '../components/habits/LoadingCard/LoadingCard';
import CompletedMsg from '../components/habits/CompletedMsg/CompletedMsg';
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
    `https://habittracker-nextjs-hwm.vercel.app/api/habits?username=${
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
          <div className={styles.container}>
            <div className={styles.topText}>
              <TodaysDate />
              <HabitsLeft habitsLeft={habitsLeft} isLoading={isLoading} />
            </div>
            <div className={styles.left}>
              <div className={styles.bottomText}>
                <h1 className='shorten-width'>{userName}&apos;s habits</h1>
                <h2 className='shorten-width'>
                  Start with 1-2 easily achievable habits and build from there!
                </h2>
                <HabitForm mutate={mutate} />
              </div>
            </div>
            <div className={styles.right}>
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
