import '../../styles/why.css';
import Card from './Card';

const cardContent = [
  {
    title: 'Motivating',
    blurb: 'Getting your habits done builds forward momentum.',
    img: '/icon_motivation.svg',
    alt: 'fast forward symbol',
    titleColor: 'title-color-teal',
  },
  {
    title: 'Satisfying',
    blurb: 'Checking things off a list and seeing your streak feels good!',
    img: '/icon_satisfied.svg',
    alt: 'smiley face symbol',
    titleColor: 'title-color-purple',
  },
  {
    title: 'Empowering',
    blurb:
      'Completing daily tasks brings a sense of accomplishment and productivity.',
    img: '/icon_empowered.svg',
    alt: 'lightning bolt symbol',
    titleColor: 'title-color-red',
  },
  {
    title: 'Visual Progression',
    blurb: 'See your progress continue to grow over time.',
    img: '/icon_visual.svg',
    alt: 'eye symbol',
    titleColor: 'title-color-blue',
  },
];

const Why = () => {
  return (
    <div className='why-container' id='why'>
      <div className='left-content'>
        <h4>Why track your habits?</h4>
        <p className='why-text'>
          Forming new habits is a marathon, not a sprint. It takes time to see
          the desired results of your hard work - it doesn&apos;t happen
          overnight... in a week... or even in a month.
        </p>
        <p className='why-text'>
          Tracking your habits gives you immediate feedback that you are on the
          right path, while you wait for the rewards of all the longterm work
          you are putting in.
        </p>
      </div>
      <div className='right-content'>
        {cardContent.map((obj) => (
          <Card
            key={obj.title}
            card={'card-why'}
            title={obj.title}
            blurb={obj.blurb}
            cardTitle={'card-title-why'}
            cardBlurb={'card-blurb-why'}
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
