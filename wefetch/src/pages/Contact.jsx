import { useEffect, useRef } from 'react';
import './Contact.css';

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

export default function Contact() {
  return (
    <main className="contact-page">
      <Section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content text-center">
            <h1 className="fade-up delay-1">Get in <span className="highlight">Touch</span></h1>
            <p className="hero-sub fade-up delay-2">
              Have questions about our services or need help navigating your compliance journey? Our team is here to assist you.
            </p>
          </div>
        </div>
      </Section>

      <Section className="contact-main bg-dark-2">
        <div className="container">
          <div className="contact-wrapper fade-up delay-1">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Reach out to us through any of these channels or schedule a demo directly.</p>
              
              <div className="info-item">
                <i className="las la-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:contact@wefetch.tech" style={{ color: "inherit", textDecoration: "none" }}>contact@wefetch.tech</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="las la-calendar-check"></i>
                <div>
                  <h4>Book a Demo</h4>
                  <a href="https://calendly.com/balajiselvarajofficial/wefetch-demo?month=2026-04" target="_blank" rel="noopener noreferrer" className="text-link">Schedule on Calendly <i className="las la-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us more about your needs..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert("Thanks for contacting us!"); }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
