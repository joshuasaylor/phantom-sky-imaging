import ContactForm from './components/ContactForm'

export default function PhantomSkyImaging() {
  return (
    <>
      {/* ── NAVIGATION ── */}
      <nav className="psi-nav">
        <a href="#" className="psi-nav-logo">
          <svg className="psi-nav-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="3" />
            <line x1="20" y1="20" x2="9"  y2="11" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20" y1="20" x2="31" y2="11" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20" y1="20" x2="9"  y2="29" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20" y1="20" x2="31" y2="29" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="9"  cy="11" r="3" />
            <circle cx="31" cy="11" r="3" />
            <circle cx="9"  cy="29" r="3" />
            <circle cx="31" cy="29" r="3" />
          </svg>
          <div className="psi-nav-wordmark">
            <span>Phantom Sky</span>
            <span>Imaging</span>
          </div>
        </a>

        <ul className="psi-nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="psi-nav-cta">Get a Quote</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="psi-hero" id="home">
        <div className="psi-hero-bg" />
        <div className="psi-hero-grid" />
        <div className="psi-hero-streak" />

        <div className="psi-hero-content">
          <div className="psi-hero-eyebrow">
            <span className="psi-hero-eyebrow-line" />
            <span>FAA Certified · Licensed & Insured</span>
          </div>

          <h1 className="psi-hero-title">
            <em>Aerial</em>
            <span className="accent">Imagery</span>
            Elevated.
          </h1>

          <p className="psi-hero-sub">
            Professional drone photography and videography for real estate
            listings and roofing inspections. We capture what can&apos;t be seen
            from the ground.
          </p>

          <div className="psi-hero-actions">
            <a href="#contact" className="psi-btn-primary">
              Request a Shoot
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" className="psi-btn-ghost">
              View Portfolio <span className="psi-btn-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="psi-scroll-indicator">
          <span className="psi-scroll-text">Scroll</span>
          <div className="psi-scroll-line" />
        </div>

        <div className="psi-hero-stats">
          <div className="psi-stat">
            <div className="psi-stat-num">Part<span> 107</span></div>
            <div className="psi-stat-label">FAA Certified Pilot</div>
          </div>
          <div className="psi-stat">
            <div className="psi-stat-num">4K<span>/</span>HD</div>
            <div className="psi-stat-label">Video Resolution</div>
          </div>
          <div className="psi-stat">
            <div className="psi-stat-num">48<span>hr</span></div>
            <div className="psi-stat-label">Delivery Turnaround</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="psi-section" id="services">
        <div className="psi-services-header">
          <div>
            <div className="psi-tag">What We Offer</div>
            <h2 className="psi-section-title">Specialized<br />Aerial Services</h2>
          </div>
          <p className="psi-section-desc">
            From listing-day real estate shoots to detailed rooftop inspection
            footage — precision aerial media tailored to your project&apos;s needs.
          </p>
        </div>

        <div className="psi-services-grid">
          <div className="psi-service-card">
            <div className="psi-service-num">01</div>
            <div className="psi-service-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="14" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="24" cy="27" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="24" cy="27" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="36" cy="20" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="psi-service-name">Real Estate Photography</div>
            <p className="psi-service-desc">
              Stunning aerial stills that make listings stand out. We capture
              the full scope of a property — its footprint, lot, neighborhood
              context, and surroundings — in high-resolution format.
            </p>
            <ul className="psi-service-features">
              <li>High-res RAW + JPEG delivery</li>
              <li>Golden hour scheduling available</li>
              <li>MLS-ready edited images</li>
              <li>Twilight & blue-hour shots</li>
            </ul>
          </div>

          <div className="psi-service-card">
            <div className="psi-service-num">02</div>
            <div className="psi-service-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="12" width="30" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M34 19l10-5v20l-10-5V19z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M14 24l-4-4v8l4-4z" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
            <div className="psi-service-name">Real Estate Video</div>
            <p className="psi-service-desc">
              Cinematic aerial video tours that tell the story of a property.
              Smooth, stabilized footage set to music — ideal for listings,
              social media, and marketing campaigns.
            </p>
            <ul className="psi-service-features">
              <li>4K / 60fps aerial footage</li>
              <li>Professionally color-graded</li>
              <li>Music-licensed delivery</li>
              <li>Social media cuts included</li>
            </ul>
          </div>

          <div className="psi-service-card" style={{ gridColumn: 'span 2' }}>
            <div className="psi-service-num">03</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <div className="psi-service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 24L24 6l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 20v20h28V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 40V28h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="34" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M34 11v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="psi-service-name">Roofing Inspection Video</div>
                <p className="psi-service-desc">
                  Detailed aerial video documentation for roofing contractors,
                  insurance adjusters, and property managers. Safely assess
                  conditions, damage, and wear without sending anyone on the roof.
                </p>
              </div>
              <div>
                <ul className="psi-service-features" style={{ marginTop: '56px' }}>
                  <li>Full perimeter coverage</li>
                  <li>Close-up damage documentation</li>
                  <li>Timestamped footage for records</li>
                  <li>Insurance claim-ready deliverables</li>
                  <li>Ridge, valley & flashing detail shots</li>
                  <li>PDF summary report available</li>
                </ul>
              </div>
            </div>
            <div className="psi-service-video">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbltkecgm&public_id=treeOnRoof_r8mwa2&autoplay=true&muted=true&loop=true&controls=false"
                className="psi-service-video-el"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="psi-service-video-caption">
                Sample footage — tree damage assessment, residential roof
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="psi-divider" />

      {/* ── PORTFOLIO ── */}
      <div className="psi-portfolio-bg" id="portfolio">
        <div className="psi-portfolio-inner">
          <div className="psi-portfolio-header">
            <div>
              <div className="psi-tag">Our Work</div>
              <h2 className="psi-section-title">Featured Portfolio</h2>
            </div>
            <div className="psi-portfolio-filter">
              <button className="psi-filter-btn active">All</button>
              <button className="psi-filter-btn">Real Estate</button>
              <button className="psi-filter-btn">Roofing</button>
            </div>
          </div>

          <div className="psi-portfolio-grid">
            {[
              { cat: 'Real Estate',       title: 'Lakefront Estate · 4.2 Acres' },
              { cat: 'Real Estate',       title: 'New Construction Development' },
              { cat: 'Roofing Inspection',title: 'Commercial Flat Roof · 18,000 sq ft' },
              { cat: 'Real Estate Video', title: 'Luxury Waterfront · Cinematic Tour' },
              { cat: 'Roofing Inspection',title: 'Hail Damage Assessment' },
            ].map((item, i) => (
              <div className="psi-portfolio-item" key={i}>
                <div className="psi-portfolio-thumb" />
                <div className="psi-portfolio-overlay">
                  <div className="psi-portfolio-meta">
                    <div className="psi-portfolio-cat">{item.cat}</div>
                    <div className="psi-portfolio-title-item">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <section className="psi-section" id="process">
        <div className="psi-process-header">
          <div className="psi-tag">How It Works</div>
          <h2 className="psi-section-title">From Booking to Delivery</h2>
        </div>

        <div className="psi-process-grid">
          {[
            {
              icon: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round"/>,
              num: 'Step 01', name: 'Request & Scope',
              desc: 'Tell us about your property, project type, and any specific angles or details you need covered. Quick response, no pressure.',
            },
            {
              icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/></>,
              num: 'Step 02', name: 'Schedule & Plan',
              desc: 'We coordinate weather windows, airspace, and optimal lighting for your shoot date. FAA safety checks completed automatically.',
            },
            {
              icon: <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" strokeLinejoin="round"/>,
              num: 'Step 03', name: 'Fly & Capture',
              desc: 'Our pilot executes the shoot with precision — capturing every required angle while maintaining full FAA compliance on site.',
            },
            {
              icon: <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>,
              num: 'Step 04', name: 'Edit & Deliver',
              desc: 'Edited and color-graded media delivered within 48 hours via private download link. Ready for MLS, listing pages, or reports.',
            },
          ].map((step, i) => (
            <div className="psi-process-step" key={i}>
              <div className="psi-step-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{step.icon}</svg>
              </div>
              <div className="psi-step-num">{step.num}</div>
              <div className="psi-step-name">{step.name}</div>
              <p className="psi-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="psi-divider" />

      {/* ── ABOUT ── */}
      <section className="psi-section" id="about">
        <div className="psi-about">
          <div className="psi-about-visual">
            <div className="psi-about-img-placeholder" />
            <div className="psi-about-badge">
              <div className="psi-about-badge-num">FAA</div>
              <div className="psi-about-badge-text">Part 107 Certified</div>
            </div>
          </div>

          <div>
            <div className="psi-tag">About Us</div>
            <h2 className="psi-section-title">Built for<br />Professionals</h2>
            <p className="psi-about-body">
              Phantom Sky Imaging was founded by Joshua Saylor — FAA Part 107
              certified remote pilot — with one goal: deliver broadcast-quality
              aerial media that gives professionals a competitive edge. Whether
              you&apos;re a realtor closing on a luxury listing in Chester County or
              a contractor documenting storm damage in Montgomery County, we
              bring the precision your work demands.
            </p>
            <p className="psi-about-body">
              Every flight is backed by FAA Part 107 certification, liability
              insurance, and a commitment to arriving on-time with the right
              equipment for the job. Proudly serving Chester, Delaware,
              Montgomery, Bucks, and Philadelphia counties.
            </p>
            <ul className="psi-about-list">
              {['FAA Part 107 Certified','Fully Insured Flights','4K / RAW Capable','48-Hour Delivery','Real Estate Specialists','Insurance-Ready Reports'].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <div className="psi-cta-bg" id="contact">
        <div className="psi-cta-inner">
          <div className="psi-cta-left">
            <div className="psi-tag">Get In Touch</div>
            <h2 className="psi-section-title">Ready to Book<br />Your Shoot?</h2>
            <p>
              Let&apos;s discuss your project. We&apos;ll confirm availability, scope,
              and pricing — usually within a few hours.
            </p>

            <div className="psi-contact-info">
              <a href="tel:+14846840579" className="psi-contact-item">
                <div className="psi-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                (484) 684-0579
              </a>
              <a href="mailto:joshuasaylor@phantomskyimaging.com" className="psi-contact-item">
                <div className="psi-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                joshuasaylor@phantomskyimaging.com
              </a>
              <div className="psi-contact-item">
                <div className="psi-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Chester, Delaware, Montgomery, Bucks &amp; Philadelphia counties
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="psi-footer-inner">
          <div className="psi-footer-copy">
            © {new Date().getFullYear()} <span>Phantom Sky Imaging</span>. All rights reserved.
          </div>
          <ul className="psi-footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
