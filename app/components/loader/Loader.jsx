import styles from './page.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <p>Loading habits..</p>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
