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
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
            
            <div className="nav-item-dropdown">
              <Link to="/services" className={pathname === '/services' ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services <i className="las la-angle-down"></i>
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-inner" style={{ gridTemplateColumns: 'repeat(3, 1fr)', padding: '40px' }}>
                  <div className="mega-col">
                    <h4>EU Compliance</h4>
                    <div className="mega-link-list">
                      <Link to="/services" state={{ tab: 0 }} className="mega-link">
                        <span className="mega-icon-wrap bg-cbam"><i className="las la-globe-europe"></i></span> CBAM V-team for EU Exporters
                      </Link>
                    </div>
                  </div>
                  <div className="mega-col">
                    <h4>Supplier Ratings</h4>
                    <div className="mega-link-list">
                      <Link to="/services" state={{ tab: 1 }} className="mega-link">
                        <span className="mega-icon-wrap" style={{background: '#00B894', color: '#fff'}}><i className="las la-trophy"></i></span> EcoVadis Vteam
                      </Link>
                    </div>
                  </div>
                  <div className="mega-col">
                    <h4>Global Disclosures</h4>
                    <div className="mega-link-list">
                      <Link to="/services" state={{ tab: 2 }} className="mega-link">
                        <span className="mega-icon-wrap" style={{background: '#34d399', color: '#fff'}}><i className="las la-clipboard-list"></i></span> ESG Virtual Teams
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar inside Mega Menu */}
                <div className="mega-footer">
                  {/* Included the line you requested in case it was intentional, blended tastefully into the footer area */}
                  <span style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', marginAuto: 0, marginRight: 'auto', alignSelf: 'center' }}>
                    <i className="las la-magic"></i> If you want, we can do a second pass to match shade values even more tightly.
                  </span>
                  <Link to="/contact" className="mega-footer-link"><i className="las la-comments"></i> Contact Sales</Link>
                  <Link to="/support" className="mega-footer-link"><i className="las la-headset"></i> Support</Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className={pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
            <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
            <Link to="/blogs" className={pathname.startsWith('/blogs') || pathname.startsWith('/emisson-leakage') ? 'active' : ''}>Blogs</Link>
            <Link to="/tools" className={pathname === '/tools' ? 'active' : ''}>Free Tools</Link>
          </div>
          <div className="navbar-actions">
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
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/tools">Free Tools</Link>
        <Link to="/services#book-demo" className="btn btn-primary">Book Demo</Link>
      </div>
    </>
  );
}
