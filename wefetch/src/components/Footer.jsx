import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer custom-footer">
      <div className="footer-container">
        
        {/* Newsletter Bar */}
        <div className="newsletter-bar">
          <div className="newsletter-text">
            <h3>Sign up to our newsletter</h3>
            <p>Get climate news, policy changes, and company updates with The Wefetch Digest!</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-newsletter">Subscribe</button>
          </form>
        </div>

        {/* Main Grid */}
        <div className="footer-inner-grid">
          <div className="footer-brand">
            <div className="footer-logo">We<span>fetch</span></div>
            <p>Unified enterprise platform to empower climate action©</p>
          </div>
          
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li><Link to="/services">Netzero</Link></li>
              <li><Link to="/services">Water</Link></li>
              <li><Link to="/services">Energy</Link></li>
              <li><Link to="/services">Enviro</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Solution</h5>
            <ul>
              <li><Link to="/services">BRSR</Link></li>
              <li><Link to="/services">CSRD</Link></li>
              <li><Link to="/services">CBAM Importer</Link></li>
              <li><Link to="/services">CBAM Exporter</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/tools">Varsity</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/partner">Our Partner</Link></li>
              <li><Link to="/become-partner">Become a Partner</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Pricing</h5>
            <ul>
              <li><Link to="/pricing">NetZero Pricing</Link></li>
              <li><Link to="/pricing">Water Pricing</Link></li>
              <li><Link to="/pricing">Energy Pricing</Link></li>
              <li><Link to="/pricing">Enviro Pricing</Link></li>
              <li><Link to="/pricing">CBAM Importer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 Wefetch | All rights reserved
          </div>
          <div className="footer-legal">
            <Link to="/terms">Terms</Link>
            <Link to="/warranty">Warranty</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/refund">Refund</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/ewaste">E-Waste</Link>
            <Link to="/gdpr">GDPR</Link>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/wefetchtechnologies/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="lab la-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/share/1AtbzUNm6e/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
              <i className="lab la-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/wefetchtechnologies?igsh=MXNiZ2tyNmZ2NnRncw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
              <i className="lab la-instagram"></i>
            </a>
            <a href="mailto:contact@wefetch.tech" aria-label="Email" className="social-icon">
              <i className="las la-envelope"></i>
            </a>
            <button className="nav-subscribe-btn">
              <i className="las la-bell" style={{marginRight: '6px'}}></i>Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
