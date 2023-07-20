import styles from './NoHabits.module.css';
import Image from 'next/image';

const NoHabits = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/no_habits.svg'
        alt='no habits left'
        width={200}
        height={160}
      />
      <p className={styles.text}>No habits to see here... yet!</p>
    </div>
  );
};

export default NoHabits;
