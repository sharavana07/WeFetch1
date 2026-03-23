import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); document.body.style.overflow = ''; }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(o => {
      document.body.style.overflow = !o ? 'hidden' : '';
      return !o;
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">We<span>fetch</span></Link>
          <div className="navbar-links">
            <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link to="/score" className={pathname === '/score' ? 'active' : ''}>Check Score</Link>
          </div>
          <div className="navbar-actions">
            <Link to="/score" className="btn btn-outline">Check Your Score</Link>
            <Link to="/services#book-demo" className="btn btn-primary">Book Demo</Link>
          </div>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/score">Check Score</Link>
        <Link to="/score" className="btn btn-outline">Check Your Score</Link>
        <Link to="/services" className="btn btn-primary">Book Demo</Link>
      </div>
    </>
  );
}
