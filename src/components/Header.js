import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.svg';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <img src={ logo } alt="logo" />
      <nav>
        {pathname === '/favorites' ? (
          <Link
            className="link"
            to="/"
          >
            <i className="ri-movie-2-fill icon" />
            Films

          </Link>
        ) : (
          <Link
            className="link"
            to="/favorites"
          >
            <i className="ri-heart-fill icon" />
            Favorites

          </Link>
        )}
      </nav>
    </header>
  );
}
