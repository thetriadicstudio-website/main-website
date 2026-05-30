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
    { id: '01', title: 'Tidal House', category: 'Residential', className: 'layer-01', img: '/portfolio/1.jpg' },
    { id: '02', title: 'Hearthline', category: 'Hospitality', className: 'layer-02', img: '/portfolio/2.jpg' },
    { id: '03', title: 'Rift', category: 'Commercial', className: 'layer-03', img: '/portfolio/3.jpg' },
    { id: '04', title: 'Wabi Context', category: 'Concept', className: 'layer-04', img: '/portfolio/4.jpg' },
    { id: '05', title: 'The Noor Retreat', category: 'Wellness', className: 'layer-05', img: '/portfolio/5.jpg' },
    { id: '06', title: 'Folded Light', category: 'Residential', className: 'layer-06', img: '/portfolio/6.jpg' },
    { id: '07', title: 'Grounded Atelier', category: 'Workspace', className: 'layer-07', img: '/portfolio/7.jpg' },
  ];

  return (
    <div className="studio-canvas">
      {/* VELVETY VELOUR OVERLAY: Native tactile plaster filter texture */}
      <div className="suede-grain-overlay"></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">Portfolio - 3D Visualizations</p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* STAGE CANVAS CONTAINER: Holds the asymmetric layout structure natively */}
        <div className="portfolio-wrapper">
          <div className="portfolio-stage">
            {activeProject && (
              <button className="back-btn" onClick={() => setActiveProject(null)}>
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
                >
                  <div className="card-bg" style={{ backgroundImage: `url(${project.img})` }}></div>
                  <div className="card-overlay"></div>
                  {/* GLASS FILTERS: Frosted glass layers with subtle drop shadows */}
                  <div className="glass-base-plate"></div>
                  <div className="glass-specular-rim"></div>
                  <div className="card-content">
                    <span className="num">{project.id}</span>
                    <hr className="title-divider" />
                    <h3>{project.title}</h3>
                    <span className="category">{project.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RE-ALIGNED EDITORIAL FOOTER ROWS */}
        <footer className="card footer-card" style={{ display: activeProject ? 'none' : 'block' }}>
          <div className="footer-grid">
            
            {/* ROW 1: ABOUT */}
            <div className="footer-row">
              <span className="footer-nav-item">ABOUT</span>
              <p className="footer-text">
                The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
              </p>
            </div>

            {/* ROW 2: BLUEPRINT - ALL INCONGRUOUS TRIANGLE ICONS CLEANED AWAY */}
            <div className="footer-row">
              <span className="footer-nav-item">BLUEPRINT</span>
              <div style={{ width: '100%' }}>
                <a className="blueprint-card" href="https://replit.dev" target="_blank" rel="noopener noreferrer">
                  <div className="blueprint-info">
                    <div>
                      <h4>Blueprint</h4>
                      <span>Our design philosophy</span>
                    </div>
                  </div>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* ROW 3: CONNECT */}
            <div className="footer-row">
              <span className="footer-nav-item">CONNECT</span>
              <div className="social-pills">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
                <a href="https://pin.it" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <span>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY. | thetriadicstudio@gmail.com</span>
            <span>Selective collaborations only.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
