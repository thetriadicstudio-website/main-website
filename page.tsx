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
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

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
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '80px 24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* 1. HEADER SECTION */}
        <header style={{ marginBottom: '80px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 300, margin: '0 0 12px 0', color: '#2B2524', lineHeight: 1 }}>
            The Triadic Studio
          </h1>
          <p style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E', margin: '0 0 32px 0' }}>
            Spatial Styling & 3D Visualisations
          </p>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.4, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: 0 }}>
            "I shape spaces and creations that are felt, not just seen."
          </p>
        </header>

        {/* 2. THREE RENDER FRAMES */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E', marginBottom: '24px' }}>
            Selected Creations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ width: '100%', height: '400px', border: '1px solid rgba(56, 50, 48, 0.2)', borderRadius: '8px', display: 'flex', background: 'rgba(255,255,255,0.3)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>[ Container 01 — Future Render Space ]</span>
            </div>
            <div style={{ width: '100%', height: '400px', border: '1px solid rgba(56, 50, 48, 0.2)', borderRadius: '8px', display: 'flex', background: 'rgba(255,255,255,0.3)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>[ Container 02 — Future Render Space ]</span>
            </div>
            <div style={{ width: '100%', height: '400px', border: '1px solid rgba(56, 50, 48, 0.2)', borderRadius: '8px', display: 'flex', background: 'rgba(255,255,255,0.3)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>[ Container 03 — Future Render Space ]</span>
            </div>
          </div>
        </section>

        {/* 3. BLUEPRINT CORE */}
        <section style={{ padding: '40px 0', marginBottom: '80px', borderTop: '1px solid rgba(56, 50, 48, 0.1)' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E' }}>The Cornerstone System</span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 300, color: '#2B2524', margin: '8px 0 16px 0' }}>Blueprint Analysis</h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#5C5350', margin: '0 0 32px 0' }}>
            This dedicated visual canvas is pre-framed to host your isometric interior specification elevations. It provides instant technical credibility to support your design philosophy before clients scroll to your experience packages.
          </p>
          <div style={{ border: '1px dashed rgba(56, 50, 48, 0.3)', borderRadius: '8px', height: '300px', display: 'flex', background: 'rgba(255,255,255,0.2)' }}>
            <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.4 }}>[ Blueprint Moodboard Frame ]</span>
          </div>
        </section>

        {/* 4. EXPERIENCES LIST & TIERS */}
        <footer style={{ borderTop: '1px solid rgba(56, 50, 48, 0.1)', paddingTop: '60px' }}>
          <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E', margin: '0 0 32px 0' }}>Experiences & Alignment</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '80px' }}>
            {experiences.map((exp) => {
              const showDetails = flippedCard === exp.id;
              return (
                <div 
                  key={exp.id} 
                  onClick={() => setFlippedCard(showDetails ? null : exp.id)}
                  style={{ border: '1px solid rgba(56, 50, 48, 0.15)', borderRadius: '8px', padding: '24px', background: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', color: '#2B2524' }}>{exp.title}</span>
                    <span style={{ fontSize: '0.75rem', color: '#8F827E' }}>{showDetails ? 'Hide details ↑' : 'View investment details ↓'}</span>
                  </div>
                  {showDetails && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(56, 50, 48, 0.08)' }}>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#4A4240', margin: '0 0 12px 0' }}>{exp.desc}</p>
                      <span style={{ fontSize: '0.85rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 'bold' }}>{exp.price}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* NETWORKS baseline */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid rgba(56, 50, 48, 0.05)', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem' }}>Email</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem' }}>Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#383230', textDecoration: 'none', fontSize: '0.85rem' }}>Behance</a>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#8F827E' }}>
              © {new Date().getFullYear()} THE TRIADIC STUDIO • YORKSHIRE, UK
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
