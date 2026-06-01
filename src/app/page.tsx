'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Coastal Sanctuary',
    category: 'Residential',
    image: '/portfolio/1.jpg',
    description: 'A close-up view of a serene living environment, where soft linens, layered textures, and quiet shadows set an intimate mood.',
  },
  {
    title: 'Inner Atelier',
    category: 'Residential',
    image: '/portfolio/2.jpg',
    description: 'A wider perspective of the sanctuary space, framing the minimalist furniture layout against soft ambient lighting.',
  },
  {
    title: 'Inner Courtyard',
    category: 'Architecture Study',
    image: '/portfolio/3.jpg',
    description: 'An architectural view looking out onto a sun-drenched pool area, blending modern arches with lush external landscape styling.',
  },
  {
    title: 'Verdant Shadows',
    category: 'Spatial Styling',
    image: '/portfolio/4.jpg',
    description: 'A dramatic interior perspective focusing on high-contrast palm leaves and tropical greenery under soft, misty overhead light.',
  },
  {
    title: 'The Portal Room',
    category: 'Concept Study',
    image: '/portfolio/5.jpg',
    description: 'A moody, cinematic interior highlighting a large circular stone window that frames an immersive natural pool.',
  },
  {
    title: 'Material & Stone',
    category: 'Material Study',
    image: '/portfolio/6.jpg',
    description: 'A tactile arrangement of river stones, masonry blocks, and unrefined wood textures highlighting organic materiality.',
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
      <header className="header">
        <a href="/" className="brand">
          THE TRIADIC STUDIO
        </a>
        <nav>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="mailto:thetriadicstudio@gmail.com">Email</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-panel">
          <p className="eyebrow">Spatial Styling & Visual Experience Design</p>
          <h1>Spaces remembered<br />before they are<br /><em>understood.</em></h1>
          <div className="pillars">
            <span>Atmosphere</span>
            <span>Narrative</span>
            <span>Materiality</span>
          </div>
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
          <p className="eyebrow">The Emotional Blueprint KT</p>
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
          <p className="eyebrow">Our Blueprint Framework KT</p>
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

      <section className="about">
        <span>About</span>
        <p>The Triadic Studio is a creative practice focused on emotional architecture...</p>
      </section>

      <footer className="footer">
        <p>Not for the ordinary.<br /><em>Feel deeply. Choose differently.</em></p>
      </footer>
    </main>
  );
}
