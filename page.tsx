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
  // Handles the interactive "turn the tile over" state for the experiences menu
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
      backgroundColor: '#E3DCDE', // Core moody, velvety taupe base
      backgroundImage: `
        radial-gradient(circle at 50% 30%, #F5F0EE 0%, transparent 70%),
        radial-gradient(circle at 80% 70%, #D6CFCF 0%, transparent 60%)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      color: '#383230', // Deep charcoal-brown text extracted from wicker grain
      fontFamily: "'Inter', sans-serif",
      minHeight: '100vh',
      padding: '120px 40px',
      boxSizing: 'border-box'
    }}>
      
      {/* GLOBAL OVERRIDES FOR SMOOTH LUXURY ANIMATIONS */}
      <style jsx global>{`
        body { margin: 0; padding: 0; background-color: #E3DCDE; -webkit-font-smoothing: antialiased; }
        .glass-tile {
          background: rgba(245, 240, 240, 0.25);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 30px 70px rgba(56, 50, 48, 0.08);
          border-radius: 12px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-tile:hover {
          background: rgba(245, 240, 240, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 40px 90px rgba(56, 50, 48, 0.12);
          border-color: rgba(255, 255, 255, 0.6);
        }
        .flip-container { perspective: 1000px; cursor: pointer; }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }
        .is-flipped .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          box-sizing: border-box;
        }
        .flip-back { transform: rotateY(180deg); }
        @media (max-width: 900px) {
          .responsive-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .header-title { font-size: 4.5rem !important; }
        }
      `}</style>

      {/* Main Structural Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* 1. THE HEADER: Who, What, and Your Promise */}
        <header style={{ marginBottom: '160px', maxWidth: '750px' }}>
          <h1 className="header-title" style={{ fontSize: '7rem', fontWeight: 300, margin: 0, color: '#2B2524', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
            The<br />Triadic<br />Studio
          </h1>
          <p style={{ fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', margin: '24px 0 48px 0', fontWeight: 600 }}>
            Spatial Styling & 3D Visualisations
          </p>
          <p style={{ fontSize: '1.65rem', lineHeight: 1.5, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: 0 }}>
            "I shape spaces and creations that are felt, not just seen."
          </p>
        </header>

        {/* 2. THE MIDDLE: Your Best Renders Column Framework */}
        <section style={{ marginBottom: '160px' }}>
          <h2 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', marginBottom: '40px' }}>
            Selected Creations Framework
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* RENDER CONTAINER PLACEHOLDER 01 */}
            <div className="glass-tile" style={{ width: '100%', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(162, 199, 196, 0.1) 0%, rgba(255,255,255,0) 100%)' }}></div>
              <div style={{ margin: 'auto', textAlign: 'center', opacity: 0.4 }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>[ Container 01 — Dedicated Space for Future Render ]</span>
              </div>
            </div>

            {/* RENDER CONTAINER PLACEHOLDER 02 */}
            <div className="glass-tile" style={{ width: '100%', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(162, 199, 196, 0.1) 100%)' }}></div>
              <div style={{ margin: 'auto', textAlign: 'center', opacity: 0.4 }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>[ Container 02 — Dedicated Space for Future Render ]</span>
              </div>
            </div>

            {/* RENDER CONTAINER PLACEHOLDER 03 */}
            <div className="glass-tile" style={{ width: '100%', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ margin: 'auto', textAlign: 'center', opacity: 0.4 }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>[ Container 03 — Dedicated Space for Future Render ]</span>
              </div>
            </div>

          </div>
        </section>
        {/* 3. THE BLUEPRINT CORNERSTONE FRAMEWORK COMPONENT */}
        <section className="glass-tile" style={{ padding: '60px', marginBottom: '160px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 100% 0%, rgba(162, 199, 196, 0.15) 0%, transparent 60%)' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="responsive-grid">
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E', fontWeight: 600 }}>The Cornerstone System</span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 300, color: '#2B2524', margin: '16px 0 24px 0', letterSpacing: '-0.02em' }}>Blueprint Analysis</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#5C5350', margin: 0, fontWeight: 300 }}>
                This dedicated visual canvas is pre-framed to host your isometric interior specification elevations. It provides instant technical credibility to support your design philosophy before clients scroll to your experience packages.
              </p>
            </div>
            {/* The blueprint visual frame */}
            <div style={{ border: '1px dashed rgba(56, 50, 48, 0.2)', borderRadius: '8px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.4 }}>[ Blueprint Moodboard Frame ]</span>
            </div>
          </div>
        </section>

        {/* 4. THE FOOTER: Experiences List (Flipping Tiles), Connect & Contacts */}
        <footer style={{ borderTop: '1px solid rgba(56, 50, 48, 0.1)', paddingTop: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '60px' }} className="responsive-grid">
            
            {/* Left-aligned Navigation Label */}
            <div>
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8F827E', margin: 0, fontWeight: 600 }}>
                Experiences & Alignment
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#7A6E6A', marginTop: '16px', lineHeight: 1.5, fontWeight: 300 }}>
                Click or hover over an interactive tile to flip it over and view investment tier entries.
              </p>
            </div>

            {/* Interactive Experience Grid Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
              {experiences.map((exp) => {
                const isFlipped = flippedCard === exp.id;
                return (
                  <div 
                    key={exp.id}
                    className={`flip-container ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={() => setFlippedCard(isFlipped ? null : exp.id)}
                    onMouseEnter={() => setFlippedCard(exp.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                    style={{ width: '100%', height: '180px' }}
                  >
                    <div className="flip-inner">
                      
                      {/* FRONT CARD PANEL */}
                      <div className="flip-front glass-tile" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '1.3rem', fontWeight: 400, color: '#2B2524' }}>{exp.title}</span>
                          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F827E' }}>Reveal Tier ➔</span>
                        </div>
                      </div>

                      {/* BACK CARD PANEL */}
                      <div className="flip-back glass-tile" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(56, 50, 48, 0.03)' }}>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#4A4240', margin: '0 0 12px 0', fontWeight: 300 }}>{exp.desc}</p>
                        <span style={{ fontSize: '0.85rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 600, letterSpacing: '0.5px' }}>{exp.price}</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BASELINE MATRICES & CONNECTIONS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(56, 50, 48, 0.05)' }} className="responsive-grid">
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
