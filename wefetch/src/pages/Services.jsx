import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Section({ children, className = '', id = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(f => f.classList.add('visible')); });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className} id={id}>{children}</section>;
}

const packages = [
  {
    color: '#3b7ef8',
    colorDim: 'rgba(59,126,248,0.1)',
    emoji: '🌍',
    name: 'CBAM Virtual Team',
    price: '₹3,49,999',
    period: '/ year',
    badge: 'Best for EU Exporters',
    includes: ['Carbon data collection', '3 CBAM reports per year', 'Emissions calculation', 'Dashboard access', 'Basic decarbonization support'],
  },
  {
    color: '#00c98d',
    colorDim: 'rgba(0,201,141,0.1)',
    emoji: '🏆',
    name: 'EcoVadis Team',
    price: 'Custom Pricing',
    period: '',
    badge: 'Best for Supplier Rating',
    includes: ['Documentation support', 'Score improvement strategy', 'Evidence preparation', 'Submission support', 'Continuous tracking'],
  },
  {
    color: '#f5c842',
    colorDim: 'rgba(245,200,66,0.1)',
    emoji: '📋',
    name: 'BRSR Team',
    price: 'Custom Pricing',
    period: '',
    badge: 'Best for Indian Compliance',
    includes: ['Full BRSR reporting', 'Data collection & validation', 'Policy & documentation', 'Submission-ready reports', 'Regulatory updates'],
  },
  {
    color: '#a066f5',
    colorDim: 'rgba(160,102,245,0.1)',
    emoji: '📊',
    name: 'ESG Team',
    price: 'Custom Pricing',
    period: '',
    badge: 'Best for Global Investors',
    includes: ['ESG framework reporting', 'GRI standards implementation', 'Impact metrics', 'Investor-ready reports', 'Continuous monitoring'],
  },
  {
    color: '#ff7043',
    colorDim: 'rgba(255,112,67,0.1)',
    emoji: '⚙️',
    name: 'Custom Team',
    price: 'Flexible Pricing',
    period: '',
    badge: 'Best for Multiple Frameworks',
    includes: ['CBAM + ESG + BRSR combination', 'Industry-specific setup', 'Dedicated account team', 'Full sustainability management', 'Custom dashboard'],
    featured: true,
  },
];

