'use client';
import '../../styles/nav.css';
import Link from 'next/link';
import NavLink from './NavLink';
import Button from '../Button';
import Hamburger from './Hamburger';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

const navlinks = [
  { text: 'Who is it for?', href: '/#who' },
  { text: 'Why track your habits?', href: '/#why' },
  { text: 'My Habits', href: '/habits' },
];

const NavLinks = () => {
  const session = useSession();
  const [loginSignupState, setLoginSignupState] = useState({
    authenticated: true,
    loginText: 'Login',
    logoutText: 'Logout',
    getStarted: 'Get Started',
  });

  return (
    <ul className='nav-links-container'>
      <div className='nav-left-content'>
        <li className='logo'>
          <Link href='/'>habittracker</Link>
        </li>
        <div className='nav-links'>
          {navlinks.map((link) => (
            <NavLink
              key={link.text}
              title={link.text}
              href={link.href}
              id={link.id}
              className='nav-link'
            />
          ))}
        </div>
      </div>
      <div className='nav-links'>
        {session.status === 'unauthenticated' && (
          <>
            <li className='nav-link'>
              <Link href='/login' className='nav-link'>
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
            className='nav-link'
            onClick={() => {
              signOut({ callbackUrl: '/login' });
              setLoginSignupState((prevState) => ({
                ...prevState,
                authenticated: !prevState.authenticated,
              }));
            }}
          >
            Logout
          </li>
        )}
        {session.status === 'loading' && (
          <>
            <li className='nav-link'>
              {loginSignupState.authenticated
                ? loginSignupState.loginText
                : loginSignupState.logoutText}
            </li>
            {loginSignupState.authenticated && (
              <Button
                text={loginSignupState.getStarted}
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
