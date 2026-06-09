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
      {/* ================= SECTION 1: HERO HEADER LAYOUT ================= */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', maxWidth: '1140px', margin: '0 auto 80px' }}>
        {/* Main Statement Left Realignment Column */}
        <div style={{ maxWidth: '640px' }}>
          <p className="eyebrow" style={{ margin: '0 0 16px 0' }}>Spatial Styling & Visual Experience Design</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#ffffff', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            Spaces remembered <br />
            long after they are left, <br />
            because they were <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '4px' }}>understood.</span>
          </h1>
          <div className="pillars" style={{ margin: '24px 0 0 0' }}>
            <span>Atmosphere</span>
            <span>Narrative</span>
            <span>Materiality</span>
          </div>
        </div>

        {/* Brand Heading Right Realignment Column (Logo Removed) */}
        <div style={{ textAlign: 'right' }}>
          <h2 className="eyebrow" style={{ fontSize: '13px', letterSpacing: '0.4em', fontWeight: 600, color: '#ffffff', margin: 0 }}>The Triadic Studio</h2>
          <p className="eyebrow" style={{ fontSize: '9px', opacity: 0.5, margin: '6px 0 0 0' }}>Spatial Experience Design</p>
        </div>
      </header>

      {/* Portfolio Title Anchor Block */}
      <div style={{ maxWidth: '1140px', margin: '0 auto 20px' }}>
        <h3 className="portfolio-title">Portfolio</h3>
      </div>

      {/* ================= SECTION 2: 14 PORTFOLIO TILES GRID ================= */}
      <section className="portfolio" style={{ maxWidth: '1140px', margin: '0 auto 120px' }}>
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

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '32px', fontWeight: 300, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Every space leaves an emotional imprint.
          </h2>
        </div>
      </section>

      {/* ================= SECTION 3: SPATIAL BLUEPRINT REALIGNMENT ================= */}
      <section className="blueprint" style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* Leftward Layout Realignment Container */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 440px 1fr', gap: '40px', width: '100%', alignItems: 'start' }}>
          
          {/* Vertical Menu Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ul className="blueprint-list" style={{ gap: '16px' }}>
              <li style={{ color: '#ffffff' }}>Colour</li>
              <li style={{ color: '#ffffff' }}>Texture</li>
              <li style={{ color: '#ffffff' }}>Scale</li>
              <li style={{ color: '#ffffff' }}>Light</li>
              <li style={{ color: '#ffffff' }}>Material</li>
              <li style={{ color: '#ffffff' }}>Movement</li>
            </ul>
          </div>

          {/* Isometric Blueprint Graphic Column 2 Shifted Left */}
          <div className="blueprint-stack" style={{ margin: 0, width: '100%' }}>
            <div className="blueprint-layer layer-1"><img src="/portfolio/1.jpg" alt="" /></div>
            <div className="blueprint-layer layer-2"><img src="/portfolio/2.jpg" alt="" /></div>
            <div className="blueprint-layer layer-3"><img src="/portfolio/3.jpg" alt="" /></div>
            <div className="blueprint-layer layer-4"><img src="/portfolio/4.jpg" alt="" /></div>
            <div className="blueprint-layer layer-5"><img src="/portfolio/5.jpg" alt="" /></div>
            <div className="blueprint-layer layer-6"><img src="/portfolio/6.jpg" alt="" /></div>
          </div>

          {/* Spatial Text Column 3 Following Left */}
          <div className="blueprint-right" style={{ paddingLeft: '20px' }}>
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

        {/* About Section Layout Block */}
        <div className="about" style={{ width: '100%', marginTop: '60px' }}>
          <span>About</span>
          <div className="about-content-wrapper" style={{ maxWidth: '820px' }}>
            <p>The Triadic Studio is a creative practice exploring the relationship between space, perception, and emotion.</p>
            <p>Through professional blueprint layout, we study the sensory elements that design atmospheric identities—materiality, atmosphere, scale and context—creating environments that stay with clients long after they leave them.</p>
            <p>Our work is focused on architectural design alternatives that elevate spatial experience, generating a clear dialogue between people and place.</p>
          </div>
        </div>

        {/* Global Footer Layout Area */}
        <footer className="footer" style={{ width: '100%', marginTop: '40px' }}>
          <div className="footer-content">
            <div>
              <p style={{ fontSize: '11px', opacity: 0.4, fontStyle: 'italic', margin: '0 0 4px 0', letterSpacing: '0.1em' }}>Not for the ordinary.</p>
              <p>Feel deeply. <em>Choose differently.</em></p>
            </div>
            <div className="footer-nav">
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="mailto:thetriadicstudio@gmail.com">thetriadicstudio@gmail.com</a>
            </div>
          </div>
        </footer>
      </section>

      {/* ================= LIGHTBOX / INTERACTIVE MODAL OVERLAY ================= */}
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --ink: #332b29;        
  --ink-soft: #9e8d85;   
  --ink-label: #a3968f;  
  --pearl: #ffffff; 
  --ivory: #e9e0d2;
  --glass: rgba(220, 250, 244, 0.16);
  --glass-border: rgba(255, 255, 255, 0.2);
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: var(--font-inter), sans-serif;
  background-color: #0d1412 !important; 
  background-image: url('/background.jpg') !important;
  background-position: center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  color: #ffffff;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -2;
  background: 
    radial-gradient(circle at 50% 30%, rgba(10, 16, 14, 0.15) 0%, rgba(10, 16, 14, 0.9) 65%),
    linear-gradient(to bottom, rgba(10, 16, 14, 0.95) 0%, rgba(10, 16, 14, 0.3) 30%, rgba(10, 16, 14, 0.5) 70%, rgba(10, 16, 14, 0.95) 100%) !important;
  pointer-events: none;
}

