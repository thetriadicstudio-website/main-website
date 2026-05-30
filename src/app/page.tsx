'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  desc: string;
  price: string;
}

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const experiences: Experience[] = [
    { 
      id: '01', 
      title: '01 / The Canvas', 
      desc: 'A translation of feeling into form. A curated digital framework of moodboards and initial 3D imagery designed to capture clarity, ease, and emotional intent before a single physical object changes.',
      price: 'Entry Investment — From £120'
    },
    { 
      id: '02', 
      title: '02 / The Transition', 
      desc: 'It is never too late to change the space you inhabit. A complete, intentional evolution for homes or premium guest experiences. Full styling direction designed to ground the viewer and slow down time.',
      price: 'Entry Investment — From £150'
    },
    { 
      id: '03', 
      title: '03 / The Blueprint', 
      desc: 'An exclusive study in spatial consciousness. Our highest tier of alignment. A deep, non-linear analysis of form, lighting, and material sensitivity. A collaborative, holistic transformation of an entire environment.',
      price: 'Available strictly by inquiry'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#E3DCDE',
      color: '#383230',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      padding: '120px 40px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* 1. THE HEADER: Who, What, and Your Promise */}
        <header style={{ marginBottom: '140px', maxWidth: '750px' }}>
          <h1 style={{ fontSize: '5.5rem', fontWeight: 300, margin: 0, color: '#2B2524', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
            The<br />Triadic<br />Studio
          </h1>
          <p style={{ fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', margin: '24px 0 40px 0', fontWeight: 600 }}>
            Spatial Styling & 3D Visualisations
          </p>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: 0 }}>
            "I shape spaces and creations that are felt, not just seen."
          </p>
        </header>

        {/* 2. THE MIDDLE: Three Structured Container Blocks for Future Artwork */}
        <section style={{ marginBottom: '140px' }}>
          <h2 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', marginBottom: '32px', fontWeight: 600 }}>
            Selected Creations Framework
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* CONTAINER 01 */}
            <div style={{ width: '100%', height: '500px', border: '1px solid rgba(56, 50, 48, 0.15)', borderRadius: '12px', display: 'flex', background: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 20px 50px rgba(56, 50, 48, 0.04)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase' }}>
                [ Container 01 — Dedicated Space for Future Render ]
              </span>
            </div>

            {/* CONTAINER 02 */}
            <div style={{ width: '100%', height: '500px', border: '1px solid rgba(56, 50, 48, 0.15)', borderRadius: '12px', display: 'flex', background: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 20px 50px rgba(56, 50, 48, 0.04)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase' }}>
                [ Container 02 — Dedicated Space for Future Render ]
              </span>
            </div>

            {/* CONTAINER 03 */}
            <div style={{ width: '100%', height: '500px', border: '1px solid rgba(56, 50, 48, 0.15)', borderRadius: '12px', display: 'flex', background: 'rgba(255, 255, 255, 0.25)', boxShadow: '0 20px 50px rgba(56, 50, 48, 0.04)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase' }}>
                [ Container 03 — Dedicated Space for Future Render ]
              </span>
            </div>

          </div>
        </section>

        {/* 3. THE BLUEPRINT CORNERSTONE FRAMEWORK COMPONENT */}
        <section style={{ padding: '60px 0', marginBottom: '140px', borderTop: '1px solid rgba(56, 50, 48, 0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E', fontWeight: 600 }}>The Cornerstone System</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 300, color: '#2B2524', margin: '12px 0 16px 0', letterSpacing: '-0.02em' }}>Blueprint Analysis</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#5C5350', margin: 0, fontWeight: 300, maxWidth: '700px' }}>
                This dedicated visual canvas is pre-framed to host your isometric interior specification elevations. It provides instant technical credibility to support your design philosophy before clients reach your experience packages.
              </p>
            </div>
            
            {/* The Blueprint layout box */}
            <div style={{ border: '1px dashed rgba(56, 50, 48, 0.3)', borderRadius: '12px', height: '400px', display: 'flex', background: 'rgba(255,255,255,0.15)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.4 }}>[ Blueprint Specification & Moodboard Frame ]</span>
            </div>
          </div>
        </section>

        {/* 4. THE FOOTER: Experiences Accordion & Contacts */}
        <footer style={{ borderTop: '1px solid rgba(56, 50, 48, 0.1)', paddingTop: '80px' }}>
          <h4 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', margin: '0 0 40px 0', fontWeight: 600 }}>
            Experiences & Alignment
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '100px' }}>
            {experiences.map((exp) => {
              const isOpen = openSection === exp.id;
              return (
                <div 
                  key={exp.id} 
                  onClick={() => setOpenSection(isOpen ? null : exp.id)}
                  style={{ 
                    border: '1px solid rgba(56, 50, 48, 0.12)', 
                    borderRadius: '12px', 
                    padding: '28px', 
                    background: 'rgba(255,255,255,0.3)', 
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 400, color: '#2B2524' }}>{exp.title}</span>
                    <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '1px' }}>
                      {isOpen ? 'Close details ↑' : 'Reveal details ↓'}
                    </span>
                  </div>
                  
                  {isOpen && (
                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(56, 50, 48, 0.08)' }}>
                      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4A4240', margin: '0 0 16px 0', fontWeight: 300 }}>{exp.desc}</p>
                      <span style={{ fontSize: '0.85rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 600 }}>{exp.price}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* NETWORKS CONNECTIONS BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid rgba(56, 50, 48, 0.05)' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>Email</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>Behance</a>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '1px' }}>
              © {new Date().getFullYear()} THE TRIADIC STUDIO • YORKSHIRE, UK
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
