'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  className: string;
  img: string;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: '01', title: 'Tidal House', category: 'Hospitality', className: 'layer-01', img: '/portfolio/1.jpg' },
    { id: '02', title: 'Hearthline', category: 'Hospitality', className: 'layer-02', img: '/portfolio/2.jpg' },
    { id: '03', title: 'The Threshold', category: 'Observatory', className: 'layer-03', img: '/portfolio/3.jpg' },
    { id: '04', title: 'Wabi Pavilion', category: 'Water Scape', className: 'layer-04', img: '/portfolio/4.jpg' },
    { id: '05', title: 'The Noor Retreat', category: 'Botanical', className: 'layer-05', img: '/portfolio/5.jpg' },
    { id: '06', title: 'Folded Light', category: 'Subterranean', className: 'layer-06', img: '/portfolio/6.jpg' },
    { id: '07', title: 'Grounded Atelier', category: 'Material Study', className: 'layer-07', img: '/portfolio/7.jpg' },
  ];

  return (
    <div className="studio-canvas" style={{ display: 'block', minHeight: '100vh', position: 'relative' }}>
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      {/* Main Layout Container */}
      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Phase 1: Your Atmospheric Entry (Current Site) */}
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">
            Portfolio — 3D Visualizations
          </p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* Floating Asymmetric Image Grid */}
        <main className="portfolio-wrapper" style={{ pointerEvents: 'none' }}>
          <div className="portfolio-stage">
            {activeProject && (
              <button className="back-btn" onClick={() => setActiveProject(null)} style={{ pointerEvents: 'auto' }}>
                ← Back to Portfolio
              </button>
            )}
            {projects.map((project) => {
              const isTarget = activeProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  className={`card project-card ${project.className} ${isTarget ? 'is-expanded' : ''}`}
                  onClick={() => !activeProject && setActiveProject(project)}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className="card-bg" style={{ 
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: isTarget ? 'contain' : 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}></div>
                  <div className="glass-base-plate"></div>
                  <div className="glass-specular-rim"></div>
                  <div className="card-content">
                    <span className="num">{project.id}</span>
                    <h3>{project.title}</h3>
                    <span className="category">{project.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* THE NEW EDITORIAL HYBRID LAYOUT (Mockup 1 + Current Site Merged) */}
        <footer className="footer-card" style={{ display: 'block', position: 'relative', width: '100%', zIndex: 10, pointerEvents: 'auto' }}>
          <div className="footer-grid">
            
            {/* ABOUT PHILOSOPHY */}
            <div className="footer-row">
              <div className="footer-nav-item">About</div>
              <p className="footer-text">
                The Triadic Studio is an architectural and interior design practice focused on 
                creating timeless spaces that honor material, context, and experience. We believe in 
                the balance of form, function, and feeling—where every detail is intentional and 
                nothing is excess.
              </p>
            </div>

            {/* NEW SECTION FROM MOCKUP 1: "What I Do" Three-Column Pillars */}
            <div className="footer-row" style={{ marginTop: '40px', marginBottom: '40px' }}>
              <div className="footer-nav-item">What I Do</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', width: '100%', maxWidth: '800px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#c4ae9a', fontFamily: 'monospace' }}>01 / SPATIAL STYLING</span>
                  <p style={{ fontSize: '0.95rem', color: '#d0c7be', lineHeight: '1.6', marginTop: '12px', fontWeight: '300' }}>Creating visual direction for interiors, homes, and experiential spaces.</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#c4ae9a', fontFamily: 'monospace' }}>02 / VISUAL CONCEPTS (3D)</span>
                  <p style={{ fontSize: '0.95rem', color: '#d0c7be', lineHeight: '1.6', marginTop: '12px', fontWeight: '300' }}>Translating ideas into atmospheric visualizations and high-fidelity renders.</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#c4ae9a', fontFamily: 'monospace' }}>03 / EXPERIENCE DESIGN</span>
                  <p style={{ fontSize: '0.95rem', color: '#d0c7be', lineHeight: '1.6', marginTop: '12px', fontWeight: '300' }}>Designing how a space feels organically—not only how it looks on a screen.</p>
                </div>
              </div>
            </div>

            {/* INTENTIONAL EXPERIENCES MENU (Philosophy-Driven Services Layout) */}
            <div className="footer-row">
              <div className="footer-nav-item">Experiences</div>
              <div className="experience-list">
                
                {/* STAGE 01 */}
                <div className="experience-item">
                  <div className="experience-header">
                    <span className="experience-title">01 / The Canvas</span>
                    <span className="experience-price">From £120</span>
                  </div>
                  <p className="experience-desc">
                    A translation of feeling into form. We begin where you are. A curated digital framework 
                    of moodboards and initial 3D imagery designed to capture clarity, ease, and emotional intent 
                    for your room before a single physical object changes.
                  </p>
                </div>

                {/* STAGE 02 */}
                <div className="experience-item">
                  <div className="experience-header">
                    <span className="experience-title">02 / The Transition</span>
                    <span className="experience-price">From £150</span>
                  </div>
                  <p className="experience-desc">
                    It is never too late to change the space you inhabit. A complete, intentional evolution for 
                    homes or premium guest experiences. Full styling direction and structural visual upgrades 
                    designed to ground the viewer, slow down time, and invite people to truly live in the moment.
                  </p>
                </div>

                {/* STAGE 03 - EXCLUSIVE TIED BLUEPRINT */}
                <div className="experience-item">
                  <div className="experience-header">
                    <span className="experience-title">03 / The Blueprint</span>
                    <span className="blueprint-lock-tag">Exclusive Tier</span>
                  </div>
                  <p className="experience-desc">
                    An exclusive study in spatial consciousness. Our highest tier of alignment. A deep, 
                    non-linear analysis of form, lighting, and material sensitivity. This is a collaborative, 
                    holistic transformation of an entire environment—available strictly by inquiry to ensure 
                    absolute dedication.
                  </p>
                </div>

              </div>
            </div>

            {/* CONNECT CAPSULES */}
            <div className="footer-row">
              <div className="footer-nav-item">Connect</div>
              <div className="social-pills">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance ↗</a>
                <a href="https://pin.it" target="_blank" rel="noopener noreferrer">Pinterest ↗</a>
              </div>
            </div>

          </div>

          {/* BASE LINE METADATA */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} THE TRIADIC STUDIO</span>
            <span>Based in the UK — Available for global collaborations</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