body::after {
  display: none !important;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }
.page { min-height: 100vh; padding: 40px 80px 120px; }

.eyebrow, .portfolio-title, .blueprint-right .eyebrow, .blueprint-list li, .footer-nav a {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
}

.header {
  position: relative;
  width: 100%;
  height: 20px;
  z-index: 10;
}

.hero-mantra-section { 
  min-height: 40vh; 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  max-width: 820px;
  margin-left: 60px;
  margin-bottom: 80px;
}

.hero-mantra-section h1 { 
  font-family: var(--font-cormorant), Georgia, serif; 
  font-size: clamp(54px, 5.2vw, 84px); 
  font-weight: 300; 
  line-height: 1.1; 
  letter-spacing: -0.01em;
  color: #ffffff !important; 
  margin: 0;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

.eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; margin-bottom: 28px; opacity: 0.8; }
.pillars { margin-top: 36px; display: flex; gap: 32px; font-size: 11px; font-weight: 600; letter-spacing: 0.35em; text-transform: uppercase; color: var(--ink-label) !important; opacity: 0.8; }
.portfolio { margin-top: 40px; }
.portfolio-title { font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; margin-bottom: 40px; }
.portfolio-stage { display: block; }

/* PORTFOLIO GRID ENGINE */
.tiles { position: relative; min-height: 1460px; width: 100%; }
.tile {
  position: absolute; padding: 0; overflow: hidden; border-radius: 20px; cursor: pointer; 
  border: 1px solid rgba(255, 255, 255, 0.22); 
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04)); 
  backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease, box-shadow 0.45s ease;
}
.tile span { position: absolute; top: 18px; left: 20px; z-index: 4; font-size: 9px; font-weight: 600; letter-spacing: 0.15em; color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
.tile img { width: 100%; height: 100%; object-fit: cover; opacity: 0.68; filter: saturate(0.85) contrast(0.95) brightness(0.88); transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease; }
.tile::before { content: ""; position: absolute; inset: 0; z-index: 2; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 60%); pointer-events: none; }
.tile:hover { transform: translateY(-12px) scale(1.01); border-color: rgba(255, 255, 255, 0.45); box-shadow: 0 50px 110px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.25); }
.tile:hover img { transform: scale(1.04); opacity: 0.85; }

