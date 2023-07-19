'use client';
import Link from 'next/link';

const NavLink = ({ title, href, className, onClick }) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      <li>{title}</li>
    </Link>
  );
};

export default NavLink;
