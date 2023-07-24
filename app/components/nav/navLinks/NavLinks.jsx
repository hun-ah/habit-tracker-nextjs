'use client';
import styles from './NavLinks.module.css';
import Link from 'next/link';
import NavLink from '../NavLink';
import Button from '../../Button';
import Hamburger from '../Hamburger';
import { useSession, signOut } from 'next-auth/react';
import { useAppContext } from '../../contexts/authenticationContext';

const navlinks = [
  { text: 'Who is it for?', href: '/#who' },
  { text: 'Why track your habits?', href: '/#why' },
  { text: 'My Habits', href: '/habits' },
];

const NavLinks = () => {
  const session = useSession();
  const { authentication } = useAppContext();
  console.log(authentication);

  return (
    <ul className={styles.container}>
      <div className={styles.left}>
        <li className={styles.logo}>
          <Link href='/'>habittracker</Link>
        </li>
        <div className={styles.links}>
          {navlinks.map((link) => (
            <NavLink
              key={link.text}
              title={link.text}
              href={link.href}
              id={link.id}
              className={styles.link}
            />
          ))}
        </div>
      </div>
      <div className={styles.links}>
        {session.status === 'unauthenticated' && (
          <>
            <li className={styles.link}>
              <Link href='/login' className={styles.link}>
                Login
              </Link>
            </li>
            <li>
              <Button
                text='Get Started'
                className='primary-btn nav-btn'
                link
                href='/signup'
              />
            </li>
          </>
        )}
        {session.status === 'authenticated' && (
          <li
            className={styles.link}
            onClick={() => {
              signOut({ callbackUrl: '/login' });
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('authenticated', false);
              }
            }}
          >
            Logout
          </li>
        )}
        {session.status === 'loading' && (
          <>
            <li className={styles.link}>
              {authentication ? 'Logout' : 'Login'}
            </li>
            {!authentication && (
              <Button
                text='Get Started'
                className='primary-btn nav-btn'
                link
                href='/signup'
              />
            )}
          </>
        )}
      </div>
      <Hamburger />
    </ul>
  );
};

export default NavLinks;
