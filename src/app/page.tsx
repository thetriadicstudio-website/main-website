'use client';

import { useState } from 'react';

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div style={{
      backgroundColor: '#EAE6E2',
      backgroundImage: 'radial-gradient(circle at 50% 20%, #F5F2EF 0%, transparent 65%), radial-gradient(circle at 10% 50%, #E0D9D4 0%, transparent 55%), radial-gradient(circle at 80% 80%, #D5CDC7 0%, #C8BEB6 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      color: '#2C2624',
      fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
      minHeight: '100vh',
      padding: '120px 40px',
      boxSizing: 'border-box',
      letterSpacing: '-0.01em'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* ================= SECTION 1: HERO CONTAINER ================= */}
        <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '180px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '32px', fontFamily: 'sans-serif' }}>THE INTRODUCTION</span>
            <h1 style={{ fontSize: '5.2rem', fontWeight: 300, margin: 0, color: '#1A1615', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Spatial styling &<br />visual experience<br />design.
            </h1>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '40px 0 0 0', maxWidth: '520px', borderLeft: '1px solid rgba(44,38,37,0.15)', paddingLeft: '24px' }}>
              "I shape spaces and creations that are felt, not just seen."
            </p>
          </div>

          {/* Right Moodboard Frame with Frosted Overlays */}
          <div style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', border: '1px solid rgba(255, 255, 255, 0.55)', borderRadius: '16px', height: '520px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 90px rgba(44,38,37,0.05)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(143, 184, 181, 0.12) 0%, transparent 100%)' }}></div>
            <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.35, textTransform: 'uppercase', fontWeight: 500, fontFamily: 'sans-serif' }}>
              [ Main Moodboard Frame: Suede, Driftwood & Silk Collage ]
            </span>
          </div>
        </header>

        {/* ================= SECTION 2: THREE COLS PILLARS ================= */}
        <section style={{ marginBottom: '180px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>ETHOS</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em', maxWidth: '300px', color: '#1A1615' }}>
                Spaces are experienced before they are understood.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {/* Pillar 01 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>SPATIAL STYLING</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 25px 60px rgba(44,38,37,0.04)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(143, 184, 181, 0.08) 0%, transparent 100%)' }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
              </div>
              {/* Pillar 02 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 25px 60px rgba(44,38,37,0.04)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(143, 184, 181, 0.14) 0%, transparent 100%)' }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>
              {/* Pillar 03 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>EMOTIONAL SPACE DESIGN</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 25px 60px rgba(44,38,37,0.04)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(225deg, rgba(143, 184, 181, 0.14) 0%, transparent 100%)' }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Designing how a space feels organically before designing how it looks.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= SECTION 3: THE EMOTIONAL BLUEPRINT ================= */}
        <section style={{ marginBottom: '140px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr 1fr', gap: '50px', alignItems: 'center' }}>
            
            {/* Metric Parameter Rows */}
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '16px', fontFamily: 'sans-serif' }}>THE EMOTIONAL BLUEPRINT™</span>
              <h3 style={{ fontSize: '3.2rem', fontWeight: 300, color: '#1A1615', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Every space leaves an emotional imprint.
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '40px', fontFamily: 'sans-serif' }}>
                {['COLOUR', 'TEXTURE', 'SCALE', 'LIGHT', 'MATERIAL', 'MOVEMENT'].map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid rgba(44, 38, 37, 0.08)', paddingBottom: '12px' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 600, color: '#2C2624' }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Graphic Box Frame */}
            <div style={{ background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', border: '1px solid rgba(255, 255, 255, 0.55)', borderRadius: '16px', height: '480px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 90px rgba(44,38,37,0.05)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(143, 184, 181, 0.22) 0%, transparent 75%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.35, fontWeight: 600, color: '#1A1615', textTransform: 'uppercase', textAlign: 'center', padding: '0 30px', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
                [ Centerpiece Frame <br /> Isometric Layered Blueprint Graphic ]
              </span>
            </div>

            {/* Right Column Explanations */}
            <div style={{ paddingLeft: '20px', fontFamily: 'sans-serif' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '20px' }}>OUR BLUEPRINT FRAMEWORK</span>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4A4240', margin: '0 0 24px 0', fontWeight: 300 }}>
                A spatial analysis method exploring how environments influence perception.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#544B48', fontWeight: 300 }}>
                <span>• Colour sensitivity</span>
                <span>• Material response</span>
                <span>• Emotional atmosphere</span>
                <span>• Spatial stimulation</span>
                <span>• Visual balance</span>
                <span>• Environmental comfort</span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 4: CONNECTIONS ================= */}
        <footer style={{ borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Email</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Behance</a>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '1px', fontWeight: 500 }}>
            THE TRIADIC STUDIO • YORKSHIRE, UK
          </div>
        </footer>

      </div>
    </div>
  );
}
