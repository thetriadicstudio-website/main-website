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
      {/* VELVETY SKIN: Restores your original luxurious grain layer filter */}
      <div className="suede-grain-overlay"></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">Portfolio - 3D Visualizations</p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* FLOATING STAGE: Your original overlapping grid space */}
        <main className="portfolio-stage" style={{ marginBottom: '160px' }}>
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
                {/* GLASS FILTERS: Restores specular reflection trims and frost layers */}
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
        </main>

        {/* MOCKUP CONTAINER WITH ATTACHED EXPLICIT OVERRIDE PROTECTION */}
        <footer className="card footer-card">
          <div className="footer-grid">
            
            {/* ROW 1: ABOUT */}
            <div className="footer-row">
              <span className="footer-nav-item">ABOUT</span>
              <p className="footer-text">
                The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
              </p>
            </div>

            {/* ROW 2: BLUEPRINT */}
            <div className="footer-row">
              <span className="footer-nav-item">BLUEPRINT</span>
              <a className="blueprint-card" href="https://replit.dev" target="_blank" rel="noopener noreferrer">
                <div className="blueprint-info">
                  <div className="blueprint-icon">📐</div>
                  <div>
                    <h4>Blueprint</h4>
                    <span>Our design philosophy</span>
                  </div>
                </div>
                <span className="arrow">→</span>
              </a>
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

          {/* CREDITS ROW */}
          <div className="footer-bottom">
            <span>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY. | thetriadicstudio@gmail.com</span>
            <span>Selective collaborations only.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