export default function Services() {
  return (
    <main className="services-page">

      {/* ===== HERO ===== */}
      <Section className="srv-hero">
        <div className="container">
          <div className="srv-hero-content">
            <div className="hero-eyebrow fade-up"><span className="pulse-dot" />Services &amp; Pricing</div>
            <h1 className="fade-up delay-1">Fix Your Sustainability<br /><span className="highlight">Reporting — The Right Way</span></h1>
            <p className="fade-up delay-2">Stop struggling with errors, delays, and rejected reports. Get a dedicated sustainability team that works with you all year.</p>
            <div className="hero-ctas fade-up delay-3">
              <Link to="/score" className="btn btn-primary btn-lg">Check Your Score →</Link>
              <a href="#book-demo" className="btn btn-outline btn-lg">Book a Demo</a>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== REAL PROBLEM ===== */}
      <Section className="problem-section bg-dark-2">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">The Real Problem</span>
            <h2>Why Companies Struggle with <span className="highlight">Sustainability</span></h2>
            <p style={{ maxWidth: '480px', margin: '10px auto 0' }}>Most companies try to manage sustainability in 3 ways — and all 3 fail.</p>
          </div>
          <div className="prob-grid">
            {[
              { icon: '👤', title: 'Internal Team', items: ['No specialised expertise', 'One person handling everything', 'High error rate'] },
              { icon: '🤝', title: 'Consultants', items: ['Expensive (₹30L+ per year)', 'One-time projects only', 'No continuous support'] },
              { icon: '📉', title: 'The Result', items: ['Reports get rejected', 'Data is outdated', 'Business opportunities lost'] },
            ].map(({ icon, title, items }, i) => (
              <div className={`prob-card fade-up delay-${i + 1}`} key={title}>
                <div className="prob-icon">{icon}</div>
                <h3>❌ {title}</h3>
                <ul className="check-list" style={{ marginTop: '14px' }}>
                  {items.map(it => <li key={it}><span className="cross-icon">✗</span>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== RISK CALLOUT ===== */}
      <Section className="risk-section bg-dark-3">
        <div className="container">
          <div className="risk-box fade-up">
            <h2>⚠️ Why This Is a <span className="highlight">Big Risk</span></h2>
            <div className="risk-grid">
              <ul className="check-list">
                <li><span className="cross-icon">✗</span>Buyers expect accurate &amp; verified reports</li>
                <li><span className="cross-icon">✗</span>Mistakes lead to rejection or costly delays</li>
                <li><span className="cross-icon">✗</span>Rework means extra cost + lost time</li>
                <li><span className="cross-icon">✗</span>No real-time data = no business visibility</li>
              </ul>
              <div className="risk-callout">
                <p>👉 You don't just need a report</p>
                <p className="risk-bold">👉 You need a <span className="highlight">system + team</span></p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SOLUTION ===== */}
      <Section className="solution-section bg-dark">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">The Solution</span>
            <h2>A Complete Sustainability Team —<br /><span className="highlight">On Subscription</span></h2>
          </div>
          <div className="solution-grid">
            <div className="solution-col-bad fade-up delay-1">
              <h4 style={{ color: 'var(--clr-danger)', marginBottom: '16px' }}>❌ Wefetch Replaces</h4>
              <ul className="check-list">
                <li><span className="cross-icon">✗</span>Hiring a full-time team</li>
                <li><span className="cross-icon">✗</span>Repeated consulting engagements</li>
              </ul>
            </div>
            <div className="solution-col-good fade-up delay-2">
              <h4 style={{ color: 'var(--clr-accent)', marginBottom: '16px' }}>✅ With</h4>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>A dedicated expert team</li>
                <li><span className="check-icon">✓</span>Continuous reporting support</li>
                <li><span className="check-icon">✓</span>Real-time dashboard</li>
                <li><span className="check-icon">✓</span>Verification-ready reports</li>
              </ul>
            </div>
          </div>
          <div className="solution-banner fade-up delay-3">
            One team. All frameworks. All year.
          </div>
          <div className="what-you-get fade-up delay-4">
            <h3 style={{ marginBottom: '20px' }}>What You <span className="highlight">Get</span></h3>
            <div className="get-grid">
              {[
                'End-to-end reporting (data → submission)',
                'Framework-specific experts',
                'Continuous updates — not one-time reports',
                'Lower rejection risk',
                'Buyer-ready data anytime',
              ].map(item => (
                <div className="get-item" key={item}>
                  <span className="check-icon">✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== PRICING PACKAGES ===== */}
      <Section className="pricing-section bg-dark-2" id="book-demo">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">Pricing</span>
            <h2>Choose the Team <span className="highlight">You Need</span></h2>
            <p style={{ maxWidth: '440px', margin: '10px auto 0' }}>Transparent, subscription-based pricing — no hidden consultant fees.</p>
          </div>
          <div className="pricing-grid">
            {packages.map(({ color, colorDim, emoji, name, price, period, badge, includes, featured }, i) => (
              <div
                className={`pricing-card fade-up delay-${(i % 3) + 1} ${featured ? 'pricing-featured' : ''}`}
                key={name}
                style={{ '--pkg-color': color, '--pkg-dim': colorDim }}
              >
                {featured && <div className="featured-badge">🌟 Most Popular</div>}
                <div className="pkg-header">
                  <span className="pkg-emoji">{emoji}</span>
                  <h3 className="pkg-name">{name}</h3>
                  <div className="pkg-badge">{badge}</div>
                  <div className="pkg-price">{price}<span className="pkg-period">{period}</span></div>
                </div>
                <ul className="pkg-includes">
                  {includes.map(item => (
                    <li key={item}><span style={{ color }}>✓</span> {item}</li>
                  ))}
                </ul>
                <Link to="/score" className="btn pkg-btn">Get Started →</Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== WHY CHOOSE WEFETCH ===== */}
      <Section className="why-section-srv bg-dark">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">Why Wefetch</span>
            <h2>Why Companies <span className="highlight">Choose Wefetch</span></h2>
          </div>
          <div className="why-srv-grid">
            {[
              { stat: '₹20–40L', label: 'Saved vs hiring a team', icon: '💰' },
              { stat: '0', label: 'Need to build internal team', icon: '🚫' },
              { stat: '100%', label: 'Reports ready for verification', icon: '✅' },
              { stat: '365', label: 'Days/year of active support', icon: '📅' },
              { stat: 'Live', label: 'Real-time compliance data', icon: '📊' },
            ].map(({ stat, label, icon }, i) => (
              <div className={`why-srv-card card fade-up delay-${(i % 4) + 1}`} key={label}>
                <div className="why-srv-icon">{icon}</div>
                <div className="why-srv-stat">{stat}</div>
                <div className="why-srv-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section className="srv-final-cta">
        <div className="container text-center">
          <span className="section-label fade-up">Get Started Today</span>
          <h2 className="fade-up delay-1">Don't Risk Rejection.<br /><span className="highlight">Don't Waste Money.</span></h2>
          <p className="fade-up delay-2" style={{ maxWidth: '520px', margin: '14px auto 40px' }}>
            Get your sustainability reporting done right — from day one.
          </p>
          <div className="final-ctas fade-up delay-3">
            <div>
              <Link to="/score" className="btn btn-primary btn-lg">Check Your Score →</Link>
              <p style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', marginTop: '8px' }}>Know where you stand</p>
            </div>
            <div>
              <a href="#book-demo" className="btn btn-outline btn-lg">Book a Demo</a>
              <p style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', marginTop: '8px' }}>Get your team started</p>
            </div>
          </div>
        </div>
      </Section>

    </main>
  );
}
