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
    <div className="studio-canvas" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', paddingBottom: '220px' }}>
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle" style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c4ae9a', marginTop: '24px' }}>
            Portfolio - 3D Visualizations
          </p>
          <p className="tagline" style={{ marginTop: '40px', color: '#a39b94', fontSize: '1.1rem', lineHeight: '1.6' }}>You’re not late.<br />You’re exactly on time.</p>
        </header>

        <main className="portfolio-canvas-grid" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
          {activeProject && (
            <button className="back-btn" onClick={() => setActiveProject(null)} style={{ marginBottom: '20px', cursor: 'pointer', pointerEvents: 'auto' }}>
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
                <div className="card-content" style={{ zIndex: 3 }}>
                  <span className="num">{project.id}</span>
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      {/* FIXED POSITION FOOTER - CLEAN 3 COLUMN GRID */}
      <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2147483647, width: '100vw', backgroundColor: '#141211', padding: '40px 60px', boxSizing: 'border-box', borderTop: '1px solid rgba(245, 242, 235, 0.08)', pointerEvents: 'auto' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', maxWidth: '1400px', margin: '0 auto' }}>
          
          <div className="footer-section">
            <h4 style={{ color: '#c4ae9a', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 600, margin: '0 0 16px 0', textTransform: 'uppercase' }}>ABOUT</h4>
            <p style={{ color: '#a39b94', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience.</p>
          </div>

          <div className="footer-section">
            <h4 style={{ color: '#c4ae9a', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 600, margin: '0 0 16px 0', textTransform: 'uppercase' }}>BLUEPRINT</h4>
            <a href="https://replit.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '12px 24px', borderRadius: '40px', fontSize: '0.9rem', display: 'inline-block' }}>View Application ↗</a>
          </div>

          <div className="footer-section">
            <h4 style={{ color: '#c4ae9a', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 600, margin: '0 0 16px 0', textTransform: 'uppercase' }}>CONNECT</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '10px 20px', borderRadius: '40px', fontSize: '0.85rem', display: 'inline-block' }}>Instagram ↗</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '10px 20px', borderRadius: '40px', fontSize: '0.85rem', display: 'inline-block' }}>Behance ↗</a>
              <a href="https://pin.it" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '10px 20px', borderRadius: '40px', fontSize: '0.85rem', display: 'inline-block' }}>Pinterest ↗</a>
            </div>
            <p style={{ margin: '20px 0 0 0', color: '#7a726c', fontSize: '0.7rem' }}>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
