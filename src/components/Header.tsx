import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="GH-primary-FC.png" 
            alt="Grabthar's Hammer" 
            className="logo"
          />
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/shows" 
            className={`nav-link ${isActive('/shows') ? 'active' : ''}`}
          >
            SHOWS
          </Link>
          <Link 
            to="/setlist" 
            className={`nav-link ${isActive('/setlist') ? 'active' : ''}`}
          >
            SETLIST
          </Link>
          <Link 
            to="/gallery" 
            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
          >
            GALLERY
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
