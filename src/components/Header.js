import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.svg';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <img src={ logo } alt="logo" />
      <nav>
        {pathname === '/favorites' ? (
          <Link to="/">Films</Link>
        ) : (
          <Link to="/favorites">Favorites</Link>
        )}
      </nav>
    </header>
  );
}
