import '../../styles/main.css';
import Button from '../Button';
import Card from './Card';

const cardContent = [
  { title: 'Easily make new habits', blurb: 'Choose 1-2 to start' },
  { title: 'Mark them as complete', blurb: 'Get those habits done' },
  { title: 'Build your daily streak', blurb: 'Keep it consistent!' },
];

const Main = () => {
  return (
    <main className='main-container'>
      <div className='heading-text'>
        <h1>Habit Tracker</h1>
        <h2>Stay aligned with your goals, daily!</h2>
      </div>
      <Button
        text='Get Started'
        className='primary-btn main-btn'
        link
        href='/signup'
      />
      <div className='rectangle'></div>
      <div className='card-container'>
        {cardContent.map((obj) => (
          <Card
            key={obj.title}
            card={'card-main'}
            title={obj.title}
            blurb={obj.blurb}
            cardTitle={'card-title-main'}
            cardBlurb={'card-blurb-main'}
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
