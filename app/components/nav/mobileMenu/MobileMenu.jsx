'use client';
import styles from './MobileMenu.module.css';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useAppContext as MobileMenuContext } from '../../contexts/mobileMenuContext';
import { useAppContext as AuthenticationContext } from '../../contexts/authenticationContext';
import Link from 'next/link';
import NavLink from '../NavLink';

const MobileMenu = () => {
  const { openNav, setOpenNav } = MobileMenuContext();
  const { authentication } = AuthenticationContext();
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
      dotClassname: 'yellow',
    },
    {
      text: 'My Habits',
      href: '/habits',
      dotClassname: 'teal',
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
    <div className={`${styles.container} ${openNav && styles.showMenu}`}>
      <ul className={styles.menu}>
        {navlinks.map((link) => (
          <>
            <div className={styles.menuItemContainer}>
              <div
                className={`${styles.dot} ${styles[link.dotClassname]}`}
              ></div>
              <NavLink
                key={link.text}
                title={link.text}
                href={link.href}
                id={link.id}
                className={styles.menuItem}
                onClick={() => setOpenNav(!openNav)}
              />
            </div>
            <div className={styles.divider}></div>
          </>
        ))}
        {session.status === 'unauthenticated' && (
          <>
            <li className={styles.menuItemContainer}>
              <div className={`${styles.dot} ${styles.blue}`}></div>
              <Link
                href='/login'
                className={styles.menuItem}
                onClick={() => setOpenNav(!openNav)}
              >
                Login
              </Link>
            </li>
            <div className={styles.divider}></div>
            <li className={styles.menuItemContainer}>
              <div className={`${styles.dot} ${styles.purple}`}></div>
              <Link
                href='/signup'
                className={styles.menuItem}
                onClick={() => setOpenNav(!openNav)}
              >
                Get Started
              </Link>
            </li>
          </>
        )}
        {session.status === 'authenticated' && (
          <li
            className={`${styles.menuItemContainer} ${styles.menuItem}`}
            onClick={() => {
              signOut({ callbackUrl: '/login' });
              setOpenNav(!openNav);
              sessionStorage.setItem('authenticated', false);
            }}
          >
            <div className={`${styles.dot} ${styles.blue}`}></div>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
