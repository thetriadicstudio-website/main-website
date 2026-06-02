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
      {/* PURE VECTOR EMBEDDED BRAND ENGINE - INFINITE SCATTER AMBIENT PORTAL */}
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          <svg viewBox="0 0 200 150" className="vector-brand-master" style={{ overflow: 'visible' }}>
            <defs>
              {/* Premium Metallic Gradient Shimmer for Sharp Ivory/Gold Moon Curves */}
              <linearGradient id="heavy-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c7bdaf" />
                <stop offset="35%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e9e0d2" />
                <stop offset="100%" stopColor="#96877e" />
              </linearGradient>

              {/* INFINITE SHADOW FALLOFF: Dissolves velvety darkness across an expansive radius with zero edge borders */}
              <radialGradient id="infinite-shadow-shroud" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#080c0b" stopOpacity="0.85" />
                <stop offset="25%" stopColor="#080c0b" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#0a100f" stopOpacity="0.25" />
                <stop offset="85%" stopColor="#0d1412" stopOpacity="0" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              {/* PORTAL MIST DEPTH: Whisper-quiet golden aura providing depth between the crescents without creating a ring */}
              <radialGradient id="whisper-portal-mist" cx="50%" cy="50%" r="35%">
                <stop offset="0%" stopColor="#e9e0d2" stopOpacity="0.22" />
                <stop offset="40%" stopColor="#d1be9b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              {/* VERTICAL GRADIENT THRESHOLD FADE: Taper-locks line opacity so it dissolves naturally at the tips */}
              <linearGradient id="line-axis-taper" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="25%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.52" /> {/* Reduced overall raw volume by ~30% */}
                <stop offset="75%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Advanced Volumetric Diffusion Filter for Background Scattering */}
              <filter id="portal-atmosphere-blur" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="12" />
              </filter>

              {/* Subtly defuses echo textures to anchor a sense of hidden movement */}
              <filter id="echo-shimmer-soften" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* EXPENSIVE ATMOSPHERIC BACKDROP: Seamless shadow shroud expanding smoothly across the stone matrix */}
            <rect x="-100" y="-50" width="400" height="250" fill="url(#infinite-shadow-shroud)" filter="url(#portal-atmosphere-blur)" />

            {/* PORTAL DEPTH EFFECT: Highly diffused mist pocket hinting at a portal hidden behind the crescents */}
            <circle cx="100" cy="55" r="50" fill="url(#whisper-portal-mist)" filter="url(#portal-atmosphere-blur)" />

            {/* GHOSTED ECHO SYSTEM: Ultra-low opacity vibrating left crescent layer */}
            <path 
              d="M 75 22 C 54 38, 54 72, 75 88 C 61 77, 61 33, 75 22 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.04"
              filter="url(#echo-shimmer-soften)"
            />

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

            {/* GHOSTED ECHO SYSTEM: Ultra-low opacity vibrating right crescent layer */}
            <path 
              d="M 125 22 C 146 38, 146 72, 125 88 C 139 77, 139 33, 125 22 Z" 
              fill="url(#heavy-gold-metallic)" 
              opacity="0.04"
              filter="url(#echo-shimmer-soften)"
            />

            {/* THRESHOLD PORTAL AXIS REINFORCEMENT: Soft backdrop bloom trail */}
            <line 
              x1="100" y1="5" x2="100" y2="105" 
              stroke="#e9e0d2" 
              strokeWidth="1.5" 
              opacity="0.1" 
              filter="url(#portal-atmosphere-blur)"
            />

            {/* THRESHOLD CENTER LINE: Ultra-thin, straight needle line utilizing the vertical taper mask */}
            <line 
              x1="100" y1="5" x2="100" y2="105" 
              stroke="url(#line-axis-taper)" 
              strokeWidth="0.32" 
            />

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
