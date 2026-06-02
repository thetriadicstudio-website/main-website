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

      {/* PURE VECTOR EMBEDDED BRAND ENGINE */}
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          <svg viewBox="0 0 200 140" className="vector-brand-master">
            <defs>
              {/* Premium Metallic Gradient Shimmer */}
              <linearGradient id="brand-platinum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a3968f" />
                <stop offset="30%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e9e0d2" />
                <stop offset="70%" stopColor="#9e8d85" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>

            {/* Symmetrical Left Moon Curve */}
            <path 
              d="M 82 25 C 64 40, 64 70, 82 85 C 70 75, 70 35, 82 25 Z" 
              fill="url(#brand-platinum)" 
            />

            {/* Symmetrical Right Moon Curve */}
            <path 
              d="M 118 25 C 136 40, 136 70, 118 85 C 130 75, 130 35, 118 25 Z" 
              fill="url(#brand-platinum)" 
            />

            {/* Central Light-Piercing Threshold Line */}
            <line 
              x1="100" y1="12" x2="100" y2="98" 
              stroke="url(#brand-platinum)" 
              strokeWidth="1.2" 
              strokeLinecap="round"
              className="center-beam-glow"
            />

            {/* High-End Studio Typography Vectors */}
            <text 
              x="100" y="116" 
              textAnchor="middle" 
              fill="#ffffff" 
              fontSize="8" 
              fontWeight="400" 
              letterSpacing="0.45em"
              className="typography-brand-title"
            >
              THE TRIADIC STUDIO
            </text>

            <text 
              x="100" y="128" 
              textAnchor="middle" 
              fill="#a3968f" 
              fontSize="4.5" 
              fontWeight="600" 
              letterSpacing="0.32em"
              className="typography-brand-sub"
            >
              SPATIAL EXPERIENCE DESIGN
            </text>
          </svg>
        </div>
      </section>

      {/* Studio Mantra Section */}
      <section className="hero-mantra-section">
        <p className="eyebrow">Spatial Styling & Visual Experience Design</p>
        <h1>Spaces remembered<br />before they are<br /><em>understood.</em></h1>
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
