import Head from 'next/head';
import Main from './components/home/main/Main';
import Who from './components/home/who/Who';
import Why from './components/home/why/Why';

const HomePage = () => {
  return (
    <div>
      <Head>
        <meta
          property='og:image'
          content='https://i.ibb.co/3BXq1v2/255960174-a73e6aeb-bf7b-492b-9c2d-d5ed174ce423.png'
        />
      </Head>
      <div className='flex-column'>
        <div className='inner-container'>
          <Main />
        </div>
        <Who />
        <div className='inner-container'>
          <Why />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
