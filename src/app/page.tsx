'use client';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const openLightbox = (index: number) => {
    setActive(index);
    setIsOpen(true);
  };

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
      <section className="hero-branding-container">
        <div className="pure-code-brand-wrapper">
          <svg viewBox="0 0 200 115" className="vector-brand-master" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="mantra-gold-system" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8c7965" />
                <stop offset="25%" stopColor="#f5ebd6" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#d1be9b" />
                <stop offset="100%" stopColor="#6e5d4b" />
              </linearGradient>

              <linearGradient id="threshold-axis-gold-taper" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8c7965" stopOpacity="0" />
                <stop offset="25%" stopColor="#d1be9b" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#d1be9b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8c7965" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="approved-center-mist" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#f5ebd6" stopOpacity="0.26" />
                <stop offset="50%" stopColor="#d1be9b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0d1412" stopOpacity="0" />
              </radialGradient>

              <filter id="approved-subtle-feather" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            <g filter="url(#approved-subtle-feather)" opacity="0.12">
              <path d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" fill="#000000" />
              <path d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" fill="#000000" />
              <line x1="100" y1="5" x2="100" y2="105" stroke="#000000" strokeWidth="1.5" opacity="0.2" />
            </g>

            <circle cx="100" cy="55" r="32" fill="url(#approved-center-mist)" filter="url(#approved-subtle-feather)" />
            <path d="M 84 25 C 66 40, 66 70, 84 85 C 72 75, 72 35, 84 25 Z" fill="url(#mantra-gold-system)" />
            <path d="M 116 25 C 134 40, 134 70, 116 85 C 128 75, 128 35, 116 25 Z" fill="url(#mantra-gold-system)" />
            <line x1="100" y1="5" x2="100" y2="105" stroke="#e9e0d2" strokeWidth="1.2" opacity="0.15" filter="url(#approved-subtle-feather)" />
            <line x1="100" y1="5" x2="100" y2="105" stroke="url(#threshold-axis-gold-taper)" strokeWidth="0.35" />

            <text x="100" y="124" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="300" letterSpacing="0.48em" style={{ fontFamily: 'Georgia, serif' }}>
              THE TRIADIC STUDIO
            </text>
          </svg>

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

      {/* Studio Mantra Section */}
      <section className="hero-mantra-section">
        <p className="eyebrow">Spatial Styling & Visual Experience Design</p>
        <h1 style={{ fontFamily: 'Georgia, serif' }}>
          Spaces remembered<br />
          before they are<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>
            understood.
          </em>
        </h1>
      </section>
      {/* Portfolio Grid Section */}
      <section className="portfolio">
        <h2 className="portfolio-title">Selected Works</h2>
        <div className="portfolio-stage">
          <div className="tiles">
            {projects.map((project, index) => (
              <button
                key={index}
                type="button"
                className={`tile tile-${index + 1}`}
                onClick={() => openLightbox(index)}
                aria-label={`Open ${project.title} in Full Screen`}
              >
                <span>{project.category}</span>
                <img src={project.image} alt={project.title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal display layer */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 16, 14, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
        >
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              opacity: 0.6,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '11px',
              fontWeight: 600
            }}
          >
            Close ✕
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              maxWidth: '1180px',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
              aspectRatio: '4/3',
              backgroundColor: '#0a100e'
            }}>
              <img 
                src={projects[active].image} 
                alt={projects[active].title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 600, 
                letterSpacing: '0.35em', 
                textTransform: 'uppercase', 
                color: 'var(--ink-label)',
                marginBottom: '20px'
              }}>
                {projects[active].category}
              </span>
              <h3 style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '42px', 
                fontWeight: 300, 
                lineHeight: '1.2', 
                color: '#ffffff',
                marginBottom: '24px'
              }}>
                {projects[active].title}
              </h3>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: '1.75', 
                color: 'var(--ink-soft)',
                maxWidth: '440px'
              }}>
                {projects[active].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
