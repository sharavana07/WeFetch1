import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">We<span>fetch</span></div>
          <p>Your virtual sustainability team. Expert-led CBAM, ESG, BRSR &amp; EcoVadis reporting delivered as a subscription.</p>
        </div>
        <div className="footer-col">
          <h5>Pages</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services &amp; Pricing</Link></li>
            <li><Link to="/score">Check Your Score</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Frameworks</h5>
          <ul>
            <li><Link to="/services">CBAM Reporting</Link></li>
            <li><Link to="/services">EcoVadis Support</Link></li>
            <li><Link to="/services">BRSR Reporting</Link></li>
            <li><Link to="/services">ESG / GRI</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Wefetch. All rights reserved.</span>
        <span>sustainability@wefetch.in</span>
      </div>
    </footer>
  );
}
