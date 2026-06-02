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

            {/* VOLUMETRIC CENTER PILLAR ENGINE */}
            <rect x="96.5" y="2" width="7" height="106" fill="url(#vertical-ambient-glow)" filter="blur(2.5px)" opacity="0.45" />
            <rect x="98.2" y="2" width="3.6" height="106" fill="url(#vertical-beam-glow)" filter="url(#soft-glow-filter)" opacity="0.65" />
            <rect x="99.4" y="4" width="1.2" height="102" fill="url(#vertical-beam-glow)" opacity="0.98" />

            {/* SMOOTH RADIAL GLOW FOCUS WITH NO CENTRAL DOT POINT */}
            <circle cx="100" cy="55" r="4" fill="#ffffff" filter="blur(1.5px)" opacity="0.95" />
            <circle cx="100" cy="55" r="8" fill="#f5ebd6" opacity="0.4" filter="blur(3px)" />
            <circle cx="100" cy="55" r="16" fill="#d1be9b" opacity="0.2" filter="blur(5px)" />

            {/* Typography Strings */}
            <text x="100" y="124" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="300" letterSpacing="0.48em" className="typography-brand-title">
              THE TRIADIC STUDIO
            </text>
            <text x="100" y="136" textAnchor="middle" fontSize="4.5" fontWeight="600" letterSpacing="0.34em" className="typography-brand-sub">
              <tspan fill="#ffffff">SPATIAL </tspan>
              <tspan fill="url(#heavy-gold-metallic)">EXPERIENCE </tspan>
              <tspan fill="#ffffff">DESIGN</tspan>
            </text>
          </svg>
        </div>
      </section>

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

      <section className="blueprint" id="blueprint">
        <div className="blueprint-left">
          <p className="eyebrow">The Emotional Blueprint</p>
          <h2>Every space leaves<br />an emotional imprint.</h2>
          
          <div className="blueprint-diagram">
            <div className="blueprint-labels">
              <span>Colour</span>
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

            {/* VOLUMETRIC CENTER PILLAR ENGINE */}
            <rect x="96.5" y="2" width="7" height="106" fill="url(#vertical-ambient-glow)" filter="blur(2.5px)" opacity="0.45" />
            <rect x="98.2" y="2" width="3.6" height="106" fill="url(#vertical-beam-glow)" filter="url(#soft-glow-filter)" opacity="0.65" />
            <rect x="99.4" y="4" width="1.2" height="102" fill="url(#vertical-beam-glow)" opacity="0.98" />

            {/* SMOOTH RADIAL GLOW FOCUS WITH NO CENTRAL DOT POINT */}
            <circle cx="100" cy="55" r="4" fill="#ffffff" filter="blur(1.5px)" opacity="0.95" />
            <circle cx="100" cy="55" r="8" fill="#f5ebd6" opacity="0.4" filter="blur(3px)" />
            <circle cx="100" cy="55" r="16" fill="#d1be9b" opacity="0.2" filter="blur(5px)" />

            {/* Typography Strings */}
            <text x="100" y="124" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="300" letterSpacing="0.48em" className="typography-brand-title">
              THE TRIADIC STUDIO
            </text>
            <text x="100" y="136" textAnchor="middle" fontSize="4.5" fontWeight="600" letterSpacing="0.34em" className="typography-brand-sub">
              <tspan fill="#ffffff">SPATIAL </tspan>
              <tspan fill="url(#heavy-gold-metallic)">EXPERIENCE </tspan>
              <tspan fill="#ffffff">DESIGN</tspan>
            </text>
          </svg>
        </div>
      </section>

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

      <section className="blueprint" id="blueprint">
        <div className="blueprint-left">
          <p className="eyebrow">The Emotional Blueprint</p>
          <h2>Every space leaves<br />an emotional imprint.</h2>
          
          <div className="blueprint-diagram">
            <div className="blueprint-labels">
              <span>Colour</span>
