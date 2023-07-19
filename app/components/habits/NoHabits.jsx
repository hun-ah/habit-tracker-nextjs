import '../../styles/habits.css';
import Image from 'next/image';

const NoHabits = () => {
  return (
    <div className='no-habits'>
      <Image
        src='/no_habits.svg'
        alt='no habits left'
        width={200}
        height={160}
      />
      <p className='no-habits-text'>No habits to see here... yet!</p>
    </div>
  );
};

export default NoHabits;
