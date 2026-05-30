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
    <div className="studio-canvas" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      {/* Main Website Area */}
      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#888', marginTop: '10px' }}>
            Portfolio - 3D Visualizations
          </p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        <main className="portfolio-canvas-grid">
          {activeProject && (
            <button className="back-btn" onClick={() => setActiveProject(null)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
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
        </main>
      </div>

      {/* Completely Isolated Footer at the Absolute Base */}
      <footer className="card footer-card" style={{ position: 'relative', zIndex: 9999, width: '100%', backgroundColor: '#1a1a1a', padding: '30px 20px', boxSizing: 'border-box', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="footer-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'left' }}>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>ABOUT</h4>
            <p className="about-text" style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.5' }}>The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience.</p>
          </div>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>BLUEPRINT</h4>
            <a href="https://replit.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>View Application</a>
          </div>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>CONNECT</h4>
            <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram ↗</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Behance ↗</a>
              <a href="https://pin.it" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Pinterest ↗</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
