import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ---- Reusable scroll-observe wrapper ---- */
function Section({ children, className = '', id = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.fade-up').forEach(fe => fe.classList.add('visible')); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className} id={id}>{children}</section>;
}

export default function Home() {
  return (
    <main className="home">

      {/* ===== HERO ===== */}
      <Section className="hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <div className="hero-eyebrow fade-up">
              <span className="pulse-dot" />
              Sustainability as a Service
            </div>
            <h1 className="fade-up delay-1">
              Don't Hire a<br />
              <span className="highlight">Sustainability Team.</span><br />
              Subscribe to One.
            </h1>
            <p className="hero-sub fade-up delay-2">
              Save ₹30L+ and get expert-led sustainability reporting all year round.
              Create third-party verification-ready reports without hiring, confusion, or expensive consultants.
            </p>
            <ul className="check-list hero-checks fade-up delay-3">
              <li><span className="check-icon">✅</span> Dedicated sustainability experts</li>
              <li><span className="check-icon">✅</span> Reports that don't get rejected</li>
              <li><span className="check-icon">✅</span> Continuous support — not one-time</li>
              <li><span className="check-icon">✅</span> Live dashboard to track progress</li>
            </ul>
            <div className="hero-ctas fade-up delay-4">
              <Link to="/score" className="btn btn-primary btn-lg">Check Your Score →</Link>
              <Link to="/services" className="btn btn-outline btn-lg">Book a Demo</Link>
            </div>
            <p className="cta-hint fade-up delay-4">See how ready your company is · No credit card required</p>
          </div>

          <div className="hero-card fade-up delay-2">
            <div className="hero-card-title">📊 Sustainability Dashboard</div>
            <div className="stat-grid">
              {[
                { num: '₹30L+', label: 'Avg. savings vs hiring' },
                { num: '100%', label: 'Verification ready' },
                { num: '5', label: 'Frameworks covered' },
                { num: '0', label: 'Rejected reports' },
              ].map(({ num, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
            <div className="trust-strip">
              <div className="avatar-stack">
                {['AK','SR','PM'].map(i => <div key={i} className="avatar">{i}</div>)}
              </div>
              Expert team activated
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 2 – Hidden Cost ===== */}
      <Section className="pain-section bg-dark-3">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">The Problem</span>
            <h2>The Hidden Cost of Sustainability<br />Done the <span className="highlight">Wrong Way</span></h2>
          </div>
          <div className="pain-grid">
            {[
              { icon: '🚫', title: 'No Sustainability Team', desc: 'Most companies don\'t have a dedicated sustainability team, leaving reporting to chance.' },
              { icon: '⚠️', title: 'Untrained Internal Handling', desc: 'Work is managed by staff without expertise, leading to costly errors and missed requirements.' },
              { icon: '💸', title: 'High Consultant Costs', desc: 'Consultants charge ₹30L+ per year for one-time work with no continuous support.' },
              { icon: '❌', title: 'Report Rejections', desc: 'Reports get rejected during verification, wasting time, money, and opportunities.' },
            ].map(({ icon, title, desc }, i) => (
              <div className={`pain-card fade-up delay-${i + 1}`} key={title}>
                <div className="pain-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="result-banner fade-up">
            <span>⚡</span>
            <p><strong>Result:</strong> Loss of time, money, and valuable business opportunities — year after year.</p>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 3 – Virtual Team ===== */}
      <Section className="team-section bg-dark-2">
        <div className="container">
          <span className="section-label fade-up">The Solution</span>
          <h2 className="fade-up delay-1">Meet Your Virtual<br /><span className="highlight">Sustainability Team</span></h2>
          <p className="team-sub fade-up delay-2">Wefetch gives you a complete sustainability team — without hiring or repeated consulting costs. One subscription, all year round.</p>
          <div className="team-grid">
            <div className="team-features">
              {[
                { icon: '👥', title: 'Dedicated Expert Team', desc: 'Certified sustainability professionals assigned to your company and frameworks.' },
                { icon: '🔄', title: 'Continuous Reporting Support', desc: 'Not a one-time project. We work all year — collecting data, updating reports, staying compliant.' },
                { icon: '✅', title: 'Verification-Ready Reports', desc: 'Every report is built to pass third-party verification. No surprises, no rejections.' },
                { icon: '📈', title: 'Real-Time Tracking Dashboard', desc: 'See progress live. Buyer-ready data available anytime, anywhere.' },
              ].map(({ icon, title, desc }, i) => (
                <div className={`feature-item fade-up delay-${i + 1}`} key={title}>
                  <div className="feature-icon">{icon}</div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="team-visual fade-up delay-2">
              <p className="mini-head">📊 Compliance Progress Tracker</p>
              {[
                { label: 'CBAM Reporting', pct: 92 },
                { label: 'BRSR Compliance', pct: 78 },
                { label: 'EcoVadis Score', pct: 85 },
                { label: 'ESG GRI Standards', pct: 67 },
                { label: 'Data Accuracy', pct: 98 },
              ].map(({ label, pct }) => (
                <div className="progress-row" key={label}>
                  <span className="progress-label">{label}</span>
                  <div className="progress-bar-wrap"><div className="progress-bar" style={{ width: `${pct}%` }} /></div>
                  <span className="progress-pct">{pct}%</span>
                </div>
              ))}
              <div className="trust-strip" style={{ marginTop: '20px' }}>
                <span>🟢</span> Team Active &nbsp;·&nbsp; <span>📅</span> Next Report: 14 days
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 4 – How It Works ===== */}
      <Section className="how-section bg-dark">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">Process</span>
            <h2>How It <span className="highlight">Works</span></h2>
            <p className="section-sub">From onboarding to submission in four simple steps.</p>
          </div>
          <div className="steps-grid">
            {[
              { n: 1, title: 'Choose Your Requirement', desc: 'Select the frameworks relevant to your business.', tags: ['CBAM','ESG','BRSR','EcoVadis','TCFD'] },
              { n: 2, title: 'Get Your Virtual Team', desc: 'Certified experts are assigned directly to your company.' },
              { n: 3, title: 'We Handle Everything', desc: 'Data collection, reporting, compliance and implementation — done for you.' },
              { n: 4, title: 'Submit With Confidence', desc: 'Your report is fully ready for third-party verification.' },
            ].map(({ n, title, desc, tags }, i) => (
              <div className={`step fade-up delay-${i + 1}`} key={n}>
                <div className="step-num">{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {tags && <div className="step-tags">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SECTION 5 – Services ===== */}
      <Section className="services-section bg-dark-2">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">What We Cover</span>
            <h2>Our <span className="highlight">Services</span></h2>
            <p className="section-sub">End-to-end sustainability reporting across all major frameworks.</p>
          </div>
          <div className="services-grid">
            {[
              { emoji: '🌍', name: 'CBAM Reporting', desc: 'EU Carbon Border Adjustment — compliant reports for exporters.' },
              { emoji: '🏆', name: 'EcoVadis Support', desc: 'Score improvement strategy, evidence prep & submission support.' },
              { emoji: '📋', name: 'BRSR Reporting', desc: 'Full Business Responsibility & Sustainability Report for Indian compliance.' },
              { emoji: '📊', name: 'ESG / GRI Reporting', desc: 'Global standards implementation with investor-ready reports.' },
              { emoji: '⚙️', name: 'Custom Teams', desc: 'A tailored team built around your framework mix and industry needs.' },
            ].map(({ emoji, name, desc }, i) => (
              <div className={`service-card card fade-up delay-${(i % 4) + 1}`} key={name}>
                <span className="service-emoji">{emoji}</span>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '44px' }}>
            <Link to="/services" className="btn btn-outline">View All Packages &amp; Pricing →</Link>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 6 – Why Wefetch ===== */}
      <Section className="why-section bg-dark" id="why-wefetch">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="section-label fade-up">Why Wefetch</span>
              <h2 className="fade-up delay-1">The Smarter Way to<br />Stay <span className="highlight">Compliant</span></h2>
              <div className="why-list">
                {[
                  { title: 'No need to hire a team', desc: 'Get the expertise you need without the overhead of full-time employees.' },
                  { title: 'No repeated consulting costs', desc: 'One flat subscription replaces expensive one-time consultant engagements.' },
                  { title: 'Always up-to-date reports', desc: 'We proactively update your reports as regulations and standards evolve.' },
                  { title: 'Lower rejection risk', desc: 'Expert-built reports mean fewer errors, fewer rejections, fewer headaches.' },
                  { title: 'Simple subscription pricing', desc: 'Predictable annual cost. No hidden fees. Starting at ₹3,49,999/year.' },
                ].map(({ title, desc }, i) => (
                  <div className={`why-item fade-up delay-${(i % 4) + 1}`} key={title}>
                    <div className="why-bullet">✅</div>
                    <div><h4>{title}</h4><p>{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-box fade-up delay-2">
              <div className="comp-head">
                <div className="comp-bad">❌ Old Way</div>
                <div className="comp-good">✅ Wefetch</div>
              </div>
              {[
                ['Hire full-time team', 'Subscription team'],
                ['₹30L+ per engagement', 'From ₹3.5L / year'],
                ['One-time consultants', 'Year-round support'],
                ['Risk of rejection', 'Verification-ready'],
                ['Outdated data', 'Real-time dashboard'],
                ['Siloed expertise', 'Multi-framework team'],
              ].map(([bad, good]) => (
                <div className="comp-row" key={bad}>
                  <div className="comp-cell-bad">{bad}</div>
                  <div className="comp-cell-good">{good}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 7 – Final CTA ===== */}
      <Section className="final-cta-section">
        <div className="container text-center">
          <span className="section-label fade-up">Get Started</span>
          <h2 className="fade-up delay-1">Don't build a sustainability team.<br /><span className="highlight">Subscribe to one.</span></h2>
          <p className="final-sub fade-up delay-2">Stop struggling with sustainability reporting. Get your virtual team today and stay compliant all year round.</p>
          <div className="final-ctas fade-up delay-3">
            <div>
              <Link to="/score" className="btn btn-primary btn-lg">Check Your Score →</Link>
              <p style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', marginTop: '8px' }}>See how ready your company is</p>
            </div>
            <div>
              <Link to="/services" className="btn btn-outline btn-lg">Book a Demo</Link>
              <p style={{ fontSize: '0.78rem', color: 'var(--clr-text-muted)', marginTop: '8px' }}>Get your virtual team started</p>
            </div>
          </div>
          <div className="trust-notes fade-up delay-4">
            <span>✅ No credit card required</span>
            <span>✅ Setup in days</span>
            <span>✅ Cancel anytime</span>
          </div>
        </div>
      </Section>

    </main>
  );
}
