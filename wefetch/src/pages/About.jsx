import { useEffect, useRef } from 'react';
import './About.css';
import { UserIcon } from '../components/Icons';
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

export default function About() {
  return (
    <main className="about-page">
      <Section className="about-hero">
        <div className="container">
          <div className="about-hero-content text-center">
            <h1 className="fade-up delay-1">About <span className="highlight">Wefetch</span></h1>
            <p className="hero-sub fade-up delay-2">
              We’re building a better way for businesses to operate — responsibly.<br /><br />
              Sustainability is becoming a core part of how businesses grow.<br />But for many companies, the path forward is still unclear.
            </p>
          </div>
        </div>
      </Section>

      <Section className="about-mission bg-dark-2">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text fade-up delay-1">
              <h2>Our <span className="highlight">Approach</span></h2>
              <p>
                We believe sustainability should deliver measurable results not just good intentions. Our focus is on helping businesses achieve cost reductions and better ROI by embedding responsible practices into everyday operations with structure, consistency, and clarity.
              </p>
              <h2 style={{ marginTop: '24px' }}>Our <span className="highlight">Mission</span></h2>
              <p>
                To empower businesses globally to collectively contribute towards reducing up to 5% of the world’s carbon footprint, by making sustainability simple, structured, and continuous.
              </p>
              <h2 style={{ marginTop: '24px' }}>Our <span className="highlight">Vision</span></h2>
              <p>
                To become the operating system for sustainability, enabling businesses worldwide to build and scale responsible practices.
              </p>
            </div>
            <div className="mission-stats fade-up delay-2">
              <div className="stat-card">
                <span className="stat-big">70+</span>
                <span>Companies using Wefetch</span>
              </div>
              <div className="stat-card">
                <span className="stat-big">60+</span>
                <span>Factories reporting globally</span>
              </div>
              <div className="stat-card">
                <span className="stat-big">10M+</span>
                <span>Tonnes of emissions managed</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="about-story bg-dark">
        <div className="container">
          <div className="story-content fade-up delay-1">
            <h2>Our <span className="highlight">Team</span></h2>
            <p>
              Wefetch is built by a team that believes businesses can grow while being responsible to the environment.
            </p>

            <h2 style={{ marginTop: '40px' }}>Join the <span className="highlight">Journey</span></h2>
            <p>
              Sustainable growth is not about doing everything at once. It’s about building the right systems and improving consistently over time. We’re here to make that easier.
            </p>

            <p style={{ marginTop: '24px', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--clr-accent)' }}>
              You don’t need to build a sustainability team.<br />
              You can simply access one.
            </p>
          </div>
        </div>
      </Section>

      <Section className="about-team bg-dark-2">
        <div className="container">
          <div className="text-center fade-up delay-1">
            <h2>Our <span className="highlight">Leadership Team</span></h2>
            <p className="team-sub" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>The global sustainability challenges are unique, and so is our expertise.</p>
          </div>
          <div className="team-grid" style={{ alignItems: 'stretch' }}>
            {[
              {
                name: 'Balaji S',
                role: 'CEO, Wefetch',
                desc: 'I come from an agricultural background, which gave me early exposure to how environmental changes impact real-world systems. Over time, I started looking deeper into where these challenges originate and how industries have evolved. What stood out was this: many businesses today are willing to move in a better direction, but often lack the clarity and structure to do it effectively. That’s where the idea for Wefetch came in. What if businesses didn’t have to figure everything out on their own? What if responsible operations could be built in a more structured and consistent way? Wefetch was built to enable that shift — helping companies move forward, not just by growing, but by growing more responsibly.'
              },
              {
                name: 'GM',
                role: 'General Manager',
                desc: 'Growing up with a close connection to nature shapes how you see the world. It creates an awareness of how fragile it is—and how important it is to protect it. That perspective is what makes working at Wefetch truly meaningful. At Wefetch, sustainability is not treated as just an idea or a responsibility—it is transformed into something real, measurable, and actionable. What is often seen as complex and overwhelming becomes clear, structured, and achievable through data-driven insights and practical solutions. From a management perspective, what stands out is how the platform brings clarity by making environmental impact visible and easy to understand, while also enabling real action instead of just reporting. At the same time, it is built to scale, allowing businesses of all sizes to operate more responsibly without added complexity. In today’s world, sustainability is no longer optional—it is essential, both for the planet and for the future of business. Being part of Wefetch goes beyond a role. It is about contributing to something larger—helping organizations take confident steps toward reducing their impact and building a more sustainable future. And that’s what makes this journey truly meaningful.'
              }
            ].map((member, i) => (
              <div className={`team-member fade-up delay-${(i % 4) + 1}`} key={member.name} style={{ height: '100%' }}>
                <div className="member-avatar"><UserIcon /></div>
                <h4>{member.name}</h4>
                <div className="member-role">{member.role}</div>
                <p style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}