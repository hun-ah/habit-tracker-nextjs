import Main from './components/home/Main';
import Who from './components/home/Who';
import Why from './components/home/Why';

const HomePage = () => {
  return (
    <div className='flex-column'>
      <div className='inner-container'>
        <Main />
      </div>
      <Who />
      <div className='inner-container'>
        <Why />
      </div>
    </div>
  );
};

export default HomePage;
