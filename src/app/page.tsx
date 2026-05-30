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
      backgroundColor: '#E6E1DC',
      backgroundImage: 'radial-gradient(circle at 50% 20%, #F5F2EF 0%, transparent 65%), radial-gradient(circle at 80% 70%, #DBD5D0 0%, #D1C9C2 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      color: '#2C2625',
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      minHeight: '100vh',
      padding: '140px 48px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        
        {/* 1. ARCHITECTURAL HEADER BLOCK */}
        <header style={{ marginBottom: '160px', maxWidth: '750px' }}>
          <h1 style={{ fontSize: '6.5rem', fontWeight: 300, margin: 0, color: '#2C2625', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
            The<br />Triadic<br />Studio
          </h1>
          <p style={{ fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#7A706D', margin: '28px 0 44px 0', fontWeight: 600 }}>
            Spatial Styling & 3D Visualisations
          </p>
          <p style={{ fontSize: '1.6rem', lineHeight: 1.5, color: '#453E3C', fontWeight: 300, fontStyle: 'italic', margin: 0, letterSpacing: '-0.01em' }}>
            "I shape spaces and creations that are felt, not just seen."
          </p>
        </header>

        {/* 2. THREE RECTANGULAR VERTICAL TILES MOCKUP ALIGNMENT */}
        <section style={{ marginBottom: '160px' }}>
          <h2 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#7A706D', marginBottom: '40px', fontWeight: 600 }}>
            Selected Creations Framework
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', width: '100%' }}>
            
            {/* VERTICAL CONTAINER 01 */}
            <div style={{ height: '620px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '14px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 70px rgba(44, 38, 37, 0.05)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(143, 184, 181, 0.15) 0%, transparent 100%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.7rem', letterSpacing: '1px', opacity: 0.4, textTransform: 'uppercase', textAlign: 'center', padding: '0 20px', lineHeight: 1.4 }}>
                [ Slot 01 <br /> Future Render ]
              </span>
            </div>

            {/* VERTICAL CONTAINER 02 */}
            <div style={{ height: '620px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '14px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 70px rgba(44, 38, 37, 0.05)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(143, 184, 181, 0.15) 100%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.7rem', letterSpacing: '1px', opacity: 0.4, textTransform: 'uppercase', textAlign: 'center', padding: '0 20px', lineHeight: 1.4 }}>
                [ Slot 02 <br /> Future Render ]
              </span>
            </div>

            {/* VERTICAL CONTAINER 03 */}
            <div style={{ height: '620px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '14px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 70px rgba(44, 38, 37, 0.05)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(143, 184, 181, 0.08) 0%, rgba(143, 184, 181, 0.08) 100%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.7rem', letterSpacing: '1px', opacity: 0.4, textTransform: 'uppercase', textAlign: 'center', padding: '0 20px', lineHeight: 1.4 }}>
                [ Slot 03 <br /> Future Render ]
              </span>
            </div>

          </div>
        </section>
        {/* 3. BLUEPRINT TECHNICAL SEGMENT */}
        <section style={{ padding: '80px 0', marginBottom: '140px', borderTop: '1px solid rgba(44, 38, 37, 0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#7A706D', fontWeight: 600 }}>The Cornerstone System</span>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 300, color: '#2C2625', margin: '14px 0 20px 0', letterSpacing: '-0.02em' }}>Blueprint Analysis</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#544B48', margin: 0, fontWeight: 300 }}>
                This structured graphical block maps straight to your specification elevations. It delivers immediate context supporting your composition principles before viewers interact with your studio alignment terms.
              </p>
            </div>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px dashed rgba(44, 38, 37, 0.25)', borderRadius: '12px', height: '380px', display: 'flex' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.4, color: '#2C2625', fontWeight: 500 }}>[ Blueprint Technical Specification Frame ]</span>
            </div>
          </div>
        </section>

        {/* 4. ALIGNMENT EXPERIENCES ACCORDION */}
        <footer style={{ borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '80px' }}>
          <h4 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#7A706D', margin: '0 0 44px 0', fontWeight: 600 }}>
            Experiences & Alignment
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '120px' }}>
            {experiences.map((exp) => {
              const isOpen = openSection === exp.id;
              return (
                <div 
                  key={exp.id} 
                  onClick={() => setOpenSection(isOpen ? null : exp.id)}
                  style={{ 
                    border: '1px solid rgba(255, 255, 255, 0.5)', 
                    borderRadius: '14px', 
                    padding: '32px', 
                    background: isOpen ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.18)', 
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    cursor: 'pointer',
                    boxShadow: '0 15px 45px rgba(44, 38, 37, 0.02)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 400, color: '#2C2625' }}>{exp.title}</span>
                    <span style={{ fontSize: '0.75rem', color: '#7A706D', letterSpacing: '1px', fontWeight: 500 }}>
                      {isOpen ? 'Close details ↑' : 'Reveal details ↓'}
                    </span>
                  </div>
                  
                  {isOpen && (
                    <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(44, 38, 37, 0.08)' }}>
                      <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#453E3C', margin: '0 0 16px 0', fontWeight: 300 }}>{exp.desc}</p>
                      <span style={{ fontSize: '0.85rem', color: '#7A706D', fontFamily: 'monospace', fontWeight: 600 }}>{exp.price}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* NETWORKS baseline */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '44px', borderTop: '1px solid rgba(44, 38, 37, 0.08)' }}>
            <div style={{ display: 'flex', gap: '36px' }}>
              <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#2C2625', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Email</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2625', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2625', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Behance</a>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#7A706D', letterSpacing: '1px', fontWeight: 500 }}>
              © {new Date().getFullYear()} THE TRIADIC STUDIO • YORKSHIRE, UK
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
