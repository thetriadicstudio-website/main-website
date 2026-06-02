'use client';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const projects = [
    { title: 'Echoes of Memory', category: 'Residential', image: '/portfolio/1.jpg', description: 'A dramatic view of ancient structural design, where stark historical lines, deep reflective pools, and shadow-drenched pathways frame an intense emotional landscape.' },
    { title: 'Textured Stillness', category: 'Residential', image: '/portfolio/2.jpg', description: 'A tight interior study contrasting the deep tones of a velvet couch with the organic folds of a fringed throw, a classic book, and shimmering ambient bokeh.' },
    { title: 'Inner Courtyard', category: 'Architecture Study', image: '/portfolio/3.jpg', description: 'An intimate, textured close-up capturing a scholarly writing set arranged on raw concrete framing, offering a split-focus glimpse into a warm, sun-lit historic courtyard.' },
    { title: 'Golden Pavilions', category: 'Spatial Styling', image: '/portfolio/4.jpg', description: 'A balanced architectural perspective of a luxury minimalist pavilion, highlighting striking traditional rooflines and circular portals perfectly mirrored in a still reflection pool during the golden hour.' },
    { title: 'Misty Portals', category: 'Concept Study', image: '/portfolio/5.jpg', description: 'An outdoor architectural perspective focusing on raw concrete frames and a misty moongate, contrasted by sharp tropical greenery and fallen golden leaves under a heavy sky.' },
    { title: 'Water Remembers What Stone Forgets', category: 'Material Study', image: '/portfolio/6.jpg', description: 'An ethereal subterranean portal where raw, moss-covered stone structures encase a deep, sun-drenched aquatic chamber, capturing the silent stillness of light piercing through water.' },
    { title: 'Floral Sanctuary', category: 'Residential', image: '/portfolio/7.jpg', description: 'An ethereal internal window setting defined by cascading pink blossoms contrasting against high, industrial concrete walls.' }
  ];

  return (
    <main className="page">
      <header className="header">
        <div className="header-spacer" />
      </header>

      {/* THE BRAND INTEGRATION CENTERPIECE - UNIFIED HIGH-CONTRAST GOLD ENGINE */}
      <section className="hero-branding-container" style={{ margin: '90px auto 110px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="pure-code-brand-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '620px', position: 'relative' }}>
          
          <svg viewBox="0 0 200 115" className="vector-brand-master" style={{ overflow: 'visible', width: '100%', height: 'auto' }}>
            <defs>
              {/* THE MASTER CODES GRADIENT: The exact multi-stop champagne gold used on 'understood.' */}
              <linearGradient id="mantra-gold-system" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8c7965" />
                <stop offset="25%" stopColor="#f5ebd6" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#d1be9b" />
                <stop offset="100%" stopColor="#6e5d4b" />
              </linearGradient>

              {/* VERTICAL THRESHOLD LINE GLOW: Maps the master gold gradient color path onto the central dividing line, tapering cleanly to zero opacity at the tips */}
              <linearGradient id="threshold-axis-gold-taper" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8c7965" stopOpacity="0" />
                <stop offset="25%" stopColor="#d1be9b" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#d1be9b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8c7965" stopOpacity="0" />
              </linearGradient>

              {/* CENTER PORTAL VOID ATMOSPHERE: Quiet cinematic golden haze pocket inside the crescent void */}
              <radialGradient id="approved-center-mist" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#f5ebd6" stopOpacity="0.26" />
                <stop offset="50%" stopColor="#d1be9b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              {/* Soft low-contrast shadow filter mapping sitting below a strict 12% opacity threshold */}
              <filter id="approved-subtle-feather" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* INTEGRATION SHADOW: Faint ambient backing shadow sitting at a quiet 12% opacity */}
            <g filter="url(#approved-subtle-feather)" opacity="0.12">
              <path d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" fill="#000000" />
              <path d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" fill="#000000" />
              <line x1="100" y1="5" x2="100" y2="105" stroke="#000000" strokeWidth="1.5" opacity="0.2" />
            </g>

            {/* CINEMATIC ATMOSPHERE MIST: Soft golden glow hidden inside the crescent void space */}
            <circle cx="100" cy="55" r="32" fill="url(#approved-center-mist)" filter="url(#approved-subtle-feather)" />

            {/* THE VISUAL FOCUS: Elegant left crescent arc bound to the master gold sheen */}
            <path d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" fill="url(#mantra-gold-system)" />

            {/* THE VISUAL FOCUS: Elegant right crescent arc bound to the master gold sheen */}
            <path d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" fill="url(#mantra-gold-system)" />

            {/* SOFT BACKGROUND AXIS BLOOM TRACK */}
            <line x1="100" y1="5" x2="100" y2="105" stroke="#e9e0d2" strokeWidth="1.2" opacity="0.15" filter="url(#approved-subtle-feather)" />

            {/* CENTRAL THRESHOLD LINE: Ultra-thin 0.35px divider axis line reflecting the exact gold-taper light trail */}
            <line x1="100" y1="5" x2="100" y2="105" stroke="url(#threshold-axis-gold-taper)" strokeWidth="0.35" />

            {/* Main Studio Typography Core */}
            <text x="100" y="124" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="300" letterSpacing="0.48em" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
              THE TRIADIC STUDIO
            </text>
          </svg>

          {/* THE GOLD EXPERIENCE TRACK: Enlarged subtitle layer mapped perfectly to your master gold system */}
          <div style={{
            marginTop: '14px',
            fontSize: '11.5px', 
            fontWeight: 500,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#ffffff',
            display: 'flex',
            gap: '0.36em',
            justifyContent: 'center'
          }}>
            <span>SPATIAL</span>
            <span style={{
              background: 'linear-gradient(135deg, #8c7965 0%, #f5ebd6 25%, #ffffff 50%, #d1be9b 75%, #6e5d4b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              fontStyle: 'italic', 
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.75)) drop-shadow(0 0 10px rgba(245, 235, 214, 0.55))',
            }}>
              EXPERIENCE
            </span>
            <span>DESIGN</span>
          </div>

        </div>
      </section>

      {/* Studio Mantra Section with Unified Gold Lock */}
      <section className="hero-mantra-section">
        <p className="eyebrow">Spatial Styling & Visual Experience Design</p>
        <h1>
          Spaces remembered<br />
          before they are<br />
          <em 
            style={{
              fontStyle: 'italic',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #8c7965 0%, #f5ebd6 25%, #ffffff 50%, #d1be9b 75%, #6e5d4b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.75)) drop-shadow(0 0 12px rgba(245, 235, 214, 0.55))',
            }}
          >
            understood.
          </em>
        </h1>
        <div className="pillars">
          <span>Atmosphere</span>
          <span>Narrative</span>
          <span>Materiality</span>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio-title">Portfolio</div>
        <div className="portfolio-stage">
          <div className="tiles">
            {projects.map((project, index) => (
              <button
                key={`${project.image}-${index}`}
                type="button"
                className={`tile tile-${index + 1}`}
                onClick={() => openLightbox(index)}
                aria-label={`Open ${project.title} in Full Screen`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <img src={project.image} alt={project.title} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint">
        <div className="blueprint-left">
          <p className="eyebrow">The Emotional Blueprint</p>
          <h2>Every space leaves<br />an emotional imprint.</h2>
          
          <div className="blueprint-diagram">
            <div className="blueprint-labels">
              <span>Colour</span>
              <span>Texture</span>
              <span>Scale</span>
              <span>Light</span>
              <span>Material</span>
              <span>Movement</span>
            </div>
            
            <div className="blueprint-stack">
              {projects.slice(0, 6).map((project, index) => (
                <div key={index} className={`blueprint-layer layer-${index + 1}`}>
                  <img src={project.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="blueprint-right">
          <p className="eyebrow">Our Blueprint Framework</p>
          <h3>A spatial analysis method exploring how environments influence perception.</h3>
          <ul className="blueprint-list">
            <li>Colour sensitivity</li>
            <li>Material response</li>
            <li>Emotional atmosphere</li>
            <li>Spatial stimulation</li>
            <li>Visual balance</li>
            <li>Environmental comfort</li>
          </ul>
        </div>
      </section>

      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsOpen(false)}>✕</button>
            <div className="lightbox-grid">
              <div className="lightbox-image-wrapper">
                <img src={projects[active].image} alt="" />
              </div>
              <div className="lightbox-content">
                <div className="lightbox-count">
                  {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
                <h2>{projects[active].title}</h2>
                <span className="lightbox-category">{projects[active].category}</span>
                <p>{projects[active].description}</p>
                <div className="lightbox-controls">
                  <button type="button" onClick={(e) => { e.stopPropagation(); setActive(active === 0 ? projects.length - 1 : active - 1); }}>Prev</button>
                  <span>□</span>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setActive(active === projects.length - 1 ? 0 : active + 1); }}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="about">
        <span>About</span>
        <div className="about-content-wrapper">
          <p>The Triadic Studio is a creative practice exploring the relationship between space, perception and emotion.</p>
          <p>Through the Emotional Blueprint, we study the subtle elements that shape human experience—light, materiality, atmosphere, scale and memory—to uncover why certain environments stay with us long after we leave them.</p>
          <p>Our work is less concerned with decoration and more interested in resonance: the invisible dialogue between people and place.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Not for the ordinary.<br /><em>Feel deeply. Choose differently.</em></p>
          <nav className="footer-nav">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            <a href="mailto:thetriadicstudio@gmail.com">thetriadicstudio@gmail.com</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
