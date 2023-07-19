import Image from 'next/image';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className='error-container'>
      <div className='not-found-text'>
        <h1>Awwww sh-</h1>
        <h2>How did you find your way here?</h2>
        <Button
          text='Back to safety'
          href='/'
          className='primary-btn nav-btn'
          link={true}
        />
      </div>
      <Image src='/404.svg' alt='404 error' width={400} height={300} />
    </div>
  );
}
