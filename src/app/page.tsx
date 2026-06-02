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

      {/* FIXED BRAND ENGINE - RAYS ARE INSIDE SVG TO PREVENT MISALIGNMENT */}
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          <svg viewBox="0 0 200 150" className="vector-brand-master">
            <defs>
              {/* Champagne Gold Metallic Sheen Gradient */}
              <linearGradient id="heavy-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8c7965" />
                <stop offset="22%" stopColor="#f5ebd6" />
                <stop offset="45%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#d1be9b" />
                <stop offset="85%" stopColor="#f5ebd6" />
                <stop offset="100%" stopColor="#6e5d4b" />
              </linearGradient>

              {/* Central Ray Light Source Gradient */}
              <linearGradient id="ray-glow-horizontal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="20%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* PHOTOGRAPHIC BEAM FADE GRADIENT: Mimics real optics feathering towards tips */}
              <linearGradient id="vertical-beam-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="20%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* AMBIENT CHAMBER GRADIENT: For soft background light falloff behind center laser */}
              <linearGradient id="vertical-ambient-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f5ebd6" stopOpacity="0" />
                <stop offset="35%" stopColor="#f5ebd6" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="65%" stopColor="#f5ebd6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f5ebd6" stopOpacity="0" />
              </linearGradient>

              {/* High-Performance Volumetric Soft Filter Blur Engine */}
              <filter id="soft-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* INTEGRATED BACKEND LENS RAYS: Hardcoded on exact center axis center point (100, 55) */}
            <g transform="rotate(38 100 55)">
              <rect x="0" y="54.5" width="200" height="1" fill="url(#ray-glow-horizontal)" opacity="0.65" />
            </g>
            <g transform="rotate(142 100 55)">
              <rect x="0" y="54.5" width="200" height="1" fill="url(#ray-glow-horizontal)" opacity="0.65" />
            </g>
            <g transform="rotate(-45 100 55)">
              <rect x="20" y="54.6" width="160" height="0.8" fill="url(#ray-glow-horizontal)" opacity="0.35" />
            </g>
            <g transform="rotate(225 100 55)">
              <rect x="20" y="54.6" width="160" height="0.8" fill="url(#ray-glow-horizontal)" opacity="0.35" />
            </g>

            {/* VIBRATING OUTER LAYER: Fine Ghosted Left Crescent */}
            <path 
              d="M 75 22 C 54 38, 54 72, 75 88 C 61 77, 61 33, 75 22 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.2"
            />

            {/* MAIN INNER LAYER: Bold Left Moon Curve */}
            <path 
              d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* MAIN INNER LAYER: Bold Right Moon Curve */}
            <path 
              d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" 
              fill="url(#heavy-gold-metallic)" 
            />

            {/* VIBRATING OUTER LAYER: Fine Ghosted Right Crescent */}
            <path 
              d="M 125 22 C 146 38, 146 72, 125 88 C 139 77, 139 33, 125 22 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.2"
            />

            {/* ========================================================================= */}
            {/* VOLUMETRIC CENTER PILLAR ENGINE: REPLACES FLAT STROKES WITH PHOTOGRAPHIC GLOW */}
            {/* ========================================================================= */}
            
            {/* Layer 1: Wide Ambient Halo Column */}
            <rect 
              x="96.5" y="2" width="7" height="106" 
              fill="url(#vertical-ambient-glow)" 
              filter="blur(2.5px)" 
              opacity="0.45" 
            />

            {/* Layer 2: Medium Feathered Light Pillar */}
            <rect 
              x="98.2" y="2" width="3.6" height="106" 
              fill="url(#vertical-beam-glow)" 
              filter="url(#soft-glow-filter)" 
              opacity="0.65" 
            />

            {/* Layer 3: Ultra-Sharp Core Laser Inner Blade */}
            <rect 
              x="99.4" y="4" width="1.2" height="102" 
              fill="url(#vertical-beam-glow)" 
              opacity="0.98" 
            />

            {/* INTERNAL SVG HOTSPOT: Locked perfectly at center convergence axis (100, 55) */}
            <circle cx="100" cy="55" r="3.5" fill="#ffffff" filter="blur(0.5px)" opacity="0.9" />
            <circle cx="100" cy="55" r="7" fill="#f5ebd6" opacity="0.3" filter="blur(2px)" />
            <circle cx="100" cy="55" r="14" fill="#d1be9b" opacity="0.15" filter="blur(4px)" />

            {/* High-End Studio Typography Vectors */}
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

            {/* Subtitle track maps gold styles onto custom title line layout */}
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
