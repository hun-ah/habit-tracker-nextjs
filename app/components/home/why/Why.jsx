import styles from './page.module.css';
import Card from '../card/Card';

const cardContent = [
  {
    title: 'Motivating',
    blurb: 'Getting your habits done builds forward momentum.',
    img: '/icon_motivation.svg',
    alt: 'fast forward symbol',
    titleColor: 'teal',
  },
  {
    title: 'Satisfying',
    blurb: 'Checking things off a list and seeing your streak feels good!',
    img: '/icon_satisfied.svg',
    alt: 'smiley face symbol',
    titleColor: 'purple',
  },
  {
    title: 'Empowering',
    blurb:
      'Completing daily tasks brings a sense of accomplishment and productivity.',
    img: '/icon_empowered.svg',
    alt: 'lightning bolt symbol',
    titleColor: 'red',
  },
  {
    title: 'Visual Progression',
    blurb: 'See your progress continue to grow over time.',
    img: '/icon_visual.svg',
    alt: 'eye symbol',
    titleColor: 'blue',
  },
];

const Why = () => {
  return (
    <div className={styles.container} id='why'>
      <div className={styles.left}>
        <h4 className={styles.heading}>Why track your habits?</h4>
        <p className={styles.text}>
          Forming new habits is a marathon, not a sprint. It takes time to see
          the desired results of your hard work - it doesn&apos;t happen
          overnight... in a week... or even in a month.
        </p>
        <p className={styles.text}>
          Tracking your habits gives you immediate feedback that you are on the
          right path, while you wait for the rewards of all the longterm work
          you are putting in.
        </p>
      </div>
      <div className={styles.right}>
        {cardContent.map((obj) => (
          <Card
            key={obj.title}
            card={styles.card}
            title={obj.title}
            blurb={obj.blurb}
            cardTitle={styles.cardTitle}
            cardBlurb={styles.cardBlurb}
            titleColor={obj.titleColor}
            img={obj.img}
            alt={obj.alt}
            width={34}
            height={34}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;
