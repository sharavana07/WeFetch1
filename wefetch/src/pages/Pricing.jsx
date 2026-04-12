import { useEffect, useRef } from 'react';
import './Pricing.css';
import { ArrowRightIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

function Section({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(f => f.classList.add('visible')); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className}>{children}</section>;
}

export default function Pricing() {
  return (
    <main className="pricing-page">
      <Section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content text-center">
            <h1 className="fade-up delay-1">Transparent <span className="highlight">Pricing</span></h1>
            <p className="hero-sub fade-up delay-2">
              Flexible plans tailored for your sustainability journey. Choose the right level of support for your global compliance needs.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pricing-plans bg-dark-2">
        <div className="container">
          <div className="plans-grid fade-up delay-1">
            
            {/* CBAM Team */}
            <div className="plan-card">
              <h3>CBAM Team</h3>
              <p className="plan-desc">End-to-End CBAM Compliance. Fully Managed.</p>
              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">3.5L</span>
                <span className="period">/year</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> Product & process mapping</li>
                <li><i className="las la-check"></i> Emissions calculation</li>
                <li><i className="las la-check"></i> Quarterly reporting support</li>
                <li><i className="las la-check"></i> Verification-ready documentation</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">Get Started</Link>
            </div>

            {/* EcoVadis V-Team */}
            <div className="plan-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>EcoVadis V-Team</h3>
              <p className="plan-desc">End-to-End EcoVadis Assessment. Fully Managed.</p>
              <div className="plan-price" style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
                <span className="amount text-lg" style={{ fontSize: '1.5rem', fontWeight: '500' }}>Custom Pricing</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> Setup & Gap Analysis</li>
                <li><i className="las la-check"></i> Data & Document Management</li>
                <li><i className="las la-check"></i> Response Optimization</li>
                <li><i className="las la-check"></i> Submission & Review handling</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Price</Link>
            </div>

            {/* Custom Team */}
            <div className="plan-card">
              <h3>Custom Team</h3>
              <p className="plan-desc">A fully dedicated ESG setup tailored to your organization.</p>
              <div className="plan-price" style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
                <span className="amount text-lg" style={{ fontSize: '1.5rem', fontWeight: '500' }}>Custom Pricing</span>
              </div>
              <ul className="plan-features">
                <li><i className="las la-check"></i> Dedicated ESG Manager</li>
                <li><i className="las la-check"></i> Multiple frameworks managed</li>
                <li><i className="las la-check"></i> Monthly ESG reporting</li>
                <li><i className="las la-check"></i> Continuous tracking</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">Get Price</Link>
            </div>

          </div>
        </div>
      </Section>

      <Section className="pricing-faq bg-dark">
        <div className="container text-center fade-up delay-1">
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="faq-sub">Can't find the answer you're looking for? Reach out to our customer support team.</p>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change my plan later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be applied in the next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>What is a Virtual Team Member?</h4>
              <p>A virtual team member is a dedicated sustainability expert from Wefetch assigned entirely to your compliance workflows.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}