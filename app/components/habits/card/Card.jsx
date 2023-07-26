'use client';
import styles from './Card.module.css';
import Button from '../../Button';

const Card = ({
  name,
  streak,
  mutate,
  habitId,
  lastCompleted,
  currentDate,
}) => {
  // current date in ms utc time
  const currentDateMs = currentDate.getTime();
  const timezoneOffsetInMilliseconds =
    currentDate.getTimezoneOffset() * 60 * 1000;
  const utcTimestamp = currentDateMs - timezoneOffsetInMilliseconds;

  // get yesterdays date for undoHabit
  const isoDate = new Date(currentDate.toISOString());
  const prevDate = new Date(isoDate.getTime() - 24 * 60 * 60 * 1000);

  const completedHabit = lastCompleted === currentDate.toISOString();

  // style for habit card
  const cardStyles = `${
    completedHabit ? `${styles.card} ${styles.completed}` : styles.card
  }`;

  const deleteHabit = async (id) => {
    try {
      await fetch(`/api/habits/${id}`, {
        method: 'DELETE',
      });
      mutate();
      console.log('habit deleted');
    } catch (err) {
      console.log(err);
    }
  };

  const completeHabit = async (id) => {
    try {
      await fetch(`/api/habits/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          streak: (streak += 1),
          lastCompleted: currentDate,
          lastCompletedMs: utcTimestamp,
          func: 'completeHabit',
        }),
      });
      mutate();
      console.log('habit completed');
    } catch (err) {
      console.log(err);
    }
  };

  const undoHabit = async (id) => {
    try {
      await fetch(`/api/habits/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          streak: (streak -= 1),
          lastCompleted: prevDate,
          lastCompletedMs: utcTimestamp - 86400000,
          func: 'undoHabit',
        }),
      });
      mutate();
      console.log('habit undone');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cardStyles}>
      <div className={styles.top}>
        <span className={styles.title}>{name}</span>
        <div className={styles.streakContainer}>
          <span className={styles.streakText}>Streak </span>
          <span className={`${styles.streakText} ${styles.streak}`}>
            {streak} {streak == 1 ? 'day' : 'days'}
          </span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottom}>
        <Button
          text='Abandon habit'
          className='abandon-btn'
          onClick={() => deleteHabit(habitId)}
        />
        <Button
          text={completedHabit ? 'Undo' : 'Complete'}
          className={completedHabit ? 'undo-btn' : 'primary-btn complete-btn'}
          onClick={() =>
            completedHabit ? undoHabit(habitId) : completeHabit(habitId)
          }
        />
      </div>
    </div>
  );
};

export default Card;
