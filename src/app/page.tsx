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
    <div className="studio-canvas" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* RESTORED: Your original luxury suede grain texture overlay layer */}
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">Portfolio - 3D Visualizations</p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* RESTORED: The original overlapping card grid canvas with native mouse behaviors */}
        <main className="portfolio-canvas-grid" style={{ position: 'relative', zIndex: 2, height: '1350px', marginBottom: '160px' }}>
          {activeProject && (
            <button className="back-btn" onClick={() => setActiveProject(null)} style={{ cursor: 'pointer' }}>
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
                {/* RESTORED: High-end glass layers providing reflections and specularity */}
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
      </div>

      {/* FIXED FOOTER STRUCTURAL LAYOUT MOCKUP FROM YOUR IMAGE */}
      <footer className="card footer-card" style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto 80px auto', 
        padding: '50px 40px', 
        boxSizing: 'border-box', 
        background: 'transparent', 
        border: '1px solid rgba(245, 242, 235, 0.12)', 
        borderRadius: '24px',
        position: 'relative', 
        zIndex: 99999, /* High layer ensures links work perfectly */
        pointerEvents: 'auto' 
      }} onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          
          {/* ROW 1: ABOUT */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'start', borderBottom: '1px solid rgba(245, 242, 235, 0.08)', paddingBottom: '40px' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center', alignSelf: 'center' }}>ABOUT</span>
            <p className="footer-text" style={{ margin: 0, paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
              The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
            </p>
          </div>

          {/* ROW 2: BLUEPRINT */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', borderBottom: '1px solid rgba(245, 242, 235, 0.08)', paddingBottom: '40px' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center' }}>BLUEPRINT</span>
            <div style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
              <a className="blueprint-card" href="https://replit.dev" target="_blank" rel="noopener noreferrer">
                <div className="blueprint-info">
                  <div className="blueprint-icon">⚙️</div>
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
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center' }}>CONNECT</span>
            <div className="social-pills" style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://pin.it" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom" style={{ marginTop: '50px' }}>
          <span>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY. | thetriadicstudio@gmail.com</span>
          <span>Selective collaborations only.</span>
        </div>
      </footer>
    </div>
  );
}
