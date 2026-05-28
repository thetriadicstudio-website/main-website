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

  // --- RE-ALIGNED TITLES & POETIC CATEGORIES TO MATCH YOUR IMAGES ---
  const projects: Project[] = [
    { id: '01', title: 'The Moongate Garden', category: 'Sanctuary', className: 'layer-01', img: '/portfolio/1.jpg' },
    { id: '02', title: 'Hearth & Aviary', category: 'Pavilion', className: 'layer-02', img: '/portfolio/2.jpg' },
    { id: '03', title: 'The Threshold', category: 'Observatory', className: 'layer-03', img: '/portfolio/3.jpg' },
    { id: '04', title: 'Wabi Pavilion', category: 'Water Scape', className: 'layer-04', img: '/portfolio/4.jpg' },
    { id: '05', title: 'The Noor Retreat', category: 'Botanical', className: 'layer-05', img: '/portfolio/5.jpg' },
    { id: '06', title: 'Folded Light', category: 'Subterranean', className: 'layer-06', img: '/portfolio/6.jpg' },
    { id: '07', title: 'Grounded Atelier', category: 'Material Study', className: 'layer-07', img: '/portfolio/7.jpg' },
  ];

  return (
    <div className="studio-canvas">
      {/* Soft, light-absorbing micro-fiber fabric grain layer */}
      <div className="suede-grain-overlay"></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`}>
        
        {/* HEADER AREA */}
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* PORFOLIO MATRIX GRID */}
        <main className="portfolio-canvas-grid">
          {projects.map((project) => {
            const isTarget = activeProject?.id === project.id;
            return (
              <div
                key={project.id}
                className={`card project-card ${project.className} ${isTarget ? 'is-expanded' : ''}`}
                onClick={() => setActiveProject(isTarget ? null : project)}
              >
                {/* Visual Imagery Base Layer */}
                <div className="card-bg" style={{ backgroundImage: `url(${project.img})` }}></div>
                
                {/* Frost Glass Refractive Plates */}
                <div className="glass-base-plate"></div>
                <div className="glass-specular-rim"></div>
                
                {/* Text Content Overlay */}
                <div className="card-content">
                  <span className="num">{project.id}</span>
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                </div>
              </div>
            );
          })}
        </main>

        {/* FOOTER CANVAS */}
        <footer className="card footer-card">
          <div className="footer-layout">
            <div className="timeline-nav">
              <div className="nav-item active">ABOUT</div>
              <div className="nav-item">BLUEPRINT</div>
              <div className="nav-item">CONNECT</div>
            </div>

            <div className="footer-main">
              <p className="about-text">
                The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience.<br /><br />
                We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
              </p>

              {/* REPLIT BLUEPRINT LINK */}
              <a href="https://a806f2bc-1ded-46e5-95c1-53a2e46d6522-00-1dcryh4t4adb5.kirk.replit.dev/" target="_blank" rel="noopener noreferrer" className="blueprint-btn">
                <div className="btn-left">
                  <div className="blueprint-icon"></div>
                  <div className="btn-text">
                    <span className="btn-title">Blueprint</span>
                    <span className="btn-sub">Our design philosophy</span>
                  </div>
                </div>
                <span className="btn-arrow">→</span>
              </a>

              {/* CONNECTED SOCIAL LINKS */}
              <div className="social-links">
                <a href="https://www.instagram.com/thetriadicstudio" target="_blank" rel="noopener noreferrer" className="social-tag">Instagram</a>
                <a href="https://www.behance.net/thetriadicstudio" target="_blank" rel="noopener noreferrer" className="social-tag">Behance</a>
                <a href="https://pin.it/30VBzFfGn" target="_blank" rel="noopener noreferrer" className="social-tag">Pinterest</a>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="sub-footer">
            <span>THE TRIADIC STUDIO</span>
            <span>Bold Spaces. Guided by Feeling. REJECT THE ORDINARY.</span>
            <span>thetriadicstudio@gmail.com</span>
            <span>Selective collaborations only.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}