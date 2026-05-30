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
    <div className="studio-canvas" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      {/* Main Container Wrapper */}
      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1, paddingBottom: '180px' }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#888', marginTop: '10px' }}>
            Portfolio - 3D Visualizations
          </p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* CRITICAL FIX: Ignore empty grid space clicks to let footer links work */}
        <main className="portfolio-canvas-grid" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
          {activeProject && (
            <button className="back-btn" onClick={() => setActiveProject(null)} style={{ marginBottom: '20px', cursor: 'pointer', pointerEvents: 'auto' }}>
              ← Back to Portfolio
            </button>
          )}
          {projects.map((project) => {
            const isTarget = activeProject?.id === project.id;
            return (
              /* Re-enable clicks strictly inside the actual visible cards */
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
        </main>
      </div>

      {/* FIXED POSITION BASE FOOTER - GUARANTEED FRONT LAYER */}
      <footer className="card footer-card" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2147483647, width: '100vw', backgroundColor: '#161616', padding: '25px 40px', boxSizing: 'border-box', borderTop: '2px solid rgba(255,255,255,0.15)', pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>
        <div className="footer-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'left' }}>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>ABOUT</h4>
            <p className="about-text" style={{ color: '#999', fontSize: '0.85rem', lineHeight: '1.4' }}>The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience.</p>
          </div>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>BLUEPRINT</h4>
            <a href="https://replit.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.85rem', display: 'inline-block', position: 'relative', zIndex: 2147483647, pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>View Application ↗</a>
          </div>
          <div className="footer-section">
            <h4 style={{ color: '#fff', marginBottom: '8px', fontSize: '0.9rem', letterSpacing: '1px' }}>CONNECT</h4>
            <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-block', position: 'relative', zIndex: 2147483647, pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>Instagram ↗</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-block', position: 'relative', zIndex: 2147483647, pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>Behance ↗</a>
              <a href="https://pin.it" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-block', position: 'relative', zIndex: 2147483647, pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>Pinterest ↗</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
