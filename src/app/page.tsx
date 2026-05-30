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
      {/* LUXURY SKIN LAYER: Your original velvety texture filter */}
      <div className="suede-grain-overlay"></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`} style={{ flex: '1 0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle">Portfolio - 3D Visualizations</p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        {/* FLOATING CANVAS: Preserves your native absolute-positioned glassy layout height */}
        <main className="portfolio-stage" style={{ marginBottom: '140px', position: 'relative', zIndex: 2 }}>
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
                {/* GLASS LAYERS: Restores specular reflection accents and plate filters */}
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

        {/* EDITORIAL MOCKUP FOOTER: Styled using isolated inline flex properties */}
        <footer style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '60px auto 100px auto', 
          padding: '40px 30px', 
          boxSizing: 'border-box', 
          background: 'rgba(27, 24, 22, 0.4)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(245, 242, 235, 0.12)', 
          borderRadius: '24px',
          position: 'relative', 
          zIndex: 99999, /* High layer context to block click leaking */
          pointerEvents: 'auto'
        }} onClick={(e) => e.stopPropagation()}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* ROW 1: ABOUT SECTION */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'start' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600 }}>ABOUT</span>
              </div>
              <div style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.7', color: '#a39b94' }}>
                  The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience. We believe in the balance of form, function, and feeling—where every detail is intentional and nothing is excess.
                </p>
              </div>
            </div>

            {/* ROW 2: BLUEPRINT SECTION */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600 }}>BLUEPRINT</span>
              </div>
              <div style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
                <a className="blueprint-card" href="https://replit.dev" target="_blank" rel="noopener noreferrer">
                  <div className="blueprint-info">
                    <div className="blueprint-icon" style={{ opacity: 0.8 }}>📐</div>
                    <div>
                      <h4>Blueprint</h4>
                      <span>Our design philosophy</span>
                    </div>
                  </div>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* ROW 3: CONNECT SECTION */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '0.75rem', letterSpacing: '3px', color: '#c4ae9a', fontWeight: 600 }}>CONNECT</span>
              </div>
              <div className="social-pills" style={{ paddingLeft: '40px', borderLeft: '1px solid rgba(245, 242, 235, 0.08)' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
                <a href="https://pin.it" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>

          </div>

          {/* BOTTOM METADATA BAR */}
          <div className="footer-bottom" style={{ marginTop: '40px' }}>
            <span>THE TRIADIC STUDIO | Bold Spaces. Guided by Feeling. REJECT THE ORDINARY. | thetriadicstudio@gmail.com</span>
            <span>Selective collaborations only.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
