'use client';
import { useAppContext } from '../contexts/mobileMenuContext';
import '../../styles/nav.css';

const Hamburger = () => {
  const { openNav, setOpenNav } = useAppContext();

  return (
    <button
      className={`hamburger hamburger--squeeze ${openNav && 'is-active'}`}
      type='button'
      onClick={() => setOpenNav(!openNav)}
    >
      <span className='hamburger-box '>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default Hamburger;