/* Existing Absolute Matrix Coordinates (Tiles 1-7) */
.tile-1 { width: 48%; height: 440px; left: 0; top: 0; }
.tile-2 { width: 24%; height: 210px; left: 51%; top: 0; }
.tile-3 { width: 22%; height: 210px; left: 78%; top: 0; }
.tile-4 { width: 46%; height: 260px; left: 51%; top: 230px; }
.tile-5 { width: 31%; height: 230px; left: 0; top: 470px; }
.tile-6 { width: 32%; height: 230px; left: 34%; top: 470px; }
.tile-7 { width: 31%; height: 230px; left: 69%; top: 470px; }
/* New Absolute Matrix Coordinates (Tiles 8-14 Shifting +730px Down) */
.tile-8  { width: 48%; height: 440px; left: 0;    top: 730px;  }
.tile-9  { width: 24%; height: 210px; left: 51%;  top: 730px;  }
.tile-10 { width: 22%; height: 210px; left: 78%;  top: 730px;  }
.tile-11 { width: 46%; height: 260px; left: 51%;  top: 960px;  }
.tile-12 { width: 31%; height: 230px; left: 0;    top: 1200px; }
.tile-13 { width: 32%; height: 230px; left: 34%;  top: 1200px; }
.tile-14 { width: 31%; height: 230px; left: 69%;  top: 1200px; }

