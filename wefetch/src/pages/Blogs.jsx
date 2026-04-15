import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Pricing.css'; // Just reusing pricing css for container and basics if needed or custom inline

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

export default function Blogs() {
  return (
    <main className="blogs-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Section className="blogs-hero">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="fade-up delay-1">Our <span className="highlight">Blogs</span></h1>
            <p className="hero-sub fade-up delay-2" style={{ maxWidth: '600px', margin: '1rem auto' }}>
              Insights, updates, and resources on sustainability and compliance.
            </p>
          </div>
          
          <div className="fade-up delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="plan-card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
              <img 
                src="/images/emission-banner.png" 
                alt="Emission Leakage Banner" 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ marginBottom: '1rem', marginTop: 0, fontSize: '1.5rem', lineHeight: 1.3 }}>Emission Leakage: Meaning, Causes, Example and how to prevent it</h3>
                <p className="plan-desc" style={{ flexGrow: 1, marginBottom: '2rem', fontSize: '1.05rem' }}>
                  In the fight against climate change, countries around the world are setting strict rules to lower carbon footprints. While this is great for the planet, it sometimes leads to a tricky problem called emission leakage.
                </p>
                <Link 
                  to="/emission-leakage-meaning-causes-examples-prevention" 
                  style={{ fontWeight: 'bold', color: 'var(--clr-accent)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.95rem' }}
                >
                  Read More »
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
