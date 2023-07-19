import './styles/loader.css';

export default function Loading() {
  return (
    <div className='loader-container'>
      <p>Loading...</p>
      <div className='loading-spinner'></div>
    </div>
  );
}
