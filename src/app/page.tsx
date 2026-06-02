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
      {/* PURE VECTOR EMBEDDED BRAND ENGINE - 3D FOLDED PILLAR ILLUSION */}
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          <svg viewBox="0 0 200 150" className="vector-brand-master" style={{ overflow: 'visible' }}>
            <defs>
              {/* Premium Metallic Gradient Shimmer for Outer Moon Curves */}
              <linearGradient id="heavy-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9e8d85" />
                <stop offset="25%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e9e0d2" />
                <stop offset="75%" stopColor="#d1be9b" />
                <stop offset="100%" stopColor="#6e5d4b" />
              </linearGradient>

              {/* PILLAR DEEP SHADOW FACET: Darker bronze-to-slate value gradient */}
              <linearGradient id="pillar-shadow-side" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2c2420" />
                <stop offset="30%" stopColor="#403630" />
                <stop offset="70%" stopColor="#1a1412" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </linearGradient>

              {/* PILLAR BRILLIANT HIGHLIGHT FACET: Stark, high-contrast platinum-to-champagne values */}
              <linearGradient id="pillar-highlight-side" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="15%" stopColor="#f5ebd6" />
                <stop offset="45%" stopColor="#d1be9b" />
                <stop offset="80%" stopColor="#54463c" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </linearGradient>

              {/* Center-Out Fading Gradient for Single Diagonal Lens Ray */}
              <radialGradient id="needle-ray-fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="15%" stopColor="#f5ebd6" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#e9e0d2" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              {/* Soft Backdrop Environmental Light Leak Filter */}
              <filter id="eclipse-light-leak" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur1" />
                <feGaussianBlur stdDeviation="1.5" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Subtly defuses ray paths to mimic real camera lens attributes */}
              <filter id="lens-ray-soften" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.5" />
              </filter>
            </defs>

            {/* RADIAL BACKGROUND HAZE: Smooth, fogged golden ambiance centered behind everything */}
            <circle cx="100" cy="55" r="35" fill="#f5ebd6" opacity="0.12" filter="url(#eclipse-light-leak)" />

            {/* ACCURATE ANATOMY LIGHTING RAYS - Bursting cleanly from center point 100, 55 */}
            <g filter="url(#lens-ray-soften)">
              {/* Single Diagonal Beam cutting cleanly down from Top-Left across the core */}
              <line x1="35" y1="-10" x2="165" y2="120" stroke="url(#needle-ray-fade)" strokeWidth="0.8" opacity="0.65" />
              
              {/* Subtle Horizontal Accent Light Shimmer anchoring the center axis */}
              <line x1="25" y1="55" x2="175" y2="55" stroke="url(#needle-ray-fade)" strokeWidth="0.5" opacity="0.45" />
            </g>

            {/* VIBRATING OUTER LAYER: Fine Ghosted Left Crescent */}
            <path 
              d="M 75 22 C 54 38, 54 72, 75 88 C 61 77, 61 33, 75 22 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.25"
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
              opacity="0.25"
            />

            {/* 3D SCULPTURAL CENTRAL PILLAR ILLUSION - Split right down the center vector line (x=100) */}
            {/* Left Facet: Curved left side falling into deep architectural shade */}
            <path 
              d="M 100 5 C 96 15, 94 30, 94 55 C 94 80, 96 95, 100 105 Z" 
              fill="url(#pillar-shadow-side)" 
            />
            
            {/* Right Facet: Curved right side catching brilliant direct highlight reflection */}
            <path 
              d="M 100 5 C 104 15, 106 30, 106 55 C 106 80, 104 95, 100 105 Z" 
              fill="url(#pillar-highlight-side)" 
            />

            {/* CENTRAL BEAM LAYER: Razor-thin white threshold line dividing the two facets */}
            <line x1="100" y1="5" x2="100" y2="105" stroke="#ffffff" strokeWidth="0.5" opacity="0.6" />

            {/* CENTRAL CORE LIGHT SOURCE: Radiant architectural flash point embedded into the fold */}
            <circle cx="100" cy="55" r="12" fill="#f5ebd6" opacity="0.2" filter="url(#eclipse-light-leak)" />
            <circle cx="100" cy="55" r="4.5" fill="#ffffff" opacity="0.6" filter="url(#eclipse-light-leak)" />
            <circle cx="100" cy="55" r="1.5" fill="#ffffff" opacity="0.95" />

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

            {/* Subtitle track maps custom gold styles straight onto the word EXPERIENCE */}
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
