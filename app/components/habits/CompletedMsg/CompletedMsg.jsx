import styles from './CompletedMsg.module.css';

const CompletedMsg = () => {
  return (
    <div className={styles.container}>
      <span className={styles.completed}>
        Congratulations! You have completed all of today&apos;s habits!
      </span>
    </div>
  );
};

export default CompletedMsg;
