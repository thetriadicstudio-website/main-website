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
      <div className="container-wrapper">

        {/* HEADER */}
        <header className="header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">Portfolio of 3D Visualizations</p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* BACK BUTTON */}
        {activeProject && (
          <button className="back-btn" onClick={(e) => { e.stopPropagation(); setActiveProject(null); }}>
            ← Close View
          </button>
        )}

        {/* PORTFOLIO STAGE */}
        <section className="portfolio-wrapper">
          <div className="portfolio-stage">
            {projects.map((project) => {
              const expanded = activeProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  className={`project-card ${project.className} ${expanded ? 'is-expanded' : ''}`}
                  onClick={() => !expanded && setActiveProject(project)}
                >
                  <div className="card-bg" style={{ backgroundImage: `url(${project.img})` }} />
                  <div className="card-overlay" />
                  
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
        </section>

        {/* FOOTER */}
        <footer className="footer-card">
          <div className="footer-grid">
            <div className="footer-row">
              <div className="footer-nav-item">ABOUT</div>
              <p className="footer-text">The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.</p>
            </div>
            <div className="footer-row">
              <div className="footer-nav-item">BLUEPRINT</div>
              <a href="#" className="blueprint-card">
                <div className="blueprint-info">
                  <div className="blueprint-icon">◿</div>
                  <div>
                    <h4>Blueprint</h4>
                    <span>Our design philosophy</span>
                  </div>
                </div>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="footer-row">
              <div className="footer-nav-item">CONNECT</div>
              <div className="social-pills">
                <a href="#">Instagram</a>
                <a href="#">Behance</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY.</span>
            <span>thetriadicstudio@gmail.com | Selective collaborations only.</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
