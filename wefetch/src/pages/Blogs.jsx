import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Pricing.css'; 

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

const BOUNCE_BLOGS = [
  {
    title: 'Emission Leakage: Meaning, Causes, Example and how to prevent it',
    desc: 'In the fight against climate change, countries around the world are setting strict rules to lower carbon footprints. While this is great for the planet, it sometimes leads to a tricky problem called emission leakage.',
    link: '/emission-leakage-meaning-causes-examples-prevention'
  }
];

export default function Blogs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          
          <div className="fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {BOUNCE_BLOGS.map((blog, index) => (
              <div 
                key={index} 
                className="plan-card" 
                style={{ textAlign: 'left', padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} 
                onClick={() => toggleAccordion(index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', paddingRight: '1rem' }}>{blog.title}</h3>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                
                {openIndex === index && (
                  <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <p className="plan-desc" style={{ marginBottom: '1.5rem' }}>
                      {blog.desc}
                    </p>
                    <Link 
                      to={blog.link} 
                      className="btn btn-outline" 
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read Article
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
