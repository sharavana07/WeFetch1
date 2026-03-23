import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Score.css';

function Section({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(f => f.classList.add('visible')); });
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className}>{children}</section>;
}

export default function Score() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="score-page">

      {/* ===== HERO ===== */}
      <Section className="score-hero">
        <div className="container">
          <div className="score-hero-inner">

            <div className="score-content fade-up">
              <div className="coming-tag">🚀 Coming Soon</div>
              <h1>Check Your<br /><span className="highlight">Sustainability Score</span></h1>
              <p className="score-sub">
                Find out exactly how prepared your company is for sustainability reporting.
                Get a personalised readiness score across CBAM, BRSR, ESG, and EcoVadis — in minutes.
              </p>

              {!submitted ? (
                <form className="score-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="score-input"
                    />
                    <button type="submit" className="btn btn-primary">Notify Me →</button>
                  </div>
                  <p className="form-hint">Be the first to access the score calculator when it launches.</p>
                </form>
              ) : (
                <div className="submit-success fade-up">
                  <span>🎉</span>
                  <div>
                    <strong>You're on the list!</strong>
                    <p>We'll email you at <strong>{email}</strong> the moment the score calculator goes live.</p>
                  </div>
                </div>
              )}

              <div className="score-bullets fade-up delay-2">
                {['Free to use', 'Takes under 5 minutes', 'Personalised report', 'No account needed'].map(b => (
                  <span key={b} className="score-bullet">✅ {b}</span>
                ))}
              </div>
            </div>

            <div className="score-visual fade-up delay-2">
              <div className="score-card-preview">
                <div className="score-card-title">📊 Your Score Preview</div>
                <div className="score-dial-wrap">
                  <div className="score-dial">
                    <div className="dial-number">—</div>
                    <div className="dial-label">Readiness Score</div>
                  </div>
                </div>
                <div className="score-bars">
                  {[
                    { label: 'CBAM Readiness', pct: 0 },
                    { label: 'BRSR Compliance', pct: 0 },
                    { label: 'ESG Maturity', pct: 0 },
                    { label: 'EcoVadis Potential', pct: 0 },
                  ].map(({ label }) => (
                    <div className="score-bar-row" key={label}>
                      <span className="score-bar-label">{label}</span>
                      <div className="score-bar-wrap"><div className="score-bar-fill locked" /></div>
                      <span className="score-bar-val">?</span>
                    </div>
                  ))}
                </div>
                <div className="locked-overlay">
                  <div className="lock-icon">🔒</div>
                  <p>Complete the assessment<br />to unlock your score</p>
                  <span className="launch-tag">Launching Soon</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ===== WHAT YOU'LL GET ===== */}
      <Section className="score-feature-section bg-dark-2">
        <div className="container">
          <div className="text-center fade-up">
            <span className="section-label">What You'll Get</span>
            <h2>Your Personalised <span className="highlight">Sustainability Readiness</span> Report</h2>
          </div>
          <div className="score-features">
            {[
              { icon: '📊', title: 'Framework Readiness Score', desc: 'Individual scores across CBAM, BRSR, ESG, and EcoVadis.' },
              { icon: '🎯', title: 'Gap Analysis', desc: 'Understand exactly where your compliance gaps are.' },
              { icon: '📋', title: 'Action Plan', desc: 'A prioritized list of next steps to improve your score.' },
              { icon: '💰', title: 'Cost Estimation', desc: 'Estimated cost of achieving compliance for each framework.' },
              { icon: '⚡', title: 'Instant Results', desc: 'Get your full report in under 5 minutes, no waiting.' },
              { icon: '🔒', title: '100% Confidential', desc: 'Your data is never shared or sold to third parties.' },
            ].map(({ icon, title, desc }, i) => (
              <div className={`score-feat-card card fade-up delay-${(i % 3) + 1}`} key={title}>
                <div className="feat-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="score-bottom-cta bg-dark">
        <div className="container text-center">
          <span className="section-label fade-up">In the Meantime</span>
          <h2 className="fade-up delay-1">Ready to get started <span className="highlight">now?</span></h2>
          <p className="fade-up delay-2" style={{ maxWidth: '480px', margin: '14px auto 36px' }}>
            Talk to our experts and get a manual sustainability readiness assessment for your business.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary btn-lg">View Our Services →</Link>
            <Link to="/" className="btn btn-outline btn-lg">Learn More</Link>
          </div>
        </div>
      </Section>

    </main>
  );
}
