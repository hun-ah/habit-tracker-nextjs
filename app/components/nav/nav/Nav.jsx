import styles from './Nav.module.css';
import NavLinks from '../navLinks/NavLinks';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className='inner-container'>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
