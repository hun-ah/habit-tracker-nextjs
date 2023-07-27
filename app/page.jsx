import Head from 'next/head';
import Main from './components/home/main/Main';
import Who from './components/home/who/Who';
import Why from './components/home/why/Why';

const HomePage = () => {
  return (
    <>
      <Head>
        <meta property='og:image' content='https://ibb.co/Yp9M2Xm' />
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
    </>
  );
};

export default HomePage;
