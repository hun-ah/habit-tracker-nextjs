'use client';
import Button from '../Button';

const Card = ({
  name,
  streak,
  mutate,
  habitId,
  lastCompleted,
  currentDate,
}) => {
  // current date in ms
  const currentDateMs = currentDate.getTime();

  // get yesterdays date for undoHabit
  const isoDate = new Date(currentDate.toISOString());
  const prevDate = new Date(isoDate.getTime() - 24 * 60 * 60 * 1000);

  const completedHabit = lastCompleted === currentDate.toISOString();

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
          lastCompletedMs: currentDateMs,
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
          lastCompletedMs: currentDateMs - 86400000,
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
    <div
      className={completedHabit ? 'habit-card completed-habit' : 'habit-card'}
    >
      <div className='card-top'>
        <span className='habit-title'>{name}</span>
        <div className='streak-container'>
          <span className='streak-text'>Streak </span>
          <span className='streak-text streak'>
            {streak} {streak == 1 ? 'day' : 'days'}
          </span>
        </div>
      </div>
      <div className='divider'></div>
      <div className='card-bottom'>
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
