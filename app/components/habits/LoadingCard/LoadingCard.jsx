import styles from './LoadingCard.module.css';

const LoadingCard = () => {
  return (
    <div className={styles.border}>
      <div className={styles.card}>
        <div className={styles.animation}></div>
      </div>
    </div>
  );
};

export default LoadingCard;
