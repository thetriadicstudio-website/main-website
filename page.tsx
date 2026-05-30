'use client';

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
    <div className="studio-canvas">
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      {/* Main Container Wrapper */}
      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">
            Portfolio — 3D Visualizations
          </p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* Asymmetric Image Grid */}
        <main className="portfolio-wrapper">
          <div className="portfolio-stage" style={{ pointerEvents: 'none' }}>
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

        {/* INTEGRATED EDITORIAL CONTENT FOOTER */}
        <footer className="footer-card">
          <div className="footer-grid">
            
            {/* ABOUT SECTION */}
            <div className="footer-row">
              <div className="footer-nav-item">About</div>
              <p className="footer-text">
                The Triadic Studio is an architectural and interior design practice focused on 
                creating timeless spaces that honor material, context, and experience. We believe in 
                the balance of form, function, and feeling—where every detail is intentional and 
                nothing is excess.
              </p>
            </div>

            {/* EXPERIENCES / SERVICES SECTION */}
            <div className="footer-row">
              <div className="footer-nav-item">Experiences</div>
              <div className="experience-list">
                
                {/* SERVICE 01 */}
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

                {/* SERVICE 02 */}
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

                {/* SERVICE 03 - THE PREMIUM BLUEPRINT */}
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

            {/* CONNECT SECTION */}
            <div className="footer-row">
              <div className="footer-nav-item">Connect</div>
              <div className="social-pills">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance ↗</a>
                <a href="https://pin.it" target="_blank" rel="noopener noreferrer">Pinterest ↗</a>
              </div>
            </div>

          </div>

          {/* METADATA SECTION */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} THE TRIADIC STUDIO</span>
            <span>Based in the UK — Available for global collaborations</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
