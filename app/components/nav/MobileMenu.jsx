'use client';
import '../../styles/nav.css';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useAppContext } from '../contexts/mobileMenuContext';
import Link from 'next/link';
import NavLink from './NavLink';

const MobileMenu = () => {
  const { openNav, setOpenNav } = useAppContext();
  const session = useSession();

  const navlinks = [
    {
      text: 'Who is it for?',
      href: '/#who',
      dotClassname: 'dot',
    },
    {
      text: 'Why track your habits?',
      href: '/#why',
      dotClassname: 'dot yellow-dot',
    },
    {
      text: 'My Habits',
      href: '/habits',
      dotClassname: 'dot teal-dot',
    },
  ];

  useEffect(() => {
    // prevent scroll when mobile nav is open
    document.body.style.overflow = openNav && 'hidden';

    return () => {
      // restore default body overflow on unmount
      document.body.style.overflow = '';
    };
  }, [openNav]);

  return (
    <div className={`mobile-menu-container ${openNav && 'show-menu'}`}>
      <ul className='mobile-menu'>
        {navlinks.map((link) => (
          <>
            <div className='menu-item-container'>
              <div className={link.dotClassname}></div>
              <NavLink
                key={link.text}
                title={link.text}
                href={link.href}
                id={link.id}
                className='menu-item'
                onClick={() => setOpenNav(!openNav)}
              />
            </div>
            <div className='menu-divider'></div>
          </>
        ))}
        {session.status === 'unauthenticated' && (
          <>
            <li className='menu-item-container'>
              <div className='dot blue-dot'></div>
              <Link
                href='/login'
                className='menu-item'
                onClick={() => setOpenNav(!openNav)}
              >
                Login
              </Link>
            </li>
            <div className='menu-divider'></div>
            <li className='menu-item-container'>
              <div className='dot purple-dot'></div>
              <Link
                href='/signup'
                className='menu-item'
                onClick={() => setOpenNav(!openNav)}
              >
                Get Started
              </Link>
            </li>
          </>
        )}
        {session.status === 'authenticated' && (
          <li
            className='menu-item-container menu-item'
            onClick={() => {
              signOut({ callbackUrl: '/login' });
              setOpenNav(!openNav);
            }}
          >
            <div className='dot blue-dot'></div>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
