'use client';
import styles from './Main.module.css';
import Button from '../../Button';
import Card from '../card/Card';
import { useAppContext } from '../../contexts/authenticationContext';

const cardContent = [
  { title: 'Easily make new habits', blurb: 'Choose 1-2 to start' },
  { title: 'Mark them as complete', blurb: 'Get those habits done' },
  { title: 'Build your daily streak', blurb: 'Keep it consistent!' },
];

const Main = () => {
  const { authentication } = useAppContext();

  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>Habit Tracker</h1>
        <h2>Stay aligned with your goals, daily!</h2>
      </div>
      {!authentication && (
        <Button
          text='Get Started'
          className='primary-btn main-btn'
          link
          href='/signup'
        />
      )}
      <div className={styles.rectangle}></div>
      <div className={styles.cardContainer}>
        {cardContent.map((obj) => (
          <Card
            key={obj.title}
            card={styles.cardMain}
            title={obj.title}
            blurb={obj.blurb}
            cardTitle={styles.cardTitle}
            cardBlurb={styles.cardBlurb}
            img={'/union.svg'}
            alt={'checkmark logo'}
            width={26}
            height={26}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
