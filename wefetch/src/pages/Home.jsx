import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {
  CheckIcon, CrossIcon, BanIcon, AlertTriangleIcon, DollarIcon,
  UsersIcon, RefreshIcon, TrendUpIcon, ZapIcon, GlobeIcon,
  TrophyIcon, ClipboardIcon, BarChartIcon, GearIcon, CalendarIcon,
  CircleDotIcon, ShieldIcon,
} from '../components/Icons';

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
        <div className="hero-inner container align-center text-center">
          <div className="hero-content">
            <h1 className="fade-up delay-1">
              Don't Hire a <span className="highlight">Sustainability Team.</span><br />
              Subscribe to One.
            </h1>
            <p className="hero-sub fade-up delay-2" style={{ margin: '0 auto 32px auto' }}>
              Save ₹30L+ and get expert-led sustainability reporting all year round.
              Create third-party verification-ready reports without hiring, confusion, or expensive consultants.
            </p>
            <ul className="check-list hero-checks fade-up delay-3" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '850px', margin: '0 auto 36px auto' }}>
              <li><CheckIcon /> Dedicated experts</li>
              <li><CheckIcon /> Reports that don't get rejected</li>
              <li><CheckIcon /> Continuous support</li>
              <li><CheckIcon /> Live dashboard to track progress</li>
            </ul>
            <div className="hero-ctas fade-up delay-4" style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '0 auto 20px auto' }}>
              <Link to="/services" className="btn btn-outline btn-lg" style={{ backgroundColor: 'transparent', color: 'var(--clr-text)', border: '1px solid var(--clr-border)' }}>Check Your Score</Link>
              <Link to="/services#book-demo" className="btn btn-primary btn-lg" style={{ backgroundColor: '#0f6b5c', color: '#fff' }}>Book a Demo</Link>
            </div>
            <p className="cta-hint fade-up delay-4" style={{ marginBottom: '60px' }}>See how ready your company is · No credit card required</p>
          </div>

          {/* Abstract green shapes in the background of dashboard */}
          <div className="hero-dashboard-wrap fade-up delay-3">
            <div className="hero-blob left-blob"></div>
            <div className="hero-blob right-blob"></div>

            <div className="hero-card dashboard-hero-card">
              <div className="hero-card-header">
                <div className="hero-mac-dots"><span className="red"></span><span className="yellow"></span><span className="green"></span></div>
                <div className="hero-card-title-center"><BarChartIcon className="inline-icon" /> Sustainability Dashboard</div>
              </div>
              <div className="stat-grid">
                {[
                  { num: '₹30L+', label: 'Avg. savings vs hiring' },
                  { num: '100%', label: 'Verification ready' },
                  { num: '15+', label: 'Frameworks covered' },
                  { num: '0', label: 'Rejected reports' },
                ].map(({ num, label }) => (
                  <div className="stat-item text-left" key={label} style={{ background: '#fff', border: '1px solid var(--clr-border)' }}>
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
              <div className="trust-strip justify-center">
                <div className="avatar-stack">
                  {['AK', 'SR', 'PM'].map(i => <div key={i} className="avatar">{i}</div>)}
                </div>
                Expert team activated
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SECTION 2 – Virtual Team ===== */}
      <Section className="team-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h2 className="fade-up">Meet Your Virtual<br /><span className="highlight">Sustainability Team</span></h2>
          <p className="team-sub fade-up delay-1">Wefetch gives you a complete sustainability team — without hiring or repeated consulting costs. One subscription, all year round.</p>
          <div className="team-grid mt-4">
            <div className="team-features">
              {[
                { icon: <UsersIcon />, title: 'Dedicated Expert Team', desc: 'Certified sustainability professionals assigned to your company and frameworks.' },
                { icon: <RefreshIcon />, title: 'Continuous Reporting Support', desc: 'Not a one-time project. We work all year — collecting data, updating reports, staying compliant.' },
                { icon: <ShieldIcon />, title: 'Verification-Ready Reports', desc: 'Every report is built to pass third-party verification. No surprises, no rejections.' },
                { icon: <TrendUpIcon />, title: 'Real-Time Tracking Dashboard', desc: 'See progress live. Buyer-ready data available anytime, anywhere.' },
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
              <p className="mini-head"><BarChartIcon className="inline-icon" /> Compliance Progress Tracker</p>
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
                <span style={{ color: 'var(--clr-accent)' }}><CircleDotIcon className="inline-icon" /></span> Team Active &nbsp;·&nbsp; <span><CalendarIcon className="inline-icon" /></span> Next Report: 14 days
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
              { n: 1, title: 'Choose Your Requirement', desc: 'Select the frameworks relevant to your business.', tags: ['CBAM', 'ESG', 'BRSR', 'EcoVadis', 'TCFD'] },
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

      {/* ===== SECTION 5 – Testimonials ===== */}
      <Section className="testimonial-section bg-dark-2">
        <div className="container">
          <div className="testimonial-container fade-up">
            <div className="testimonial-quote-box">
              <h3 className="testimonial-quote">
                "In the IT function, Lenovo is a big part of our sustainability drive. From energy-efficient products to sustainable packaging to offsetting carbon emissions, Lenovo is helping us become more sustainable."
              </h3>
              <div className="testimonial-author">Mark Connop</div>
              <div className="testimonial-role">Client Services Manager, University of Birmingham</div>
            </div>

            <div className="testimonial-glance">
              <h3>At-a-Glance</h3>
              <div className="glance-list">
                <div className="glance-item"><strong>Customer:</strong> University of Birmingham</div>
                <div className="glance-item"><strong>Industry:</strong> <span className="glance-link">Education</span></div>
                <div className="glance-item"><strong>Product Family:</strong> <span className="glance-link">Desktops</span> <span className="glance-link">Laptops</span></div>
                <div className="glance-item"><strong>Services:</strong> <span className="glance-link">Sustainability Services</span></div>
                <div className="glance-item"><strong>Region:</strong> <span className="glance-link">Europe</span></div>
                <div className="glance-item"><strong>Processor:</strong> <span className="glance-link">AMD</span> <span className="glance-link">Intel</span></div>
                <div className="glance-item" style={{ lineHeight: 1.5 }}><strong>Topic:</strong> <span className="glance-link">Flexibility and Agility</span> <span className="glance-link">Productivity and Collaboration</span> <span className="glance-link">Sustainability</span></div>
              </div>
            </div>
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
                  { title: 'Simple subscription pricing', desc: '90% lower cost than hiring a team' },
                ].map(({ title, desc }, i) => (
                  <div className={`why-item fade-up delay-${(i % 4) + 1}`} key={title}>
                    <div className="why-bullet"><CheckIcon /></div>
                    <div><h4>{title}</h4><p>{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-box fade-up delay-2">
              <div className="comp-head">
                <div className="comp-bad"><CrossIcon className="inline-icon" /> Old Way</div>
                <div className="comp-good"><CheckIcon className="inline-icon" /> Wefetch</div>
              </div>
              {[
                ['Hire full-time team', 'Subscription team'],
                ['₹30L+ per engagement', '90% low cost'],
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
            <span><CheckIcon className="inline-icon" /> No credit card required</span>
            <span><CheckIcon className="inline-icon" /> Setup in days</span>
            <span><CheckIcon className="inline-icon" /> Cancel anytime</span>
          </div>
        </div>
      </Section>

    </main>
  );
}
