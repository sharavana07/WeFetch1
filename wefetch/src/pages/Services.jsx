import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';
import { CheckIcon, CalendarIcon, BarChartIcon, GlobeIcon, TrophyIcon, ClipboardIcon, ArrowRightIcon } from '../components/Icons';

function Section({ children, className = '', id = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(f => f.classList.add('visible')); });
    }, { threshold: 0.04, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section ref={ref} className={className} id={id}>{children}</section>;
}

export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  // Sync tab state with router state if navigated from Mega Menu
  useEffect(() => {
    if (location.state && typeof location.state.tab === 'number') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(location.state.tab);
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  const tabs = [
    { title: 'CBAM V-Team', icon: <GlobeIcon className="inline-icon" /> },
    { title: 'EcoVadis V-Team', icon: <TrophyIcon className="inline-icon" /> },
    { title: 'ESG Virtual Teams', icon: <ClipboardIcon className="inline-icon" /> }
  ];

  return (
    <main className="services-page" style={{ paddingTop: '100px' }}>
      
      {/* ===== HERO COMPONENT ===== */}
      <Section className="srv-hero" style={{ minHeight: 'auto', padding: '60px 24px 40px' }}>
        <div className="container text-center">
          <div className="hero-eyebrow fade-up" style={{ margin: '0 auto 22px auto' }}><span className="pulse-dot" />Services</div>
          <h1 className="fade-up delay-1">Virtual <span className="highlight">Sustainability Teams</span></h1>
          <p className="fade-up delay-2" style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
            Choose the dedicated team you need to manage your end-to-end compliance seamlessly.
          </p>

          {/* Clean Segmented Tab Navigation */}
          <div className="srv-segmented-tabs fade-up delay-3">
            {tabs.map((tab, idx) => (
              <button 
                key={idx}
                className={`srv-tab-trigger ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.icon} {tab.title}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== TAB CONTENT COMPONENT ===== */}
      <Section className="srv-tab-content bg-dark-2" style={{ padding: '80px 24px', minHeight: '70vh' }}>
        <div className="container fade-up visible">
          
          {/* ================= TAB 1: CBAM ================= */}
          {activeTab === 0 && (
            <div className="tab-pane-content fade-in">
              <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px', paddingBottom: '80px' }}>
                <h2 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>CBAM Virtual Team for <span className="highlight">EU Exporters</span></h2>
                <h3 style={{ marginBottom: '24px', color: 'var(--clr-text-muted)' }}>End-to-End CBAM Compliance. Without Building an In-House Team.</h3>
                <p>
                  Wefetch's CBAM Virtual Team manages your entire compliance process — from data collection to reporting and verification ensuring accuracy, speed, and audit readiness.
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
                </div>
              </div>

              <div className="srv-stat-grid text-center" style={{ marginBottom: '80px' }}>
                <div className="card stat-item">
                  <div className="srv-stat-num">300+</div>
                  <div className="srv-stat-label">Companies Supported</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num">1000+</div>
                  <div className="srv-stat-label">CBAM Reports Managed</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num">50+</div>
                  <div className="srv-stat-label">Product Categories</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num" style={{ color: 'var(--clr-green-deep)' }}>70%+</div>
                  <div className="srv-stat-label">Cost Saved vs In-House</div>
                </div>
              </div>

              <div className="srv-content-grid" style={{ gap: '60px' }}>
                <div>
                  <h3 style={{ marginBottom: '24px' }}>Manage Your <span className="highlight">CBAM Compliance</span> in One Flow</h3>
                  <ul className="check-list srv-checklist">
                    <li><CheckIcon /> <strong>Data Collection Made Simple:</strong> Collect and organize raw materials, energy, and production data across operations with structured templates.</li>
                    <li><CheckIcon /> <strong>Accurate Emissions Calculation:</strong> Calculate embedded emissions at a product level using EU-approved methodologies.</li>
                    <li><CheckIcon /> <strong>Quarterly Reporting, Done Right:</strong> Prepare and maintain CBAM reports with complete documentation, ready for submission.</li>
                    <li><CheckIcon /> <strong>Supplier Data Coordination:</strong> Track and manage supplier data efficiently with follow-ups and structured inputs.</li>
                    <li><CheckIcon /> <strong>Verification-Ready Outputs:</strong> Maintain audit-ready documentation aligned with EU standards, with full support.</li>
                    <li><CheckIcon /> <strong>Submission & Compliance Closure:</strong> Handle submissions, revisions, and coordination to ensure complete compliance.</li>
                  </ul>
                </div>

                <div className="card bg-dark" style={{ border: '1px solid var(--clr-border)', padding: '40px' }}>
                  <h3 style={{ marginBottom: '16px' }}><GlobeIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> End-to-End Execution</h3>
                  <p style={{ marginBottom: '24px' }}>From onboarding to final submission, every step is handled by a dedicated CBAM team.</p>
                  <ul className="check-list srv-checklist-compact">
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Product and process mapping</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Emission source identification</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Data system setup</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Emissions calculation and validation</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Reporting and documentation</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Verification coordination</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Submission support</li>
                  </ul>
                </div>
              </div>

              <div className="srv-content-grid" style={{ gap: '60px', marginTop: '80px' }}>
                <div className="card" style={{ padding: '40px' }}>
                  <h3 style={{ marginBottom: '16px' }}><CalendarIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Continuous Compliance</h3>
                  <p style={{ marginBottom: '24px' }}>CBAM is an ongoing process. The Virtual Team ensures:</p>
                  <ul className="check-list srv-checklist-compact">
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Continuous data tracking</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Regular compliance updates</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Improved reporting accuracy over time</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Adaptation to regulatory changes</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ marginBottom: '24px' }}>What You <span className="highlight">Get</span></h3>
                  <p style={{ marginBottom: '24px' }}>Replace complex internal processes and fragmented consulting with a single, structured system managed by experts. Start Your CBAM Compliance Journey Today.</p>
                  <ul className="check-list srv-checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <li><CheckIcon /> Dedicated Virtual Team</li>
                    <li><CheckIcon /> End-to-end management</li>
                    <li><CheckIcon /> Quarterly reporting support</li>
                    <li><CheckIcon /> Emission calculations</li>
                    <li><CheckIcon /> Verification-ready docs</li>
                    <li><CheckIcon /> 3rd-party verification calc</li>
                    <li><CheckIcon /> Continuous compliance</li>
                    <li><CheckIcon /> Integrated software platform</li>
                  </ul>
                </div>
              </div>

              <div className="text-center" style={{ marginTop: '80px', paddingTop: '60px', paddingBottom: '80px', borderTop: '1px solid var(--clr-border)' }}>
                <span className="section-label">Speak to an Expert</span>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Simplify CBAM Compliance</h3>
                <p style={{ marginBottom: '32px' }}>Get a clear, structured approach to managing your requirements.</p>
                <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
              </div>
            </div>
          )}

          {/* ================= TAB 2: ECOVADIS ================= */}
          {activeTab === 1 && (
            <div className="tab-pane-content fade-in">
              <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px', paddingBottom: '80px' }}>
                <h2 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>EcoVadis Virtual Team <span className="highlight">(V-Team)</span></h2>
                <h3 style={{ marginBottom: '24px', color: 'var(--clr-text-muted)' }}>End-to-End EcoVadis Assessment. Fully Managed.</h3>
                <p>
                  EcoVadis assessments require structured data, strong documentation, and precise responses aligned with scoring criteria. Wefetch provides a dedicated EcoVadis Virtual Team to manage the entire process from data collection to submission with a system-driven approach.
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
                </div>
              </div>

              <div className="srv-stat-grid text-center" style={{ marginBottom: '80px' }}>
                <div className="card stat-item">
                  <div className="srv-stat-num">100+</div>
                  <div className="srv-stat-label">Assessments Managed</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num" style={{ color: 'var(--clr-green-deep)' }}>+20–40</div>
                  <div className="srv-stat-label">Points Score Improvement</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num">50+</div>
                  <div className="srv-stat-label">Categories Covered</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num" style={{ color: 'var(--clr-accent)' }}>Higher</div>
                  <div className="srv-stat-label">Win Rate Across Evaluations</div>
                </div>
              </div>

              <div className="srv-content-grid" style={{ gap: '60px' }}>
                <div>
                  <h3 style={{ marginBottom: '24px' }}>Complete EcoVadis <span className="highlight">Execution</span></h3>
                  <ul className="check-list srv-checklist">
                    <li><CheckIcon /> <strong>Setup & Onboarding:</strong> Understand current score, identify gaps, and structure the assessment approach.</li>
                    <li><CheckIcon /> <strong>Data & Document Management:</strong> Collect policies, evidence, and operational data across departments.</li>
                    <li><CheckIcon /> <strong>Response Optimization:</strong> Prepare clear, aligned, and high-scoring questionnaire responses.</li>
                    <li><CheckIcon /> <strong>Documentation & Evidence:</strong> Build complete, audit-ready documentation aligned with EcoVadis requirements.</li>
                    <li><CheckIcon /> <strong>Submission & Review:</strong> Handle submission with accuracy and consistency.</li>
                    <li><CheckIcon /> <strong>Continuous Improvement:</strong> Track performance and improve scores over time.</li>
                  </ul>
                </div>

                <div className="card bg-dark" style={{ border: '1px solid var(--clr-border)', padding: '40px' }}>
                  <h3 style={{ marginBottom: '16px' }}><TrophyIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Structured Approach</h3>
                  <p style={{ marginBottom: '24px' }}>A clear execution model ensures consistency and scalability:</p>
                  <ul className="check-list srv-checklist-compact">
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Understand current performance and gaps</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Build structured documentation systems</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Execute submission with optimized responses</li>
                    <li><ArrowRightIcon className="inline-icon" style={{color: 'var(--clr-accent)'}}/> Continuously improve scores and outcomes</li>
                  </ul>
                  
                  <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--clr-border)' }}>
                     <h4 style={{ marginBottom: '12px' }}>Continuous Improvement</h4>
                     <p style={{ fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>EcoVadis is an ongoing process, not a one-time submission. The team ensures stronger documentation and better alignment with scoring criteria to improve performance year over year.</p>
                  </div>
                </div>
              </div>

              <div className="srv-content-grid" style={{ gap: '60px', marginTop: '80px' }}>
                <div style={{ gridColumn: '1 / -1' }} className="card">
                  <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>What You <span className="highlight">Get</span></h3>
                  <ul className="check-list srv-checklist" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <li><CheckIcon /> Dedicated EcoVadis Virtual Team</li>
                    <li><CheckIcon /> End-to-end assessment management</li>
                    <li><CheckIcon /> Questionnaire response optimization</li>
                    <li><CheckIcon /> Documentation and evidence preparation</li>
                    <li><CheckIcon /> Gap analysis and improvement support</li>
                    <li><CheckIcon /> Submission and review handling</li>
                    <li><CheckIcon /> Continuous score improvement</li>
                    <li><CheckIcon /> Structured workflows and templates</li>
                  </ul>
                </div>
              </div>

              <div className="text-center" style={{ marginTop: '80px', paddingTop: '60px', paddingBottom: '80px', borderTop: '1px solid var(--clr-border)' }}>
                <span className="section-label">Speak to an Expert</span>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Get Started</h3>
                <p style={{ marginBottom: '32px' }}>Improve your EcoVadis score with a structured system and a dedicated team managing it end-to-end.</p>
                <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
              </div>
            </div>
          )}

          {/* ================= TAB 3: ESG ================= */}
          {activeTab === 2 && (
            <div className="tab-pane-content fade-in">
              <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px', paddingBottom: '80px' }}>
                <h2 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>ESG Virtual <span className="highlight">Teams</span></h2>
                <h3 style={{ marginBottom: '24px', color: 'var(--clr-text-muted)' }}>End-to-End ESG Management. Fully Managed.</h3>
                <p>
                  Managing ESG today requires handling multiple frameworks, disclosures, ratings, and compliance requirements. Wefetch provides Virtual Sustainability Teams that act as your extended ESG function — structured, scalable, and continuously managed.
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link to="/contact" className="btn btn-primary btn-lg">Book Free Consultation</Link>
                </div>
              </div>

              <div className="srv-stat-grid text-center" style={{ marginBottom: '80px' }}>
                <div className="card stat-item">
                  <div className="srv-stat-num">1 System</div>
                  <div className="srv-stat-label">Multiple Frameworks</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num">Dedicated</div>
                  <div className="srv-stat-label">Expert Teams</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num" style={{ color: 'var(--clr-green-deep)' }}>Ongoing</div>
                  <div className="srv-stat-label">Continuous Execution</div>
                </div>
                <div className="card stat-item">
                  <div className="srv-stat-num" style={{ color: 'var(--clr-accent)' }}>Scalable</div>
                  <div className="srv-stat-label">Aligned with Your Growth</div>
                </div>
              </div>

              <div className="srv-content-grid" style={{ gap: '40px', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: 'stretch' }}>
                
                  {/* Row 1 */}
                  <div className="card">
                    <h3 style={{ marginBottom: '20px' }}>Disclosure & <span className="highlight">Reporting Frameworks</span></h3>
                    <ul className="check-list srv-checklist-compact">
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>GRI Reporting:</strong> Standardized ESG reporting aligned with global disclosure practices</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>CDP Disclosure:</strong> Climate and environmental disclosures for investors and stakeholders</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>IFRS S1 & S2:</strong> Financial and climate-related reporting aligned with global standards</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>TCFD Reporting:</strong> Climate risk, governance, and strategy disclosures</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Integrated Reporting:</strong> Combined financial and sustainability reporting in one framework</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>SASB Reporting:</strong> Industry-specific ESG disclosures for investor decision-making</li>
                    </ul>
                  </div>

                  <div className="card">
                    <h3 style={{ marginBottom: '20px' }}>Compliance <span className="highlight">Frameworks</span></h3>
                    <ul className="check-list srv-checklist-compact">
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>BRSR & BRSR Core:</strong> Mandatory ESG compliance and reporting for Indian listed companies</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>CSRD Compliance:</strong> EU sustainability reporting requirements</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>EU Taxonomy:</strong> Classification of environmentally sustainable activities</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Supply Chain Due Diligence (LkSG):</strong> Human rights and environmental compliance across supply chains</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>UK SECR:</strong> Energy and carbon reporting requirements</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>US SEC Climate Disclosure:</strong> Climate-related disclosure requirements</li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div className="card" style={{ background: 'var(--clr-dark)' }}>
                    <h3 style={{ marginBottom: '20px' }}>Climate, Carbon & <span className="highlight">Net Zero</span></h3>
                    <ul className="check-list srv-checklist-compact">
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Net Zero & SBTi Strategy:</strong> Emission reduction targets aligned with global climate goals</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Carbon Footprint (Scope 1, 2, 3):</strong> Measurement and tracking of total organizational emissions</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Life Cycle Assessment (LCA):</strong> Environmental impact analysis across the product lifecycle</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Product Carbon Footprint (PCF):</strong> Emissions calculation at product level</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Energy Audit & Reduction:</strong> Identify inefficiencies and reduce energy consumption</li>
                    </ul>
                  </div>

                  <div className="card" style={{ background: 'var(--clr-dark)' }}>
                    <h3 style={{ marginBottom: '20px' }}>ESG Ratings & <span className="highlight">Certifications</span></h3>
                    <ul className="check-list srv-checklist-compact">
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>EcoVadis Rating Support:</strong> Improve sustainability ratings for global supplier evaluations</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>QS Sustainability Ranking:</strong> ESG-based rankings for universities and institutions</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>MSCI ESG Rating Support:</strong> ESG ratings used by investors for risk assessment</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>Sustainalytics Rating Support:</strong> ESG risk ratings for investment decisions</li>
                      <li><ArrowRightIcon className="inline-icon" style={{color:'var(--clr-accent)'}}/> <strong>ISS ESG Rating Support:</strong> Corporate ESG performance evaluation for investors</li>
                    </ul>
                  </div>

              </div>

              <div className="card bg-dark" style={{ marginTop: '40px', padding: '40px', border: '1px solid var(--clr-accent-glow)' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                    <div>
                      <span className="section-label">One System. Multiple ESG Requirements.</span>
                      <h3 style={{ marginBottom: '16px' }}>Custom ESG Virtual Team</h3>
                      <p>A fully dedicated ESG setup tailored to your organization. Replace fragmented efforts, multiple consultants, and internal complexity with a single, structured ESG system managed by expert teams.</p>
                    </div>
                    <div>
                      <ul className="check-list">
                        <li><CheckIcon className="inline-icon"/> Dedicated ESG Manager</li>
                        <li><CheckIcon className="inline-icon"/> Multiple frameworks managed together</li>
                        <li><CheckIcon className="inline-icon"/> Monthly ESG reporting</li>
                        <li><CheckIcon className="inline-icon"/> Continuous tracking and improvements</li>
                        <li><CheckIcon className="inline-icon"/> Acts as your Virtual Sustainability Department</li>
                      </ul>
                    </div>
                 </div>
              </div>

              <div className="text-center" style={{ marginTop: '80px', paddingTop: '60px', paddingBottom: '80px', borderTop: '1px solid var(--clr-border)' }}>
                <span className="section-label">Speak to an Expert</span>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Get Started</h3>
                <p style={{ marginBottom: '32px' }}>Build a scalable ESG function without building an in-house team.</p>
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Consultation →</Link>
              </div>
            </div>
          )}
          
        </div>
      </Section>
    </main>
  );
}