/* THE EMOTIONAL BLUEPRINT FRAMEWORK SECTION */
.blueprint { margin-top: 160px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 80px; align-items: center; border-top: 1px solid rgba(140, 129, 123, 0.15); padding-top: 90px; }
.blueprint-left h2 { font-family: var(--font-cormorant), Georgia, serif; font-size: 52px; font-weight: 300; line-height: 1.1; letter-spacing: -0.01em; color: #ffffff !important; margin: 0 0 60px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }

/* ISOMETRIC MATRIX GRID */
.blueprint-diagram { display: grid; grid-template-columns: 140px 1fr; gap: 30px; align-items: center; margin-top: 40px; }
.blueprint-labels { display: flex; flex-direction: column; justify-content: space-between; height: 320px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.28em; color: var(--ink-label); text-align: right; padding-right: 20px; border-right: 1px solid rgba(140, 129, 123, 0.15); }
.blueprint-labels span { line-height: 1; height: 20px; }
.blueprint-stack { position: relative; height: 360px; width: 100%; max-width: 440px; margin: 0 auto; perspective: 1200px; }
.blueprint-layer { position: absolute; width: 100%; height: 160px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 20px 45px rgba(0,0,0,0.35); transform: rotateX(55deg) rotateZ(-35deg); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease; background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
.blueprint-layer img { width: 100%; height: 100%; object-fit: cover; opacity: 0.35; filter: grayscale(0.4) brightness(0.9); transition: opacity 0.4s ease; }
.blueprint-layer:hover { transform: rotateX(55deg) rotateZ(-35deg) translateZ(25px); border-color: rgba(255,255,255,0.4); }
.blueprint-layer:hover img { opacity: 0.65; filter: grayscale(0); }

.layer-1 { top: 0px; z-index: 10; }
.layer-2 { top: 35px; z-index: 9; }
.layer-3 { top: 70px; z-index: 8; }
.layer-4 { top: 105px; z-index: 7; }
.layer-5 { top: 140px; z-index: 6; }
.layer-6 { top: 175px; z-index: 5; }

/* BLUEPRINT TEXT LIST BLOCK */
.blueprint-right h3 { font-family: var(--font-cormorant), Georgia, serif; font-size: 32px; font-weight: 300; line-height: 1.35; color: #ffffff !important; margin: 0 0 40px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
.blueprint-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
.blueprint-list li { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.24em; color: var(--ink-label) !important; padding-left: 20px; position: relative; }
.blueprint-list li::before { content: "•"; position: absolute; left: 0; color: var(--ink-soft); font-size: 16px; top: -2px; }

/* ABOUT SECTION FORMATTING */
.about { margin-top: 120px; display: flex; flex-direction: column; gap: 28px; border-top: 1px solid rgba(140, 129, 123, 0.15); padding-top: 60px; }
.about > span { font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; }
.about-content-wrapper { display: flex; flex-direction: column; gap: 22px; max-width: 720px; }
.about-content-wrapper p { font-size: 15px; line-height: 1.75; color: var(--ink-soft); text-shadow: 0 1px 4px rgba(0,0,0,0.4); }

/* FOOTER SECTION */
.footer { margin-top: 120px; border-top: 1px solid rgba(140, 129, 123, 0.15); padding-top: 48px; }
.footer-content { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px; }
.footer p { font-family: var(--font-cormorant), Georgia, serif; font-size: 22px; font-weight: 300; line-height: 1.4; color: var(--ink-soft); }
.footer p em { font-style: italic; color: #ffffff; }
.footer-nav { display: flex; gap: 40px; font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; }
.footer-nav a { color: var(--ink-label) !important; transition: opacity 0.3s ease, color 0.3s ease; }
.footer-nav a:hover { opacity: 1; color: #ffffff !important; }

/* LIGHTBOX MODAL RULES */
.lightbox-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(8, 12, 11, 0.82); backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px); display: flex; align-items: center; justify-content: center; padding: 40px; }
.lightbox-card { background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 24px; width: 100%; max-width: 1100px; position: relative; overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.6); }
.lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: var(--ink-label); font-size: 18px; cursor: pointer; z-index: 10; transition: color 0.3s; }
.lightbox-close:hover { color: #ffffff; }
.lightbox-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; min-height: 560px; }
.lightbox-image-wrapper { width: 100%; height: 100%; overflow: hidden; background: rgba(0,0,0,0.2); }
.lightbox-image-wrapper img { width: 100%; height: 100%; object-fit: cover; }
.lightbox-content { padding: 60px; display: flex; flex-direction: column; justify-content: center; background: rgba(14, 22, 20, 0.4); }
.lightbox-count { font-size: 11px; font-weight: 600; letter-spacing: 0.2em; color: var(--ink-label); margin-bottom: 24px; }
.lightbox-content h2 { font-family: var(--font-cormorant), Georgia, serif; font-size: 38px; font-weight: 300; line-height: 1.2; margin-bottom: 8px; color: #ffffff; }
.lightbox-category { font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 24px; display: block; }
.lightbox-content p { font-size: 14px; line-height: 1.6; color: var(--ink-label); margin-bottom: 40px; max-width: 400px; }
.lightbox-controls { display: flex; align-items: center; gap: 24px; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-label); }
.lightbox-controls button { background: none; border: none; color: inherit; cursor: pointer; text-transform: uppercase; letter-spacing: inherit; padding: 4px 8px; transition: color 0.3s; }
.lightbox-controls button:hover { color: #ffffff; }
.lightbox-controls span { font-size: 10px; color: rgba(255,255,255,0.15); }

/* MOBILE RESPONSIVE MATRIX OVERRIDES */
@media (max-width: 900px) {
  .page { padding: 40px 24px; }
  header { flex-direction: column !important; gap: 32px; }
  header div { text-align: left !important; }
  .tiles { min-height: auto !important; display: flex; flex-direction: column; gap: 24px; }
  .tile { position: relative !important; width: 100% !important; height: 280px !important; top: 0 !important; left: 0 !important; }
  .blueprint div { grid-template-columns: 1fr !important; gap: 40px; }
  .blueprint-labels { display: none; }
  .blueprint-stack { max-width: 100%; }
  .lightbox-grid { grid-template-columns: 1fr; }
  .lightbox-content { padding: 32px; }
}
