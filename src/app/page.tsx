'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Echoes of Memory',
    category: 'Residential',
    image: '/portfolio/1.jpg',
    description: 'A dramatic view of ancient structural design, where stark historical lines, deep reflective pools, and shadow-drenched pathways frame an intense emotional landscape.',
  },
  {
    title: 'Textured Stillness',
    category: 'Residential',
    image: '/portfolio/2.jpg',
    description: 'A tight interior study contrasting the deep tones of a velvet couch with the organic folds of a fringed throw, a classic book, and shimmering ambient bokeh.',
  },
  {
    title: 'Inner Courtyard',
    category: 'Architecture Study',
    image: '/portfolio/3.jpg',
    description: 'An intimate, textured close-up capturing a scholarly writing set arranged on raw concrete framing, offering a split-focus glimpse into a warm, sun-lit historic courtyard.',
  },
  {
    title: 'Golden Pavilions',
    category: 'Spatial Styling',
    image: '/portfolio/4.jpg',
    description: 'A balanced architectural perspective of a luxury minimalist pavilion, highlighting striking traditional rooflines and circular portals perfectly mirrored in a still reflection pool during the golden hour.',
  },
  {
    title: 'Misty Portals',
    category: 'Concept Study',
    image: '/portfolio/5.jpg',
    description: 'An outdoor architectural perspective focusing on raw concrete frames and a misty moongate, contrasted by sharp tropical greenery and fallen golden leaves under a heavy sky.',
  },
  {
    title: 'Water Remembers What Stone Forgets',
    category: 'Material Study',
    image: '/portfolio/6.jpg',
    description: 'An ethereal subterranean portal where raw, moss-covered stone structures encase a deep, sun-drenched aquatic chamber, capturing the silent stillness of light piercing through water.',
  },
  {
    title: 'Floral Sanctuary',
    category: 'Residential',
    image: '/portfolio/7.jpg',
    description: 'An ethereal internal window setting defined by cascading pink blossoms contrasting against high, industrial concrete walls.',
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActive(index);
    setIsOpen(true);
  };

  const previousProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(active === 0 ? projects.length - 1 : active - 1);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(active === projects.length - 1 ? 0 : active + 1);
  };

  return (
    <main className="page">
      {/* Pristine Minimalist Empty Header Frame */}
      <header className="header">
        <div className="header-spacer" />
      </header>

      {/* APPROVED EXCLUSIVE EMBEDDED BRAND PORTAL - BULLETPROOF SOLID COLOR INTEGRATION */}
      <section className="hero-branding-container" style={{ margin: '80px auto 100px' }}>
        <div className="pure-code-brand-wrapper" style={{ padding: '60px' }}>
          <svg viewBox="0 0 200 150" className="vector-brand-master" style={{ overflow: 'visible' }}>
            <defs>
              {/* Premium Metallic Gradient Shimmer for Sharp Ivory/Gold Moon Curves */}
              <linearGradient id="heavy-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c7bdaf" />
                <stop offset="35%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e9e0d2" />
                <stop offset="100%" stopColor="#96877e" />
              </linearGradient>

              {/* VERTICAL AXIS FADE: Non-bright ivory at intersection, dissolving smoothly into ambient transparency at the tips */}
              <linearGradient id="threshold-axis-taper" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e9e0d2" stopOpacity="0" />
                <stop offset="25%" stopColor="#e9e0d2" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" /> {/* ~30% Dimmer than bright digital white */}
                <stop offset="75%" stopColor="#e9e0d2" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#e9e0d2" stopOpacity="0" />
              </linearGradient>

              {/* APPROVED PORTAL MIST DEPTH: Gentle cinematic golden haze trail restricted within the void space */}
              <radialGradient id="approved-center-mist" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#e9e0d2" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#d1be9b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              {/* Ultra-low contrast feather filter to smoothly bleed background shadows */}
              <filter id="approved-subtle-feather" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* INTEGRATION SHADOW MATRIX: Whisper-quiet underlying shadow resting below a strict 12% opacity boundary */}
            <g filter="url(#approved-subtle-feather)" opacity="0.12">
              <path d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" fill="#000000" />
              <path d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" fill="#000000" />
              <line x1="100" y1="5" x2="100" y2="105" stroke="#000000" strokeWidth="1.5" />
            </g>

            {/* APPROVED CENTER MIST HAZE: Quiet cinematic portal depth emerging naturally behind the line split */}
            <circle cx="100" cy="55" r="32" fill="url(#approved-center-mist)" filter="url(#approved-subtle-feather)" />

            {/* THE VISUAL FOCUS: Sharp, elegant left ivory moon curve */}
            <path 
              d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* THE VISUAL FOCUS: Sharp, elegant right ivory moon curve */}
            <path 
              d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* LINE BLOOM TRACK: Diffuses a subtle aura channel immediately under the core threshold vector */}
            <line 
              x1="100" y1="5" x2="100" y2="105" 
              stroke="#e9e0d2" 
              strokeWidth="1.2" 
              opacity="0.15" 
              filter="url(#approved-subtle-feather)"
            />

            {/* CENTRAL THRESHOLD LINE: Ultra-thin 0.35px axis running perfectly straight under the gradient taper */}
            <line 
              x1="100" y1="5" x2="100" y2="105" 
              stroke="url(#threshold-axis-taper)" 
              strokeWidth="0.35" 
            />

            {/* Premium Studio Typography Layout Coordinates */}
            <text 
              x="100" y="124" 
              textAnchor="middle" 
              fill="#ffffff" 
              fontSize="8" 
              fontWeight="300" 
              letterSpacing="0.48em"
              className="typography-brand-title"
            >
              THE TRIADIC STUDIO
            </text>

            {/* APPROVED BRAND SUBTITLE: Firmly locks metallic champagne gold fill onto the word EXPERIENCE */}
            <text 
              x="100" y="136" 
              textAnchor="middle" 
              fontSize="4.5" 
              fontWeight="600" 
              letterSpacing="0.34em"
              className="typography-brand-sub"
            >
              <tspan fill="#ffffff">SPATIAL </tspan>
              <tspan fill="url(#heavy-gold-metallic)">EXPERIENCE </tspan>
              <tspan fill="#ffffff">DESIGN</tspan>
            </text>
          </svg>
        </div>
      </section>

      {/* Studio Mantra Section with Gold Text Bind Hook */}
      <section className="hero-mantra-section">
        <p className="eyebrow">Spatial Styling & Visual Experience Design</p>
        <h1>Spaces remembered<br />before they are<br /><em className="gold-text-glow">understood.</em></h1>
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
              <div className="blueprint-layer layer-1"><img src="/portfolio/1.jpg" alt="" /></div>
              <div className="blueprint-layer layer-2"><img src="/portfolio/2.jpg" alt="" /></div>
              <div className="blueprint-layer layer-3"><img src="/portfolio/3.jpg" alt="" /></div>
              <div className="blueprint-layer layer-4"><img src="/portfolio/4.jpg" alt="" /></div>
              <div className="blueprint-layer layer-5"><img src="/portfolio/5.jpg" alt="" /></div>
              <div className="blueprint-layer layer-6"><img src="/portfolio/6.jpg" alt="" /></div>
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
                <img src={projects[active].image} alt={projects[active].title} />
              </div>
              <div className="lightbox-content">
                <div className="lightbox-count">
                  {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
                <h2>{projects[active].title}</h2>
                <span className="lightbox-category">{projects[active].category}</span>
                <p>{projects[active].description}</p>
                <div className="lightbox-controls">
                  <button type="button" onClick={previousProject}>Prev</button>
                  <span>□</span>
                  <button type="button" onClick={nextProject}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgraded About Section with your New Custom Paragraphs */}
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="mailto:thetriadicstudio@gmail.com">thetriadicstudio@gmail.com</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
