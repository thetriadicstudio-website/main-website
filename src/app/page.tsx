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

      {/* PURE EMBEDDED BRAND ENGINE - UNCONSTRAINED OPTICAL LIGHT LAYER */}
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          
          {/* HARDCODED LENS FLARE RAYS: Separated completely from vector limits to bleed infinitely */}
          <div className="html-lens-glow-core" />
          <div className="html-lens-ray ray-diag-1" />
          <div className="html-lens-ray ray-diag-2" />
          <div className="html-lens-ray ray-diag-3" />
          <div className="html-lens-ray ray-diag-4" />

          <svg viewBox="0 0 200 150" className="vector-brand-master">
            <defs>
              {/* Multi-stop High-Contrast Champagne Gold Sheen to simulate heavy metallic reflection */}
              <linearGradient id="heavy-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7a6855" />
                <stop offset="20%" stopColor="#f7eedb" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="48%" stopColor="#eddcc4" />
                <stop offset="65%" stopColor="#bfae93" />
                <stop offset="85%" stopColor="#f7eedb" />
                <stop offset="100%" stopColor="#5c4e3f" />
              </linearGradient>
            </defs>

            {/* VIBRATING OUTER LAYER: Fine Ghosted Left Crescent */}
            <path 
              d="M 72 20 C 48 38, 48 72, 72 90 C 58 78, 58 32, 72 20 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.18"
            />

            {/* MAIN INNER LAYER: Bold Left Moon Curve */}
            <path 
              d="M 83 24 C 62 40, 62 70, 83 86 C 70 76, 70 34, 83 24 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* MAIN INNER LAYER: Bold Right Moon Curve */}
            <path 
              d="M 117 24 C 138 40, 138 70, 117 86 C 130 76, 130 34, 117 24 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* VIBRATING OUTER LAYER: Fine Ghosted Right Crescent */}
            <path 
              d="M 128 20 C 152 38, 152 72, 128 90 C 142 78, 142 32, 128 20 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.18"
            />

            {/* CENTRAL BEAM LAYER: Sharp Light-Piercing Golden Threshold Line */}
            <line 
              x1="100" y1="2" x2="100" y2="108" 
              stroke="url(#heavy-gold-metallic)" 
              strokeWidth="1.2" 
              strokeLinecap="round"
            />

            {/* HIGH-INTENSITY CORE LIGHT LAYER: Pure White Incandescent Center Laser */}
            <line 
              x1="100" y1="5" x2="100" y2="105" 
              stroke="#ffffff" 
              strokeWidth="0.6" 
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* High-End Studio Typography Vectors with premium tracking */}
            <text 
              x="100" y="126" 
              textAnchor="middle" 
              fill="#ffffff" 
              fontSize="7.5" 
              fontWeight="300" 
              letterSpacing="0.52em"
              opacity="0.95"
            >
              THE TRIADIC STUDIO
            </text>

            {/* Subtitle track maps gold gradient directly onto typography lines */}
            <text 
              x="100" y="138" 
              textAnchor="middle" 
              fontSize="4.2" 
              fontWeight="500" 
              letterSpacing="0.38em"
              fill="url(#heavy-gold-metallic)"
            >
              SPATIAL EXPERIENCE DESIGN
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
            </div>

            <div className="blueprint-stack">
              <div className="blueprint-layer layer-1">
                <img src="/portfolio/1.jpg" alt="Atmospheric Overlay" />
              </div>
              <div className="blueprint-layer layer-2">
                <img src="/portfolio/2.jpg" alt="Textural Overlay" />
              </div>
              <div className="blueprint-layer layer-3">
                <img src="/portfolio/3.jpg" alt="Structural Overlay" />
              </div>
            </div>
          </div>
        </div>

        <div className="blueprint-right">
          <p className="eyebrow">The Studio Framework</p>
          <ul className="blueprint-list">
            <li>01 / Structural Memory Formulation</li>
            <li>02 / Tactile Subconscious Curations</li>
            <li>03 / High-Stated Chromatic Depths</li>
            <li>04 / Infinite Light Mirror Paths</li>
          </ul>
        </div>
      </section>

      {/* FOOTER TIMELINE FRAME */}
      <footer className="footer">
        <span className="eyebrow">© 2026 THE TRIADIC STUDIO</span>
        <nav className="footer-nav">
          <a href="#portfolio">Archive</a>
          <a href="#blueprint">Framework</a>
          <a href="#contact">Inquire</a>
        </nav>
      </footer>

      {/* PORTFOLIO LIGHTBOX COMPONENT ENGINE */}
      {isOpen && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            type="button" 
            className="lightbox-close" 
            onClick={() => setIsOpen(false)}
            aria-label="Close Lightbox"
          >
            ✕
          </button>
          
          <div className="lightbox-content-frame" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-nav nav-prev" 
              onClick={previousProject}
              aria-label="Previous Project"
            >
              ←
            </button>

            <div className="lightbox-display-core">
              <div className="lightbox-image-wrapper">
                <img 
                  src={projects[active].image} 
                  alt={projects[active].title} 
                  className="lightbox-main-img" 
                />
              </div>
              <div className="lightbox-meta-panel">
                <span className="lightbox-index">{String(active + 1).padStart(2, '0')}</span>
                <span className="lightbox-category">{projects[active].category}</span>
                <h3 className="lightbox-title">{projects[active].title}</h3>
                <p className="lightbox-desc">{projects[active].description}</p>
              </div>
            </div>

            <button 
              type="button" 
              className="lightbox-nav nav-next" 
              onClick={nextProject}
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
