import styles from './HabitsLeft.module.css';

const HabitsLeft = ({ habitsLeft, isLoading }) => {
  const displayHabitsLeft = `${
    isLoading ? `${styles.loading}` : `${styles.circle}`
  }`;
  return (
    <span className={styles.container}>
      Habits left today
      <span className={displayHabitsLeft}>{habitsLeft}</span>
    </span>
  );
};

export default HabitsLeft;
