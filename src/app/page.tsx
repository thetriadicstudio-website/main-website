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
  {
    title: 'Obsidian Sanctuary',
    category: 'Spatial Styling',
    image: '/portfolio/8.jpg',
    description: 'A moody luxury lounge balancing dark raw textures and living nature. Features a textured stone accent wall with integrated biophilic plantings, a monolithic black marble fireplace structure, and organic seating overlooking a misty forest panorama.',
  },
  {
    title: 'Monolithic Horizon',
    category: 'Architectural Atmosphere',
    image: '/portfolio/9.jpg',
    description: 'An elevated perspective highlighting structural geometry and panoramic scale. A floating ceiling pavilion with integrated warm LED light channels defines the central lounge, framed by full-height glass walls that merge the interior seating with a vast, misty pine forest.',
  },
  {
    title: 'Golden Threshold',
    category: 'Light & Narrative',
    image: '/portfolio/10.jpg',
    description: 'A dramatic study of cinematic natural illumination. Piercing golden hour sunbeams intersect the dark architectural planes, casting high-contrast silhouettes and highlighting the interplay between the glowing geometric ceiling installation and warm organic timber.',
  },
  {
    title: 'Tactile Contours',
    category: 'Material Exploration',
    image: '/portfolio/11.jpg',
    description: 'A macro perspective emphasizing organic textures and depth of field. The weathered, twisting branches of a sculptural driftwood element dominate the foreground, contrasting raw natural fibers against the softly blurred glow of the modern lounge and fireplace behind it.',
  },
  {
    title: 'Dual Coexistence',
    category: 'Spatial Narrative',
    image: '/portfolio/12.jpg',
    description: 'A profile view capturing the balance between internal warmth and external atmosphere. The deep texture of the stone installation and the linear fireplace create a protective, grounding anchor against the expansive, cool-toned woodland visible through the glass panels.',
  },
  {
    title: 'Atmospheric Convergence',
    category: 'Spatial Experience',
    image: '/portfolio/13.jpg',
    description: 'A wide, grounding corner perspective facing the expansive perimeter glazing. Curved obsidian seating assemblies encircle a low-profile glass table, balancing the stark verticality of the surrounding forest with a fluid, continuous social landscape.',
  },
  {
    title: 'Twilight Boundaries',
    category: 'Architectural Atmosphere',
    image: '/portfolio/14.jpg',
    description: 'A concluding study of spatial transition into nightfall. As daylight fades into deep twilight shadows, the interior boundaries dissolve entirely into the dark forest panorama, leaving the glowing geometric light sculpture to anchor the room\'s warm, contemplative soul.',
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
      {/* ================= SECTION 1: HERO HEADER UPDATES ================= */}
      <div className="hero-header-top-row">
        {/* Main Statement Top Left */}
        <section className="hero-mantra-section">
          <span className="eyebrow">Spatial Styling & Visual Experience Design</span>
          <h1>
            Spaces remembered long after they are left, because they were <em className="gold-text-glow">understood.</em>
          </h1>
          <div className="pillars">
            <span>Atmosphere</span>
            <span>•</span>
            <span>Narrative</span>
            <span>•</span>
            <span>Materiality</span>
          </div>
        </section>

        {/* Brand Heading Top Right (Logo removed) */}
        <div className="brand-header-right-side">
          <h2 className="brand-title-text">The Triadic Studio</h2>
          <p className="brand-subtitle-text">Spatial Experience Design</p>
        </div>
      </div>

      {/* ================= SECTION 2: PORTFOLIO EXPANSION (14 TILES) ================= */}
      <section className="portfolio">
        <h3 className="portfolio-title">Portfolio</h3>
        <div className="tiles">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`tile tile-${idx + 1}`}
              onClick={() => openLightbox(idx)}
            >
              <span>{(idx + 1).toString().padStart(2, '0')}</span>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: REALIGNED BLUEPRINT & ABOUT ================= */}
      <section className="blueprint">
        <div className="blueprint-realigned-row">
          
          {/* Vertical Menu Column 1 */}
          <div className="blueprint-labels-column">
            <ul className="blueprint-list-menu">
              <li>Colour</li>
              <li>Texture</li>
              <li>Scale</li>
              <li>Light</li>
              <li>Material</li>
              <li>Movement</li>
            </ul>
          </div>

          {/* Isometric Blueprint Graphic Column 2 Shifted Left */}
          <div className="blueprint-diagram">
            <div className="blueprint-stack">
              <div className="blueprint-layer layer-1"><img src="/portfolio/1.jpg" alt="" /></div>
              <div className="blueprint-layer layer-2"><img src="/portfolio/2.jpg" alt="" /></div>
              <div className="blueprint-layer layer-3"><img src="/portfolio/3.jpg" alt="" /></div>
              <div className="blueprint-layer layer-4"><img src="/portfolio/4.jpg" alt="" /></div>
              <div className="blueprint-layer layer-5"><img src="/portfolio/5.jpg" alt="" /></div>
              <div className="blueprint-layer layer-6"><img src="/portfolio/6.jpg" alt="" /></div>
            </div>
          </div>

          {/* Spatial Blueprint Text Column 3 Following Left */}
          <div className="blueprint-right">
            <span className="eyebrow">The Emotional Blueprint</span>
            <h3>A spatial analysis method exploring how environments influence perception.</h3>
            <ul className="blueprint-list">
              <li>Colour Sensitivity</li>
              <li>Sensory Responses</li>
              <li>Emotional Atmosphere</li>
              <li>Spatial Simulation</li>
              <li>Volume Balance</li>
              <li>Environmental Comfort</li>
            </ul>
          </div>

        </div>
      </section>

      {/* About Description Block Section */}
      <section className="about">
        <span>About</span>
        <div className="about-content-wrapper">
          <p>The Triadic Studio is a creative practice exploring the relationship between space, perception, and emotion.</p>
          <p>Through professional blueprint layout, we study the sensory elements that design atmospheric identities—materiality, atmosphere, scale and context—creating environments that stay with clients long after they leave them.</p>
          <p>Our work is focused on architectural design alternatives that elevate spatial experience, generating a clear dialogue between people and place.</p>
        </div>
      </section>

      {/* ================= FULLY WORKING SOCIAL LINKS FOOTER ================= */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <p>Feel deeply. <em>Choose differently.</em></p>
          </div>
          <div className="footer-nav">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="mailto:thetriadicstudio@gmail.com">thetriadicstudio@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Overlay Modal Box Presentation Slider */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsOpen(false)}>✕</button>
            <div className="lightbox-grid">
              <div className="lightbox-image-wrapper">
                <img src={projects[active].image} alt={projects[active].title} />
              </div>
              <div className="lightbox-content">
                <span className="lightbox-count">
                  {(active + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
                </span>
                <h2>{projects[active].title}</h2>
                <span className="lightbox-category">{projects[active].category}</span>
                <p>{projects[active].description}</p>
                <div className="lightbox-controls">
                  <button onClick={previousProject}>← Prev</button>
                  <span>|</span>
                  <button onClick={nextProject}>Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
