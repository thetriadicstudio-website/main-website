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
    <div className="studio-canvas" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', paddingBottom: '80px' }}>
      <div className="suede-grain-overlay" style={{ pointerEvents: 'none' }}></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1 }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle" style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c4ae9a', marginTop: '24px' }}>
            Portfolio - 3D Visualizations
          </p>
          <p className="tagline" style={{ marginTop: '40px', color: '#a39b94', fontSize: '1.2rem', fontStyle: 'italic', lineHeight: '1.6' }}>
            You’re not late.<br />You’re exactly on time.
          </p>
        </header>

        <main className="portfolio-canvas-grid" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none', height: '1350px', marginBottom: '120px' }}>
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
                <div className="card-overlay"></div>
                <div className="card-content" style={{ zIndex: 3 }}>
                  <span className="num">{project.id}</span>
                  <hr className="title-divider" style={{ width: '24px', border: 'none', borderTop: '1px solid #c4ae9a', margin: '10px 0' }} />
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      {/* MOCKUP FOOTER */}
      <footer style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 30px', 
        boxSizing: 'border-box', 
        background: 'rgba(27, 24, 22, 0.6)', 
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(245, 242, 235, 0.12)', 
        borderRadius: '24px',
        position: 'relative', 
        zIndex: 9999, 
        pointerEvents: 'auto' 
      }} onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* ABOUT */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', borderBottom: '1px solid rgba(245, 242, 235, 0.08)', paddingBottom: '30px' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.7rem', letterSpacing: '2px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center' }}>ABOUT</span>
            <p style={{ color: '#a39b94', fontSize: '1.05rem', lineHeight: '1.7', margin: 0, paddingLeft: '20px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
              The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
            </p>
          </div>

          {/* BLUEPRINT */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', borderBottom: '1px solid rgba(245, 242, 235, 0.08)', paddingBottom: '30px' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.7rem', letterSpacing: '2px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center' }}>BLUEPRINT</span>
            <div style={{ paddingLeft: '20px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
              <a href="https://replit.dev" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                textDecoration: 'none', 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(245, 242, 235, 0.08)', 
                padding: '20px 30px', 
                borderRadius: '40px', 
                maxWidth: '500px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(245, 242, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4ae9a', fontSize: '1.2rem' }}>A</div>
                  <div>
                    <h4 style={{ margin: 0, color: '#f5f2eb', fontSize: '1.05rem', fontWeight: 400 }}>Blueprint</h4>
                    <span style={{ color: '#a39b94', fontSize: '0.85rem' }}>Our design philosophy</span>
                  </div>
                </div>
                <span style={{ color: '#c4ae9a', fontSize: '1.2rem' }}>→</span>
              </a>
            </div>
          </div>

          {/* CONNECT */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center' }}>
            <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.7rem', letterSpacing: '2px', color: '#c4ae9a', fontWeight: 600, textAlign: 'center' }}>CONNECT</span>
            <div style={{ paddingLeft: '20px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '12px 28px', borderRadius: '40px', fontSize: '0.95rem' }}>
                Instagram
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '12px 28px', borderRadius: '40px', fontSize: '0.95rem' }}>
                Behance
              </a>
              <a href="https://pin.it" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f2eb', textDecoration: 'none', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(245, 242, 235, 0.08)', padding: '12px 28px', borderRadius: '40px', fontSize: '0.95rem' }}>
                Pinterest
              </a>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(245, 242, 235, 0.04)', textAlign: 'center', color: '#7a726c', fontSize: '0.7rem', letterSpacing: '0.5px' }}>
          THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY. | thetriadicstudio@gmail.com | Selective collaborations only.
        </div>
      </footer>
    </div>
  );
}
