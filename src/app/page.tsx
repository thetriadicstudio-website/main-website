'use client';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#EAE6E2',
      color: '#2C2624',
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: '100vh',
      padding: '120px 40px',
      boxSizing: 'border-box',
      letterSpacing: '-0.01em'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* ================= SECTION 1: EDITORIAL HERO ================= */}
        <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '180px' }}>
          <div>
            <h1 style={{ fontSize: '5.2rem', fontWeight: 300, margin: 0, color: '#1A1615', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Spatial styling &<br />visual experience<br />design.
            </h1>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '40px 0 0 0', maxWidth: '520px' }}>
              "I shape spaces and creations that are felt, not just seen."
            </p>
          </div>

          {/* Right Flank: Large Immersive Moodboard Image/Collage Frame */}
          <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '16px', height: '520px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 90px rgba(44,38,37,0.05)' }}>
            <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase', fontWeight: 500 }}>
              [ Main Moodboard Frame: Suede, Driftwood & Silk Collage ]
            </span>
          </div>
        </header>

        {/* ================= SECTION 2: THREE CONCEPTUAL FOCUS PILLARS ================= */}
        <section style={{ marginBottom: '180px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em', maxWidth: '300px', color: '#1A1615' }}>
                Spaces are experienced before they are understood.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {/* Pillar 01 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600 }}>SPATIAL STYLING</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44,38,37,0.03)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
              </div>
              {/* Pillar 02 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600 }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44,38,37,0.03)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontWeight: 300 }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>
              {/* Pillar 03 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '2px', fontWeight: 600 }}>EMOTIONAL SPACE DESIGN</span>
                <div style={{ height: '150px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44,38,37,0.03)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#4A4240', margin: 0, fontWeight: 300 }}>Designing how a space feels organically before designing how it looks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: THE EMOTIONAL BLUEPRINT ================= */}
        <section style={{ marginBottom: '140px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr 1fr', gap: '50px', alignItems: 'center' }}>
            
            {/* Left Column: Metric Parameter Rows */}
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '3px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '16px' }}>THE EMOTIONAL BLUEPRINT™</span>
              <h3 style={{ fontSize: '3.2rem', fontWeight: 300, color: '#1A1615', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Every space leaves an emotional imprint.
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '40px' }}>
                {['COLOUR', 'TEXTURE', 'SCALE', 'LIGHT', 'MATERIAL', 'MOVEMENT'].map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid rgba(44, 38, 37, 0.08)', paddingBottom: '12px' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 600, color: '#2C2624' }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column: Heavy Frosted Glass Blueprint Box Frame */}
            <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.55)', borderRadius: '16px', height: '480px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 80px rgba(44,38,37,0.04)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, fontWeight: 600, color: '#1A1615', textTransform: 'uppercase', textAlign: 'center', padding: '0 30px', lineHeight: 1.4 }}>
                [ Centerpiece Frame <br /> Isometric Layered Blueprint Graphic ]
              </span>
            </div>

            {/* Right Column: Framework Text & Bullet Explanations */}
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '20px' }}>OUR BLUEPRINT FRAMEWORK</span>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#4A4240', margin: '0 0 24px 0', fontWeight: 300 }}>
                A spatial analysis method exploring how environments influence perception.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#544B48', fontWeight: 300 }}>
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

        {/* ================= SECTION 4: SOCIAL CONNECT BASELINE ================= */}
        <footer style={{ borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
