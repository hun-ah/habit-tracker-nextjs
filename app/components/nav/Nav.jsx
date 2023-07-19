import '../../styles/nav.css';
import '../../styles/globals.css';
import NavLinks from './NavLinks';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='inner-container'>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
