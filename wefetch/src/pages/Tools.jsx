import { useEffect, useRef } from 'react';
import './Tools.css';
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

export default function Tools() {
  return (
    <main className="tools-page">
      <Section className="tools-hero">
        <div className="container">
          <div className="tools-hero-content text-center">
            <h1 className="fade-up delay-1">Free <span className="highlight">Tools</span></h1>
            <p className="hero-sub fade-up delay-2">
              Accelerate your sustainability journey with our collection of free calculators, scorecards, and compliance readiness assessments.
            </p>
          </div>
        </div>
      </Section>

      <Section className="tools-grid-section bg-dark-2">
        <div className="container">
          <div className="tools-grid fade-up delay-1">
            <div className="tool-card">
              <div className="tool-icon">
                <i className="las la-calculator"></i>
              </div>
              <h3>CBAM Calculator</h3>
              <p>Estimate your Carbon Border Adjustment Mechanism (CBAM) tax liability based on your import volumes and product categories.</p>
              <Link to="#" className="text-link">Try Calculator <i className="las la-arrow-right"></i></Link>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className="las la-clipboard-list"></i>
              </div>
              <h3>BRSR Readiness Check</h3>
              <p>Assess your current sustainability reporting maturity and identify gaps before the SEBI BRSR mandate deadline.</p>
              <a href="https://calendly.com/balajiselvarajofficial/wefetch-demo?month=2026-04" target="_blank" rel="noopener noreferrer" className="text-link">Take Assessment <i className="las la-arrow-right"></i></a>
            </div>

            <div className="tool-card">
              <div className="tool-icon">
                <i className="las la-clipboard-check"></i>
              </div>
              <h3>Custom ESG Report Readiness Score Check</h3>
              <p>Check your custom ESG report’s readiness score for third-party verification and reduce the risk of rejection with our free assessment</p>
              <a href="https://calendly.com/balajiselvarajofficial/wefetch-demo?month=2026-04" target="_blank" rel="noopener noreferrer" className="text-link">Take Assessment <i className="las la-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}