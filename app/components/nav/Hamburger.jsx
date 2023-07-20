'use client';
import '../../styles/hamburger.css';
import { useAppContext } from '../contexts/mobileMenuContext';

const Hamburger = () => {
  const { openNav, setOpenNav } = useAppContext();

  return (
    <button
      className={`hamburger hamburger--squeeze ${openNav && 'is-active'}`}
      type='button'
      onClick={() => setOpenNav(!openNav)}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default Hamburger;
