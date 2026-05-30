'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#E0D9D4', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ================= ZONE 1: THE SOFT PEARLY FAUX FUR HERO ================= */}
      <div style={{
        backgroundColor: '#F2EFEA',
        backgroundImage: 'radial-gradient(circle at 50% 20%, #FDFBF7 0%, transparent 60%), radial-gradient(circle at 10% 70%, #E3DBD5 0%, #D8CFC8 100%)',
        color: '#2C2624',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '120px 40px 140px 40px',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>THE INTRODUCTION</span>
              <h1 style={{ fontSize: '5rem', fontWeight: 300, margin: 0, color: '#1A1615', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Spatial styling &<br />visual experience<br />design.
              </h1>
              <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '32px 0 0 0', maxWidth: '500px', borderLeft: '1px solid rgba(44,38,37,0.15)', paddingLeft: '20px' }}>
                "I shape spaces and creations that are felt, not just seen."
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.7)', borderRadius: '16px', height: '480px', display: 'flex', boxShadow: '0 30px 70px rgba(44,38,37,0.02)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>[ Soft Pearl & Faux Fur Material Collage ]</span>
            </div>
          </header>
        </div>
      </div>

      {/* ================= ZONE 2: THE CRYSTAL STONE & SILVER METALLIC PILLARS ================= */}
      <div style={{
        backgroundColor: '#C8BEB6',
        backgroundImage: 'linear-gradient(to bottom, #D5CDC7 0%, #B8ABA2 100%)',
        color: '#1A1615',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '120px 40px 140px 40px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.4)'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#5C504C', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>ETHOS</span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em' }}>Spaces are experienced before they are understood.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>SPATIAL STYLING</span>
                <div style={{ height: '160px', margin: '16px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 60px rgba(26,22,21,0.1)' }}></div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#2C2624', margin: 0, fontFamily: 'sans-serif' }}>Creating environments through texture, materiality, and composition.</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ height: '160px', margin: '16px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 60px rgba(26,22,21,0.1)' }}></div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#2C2624', margin: 0, fontFamily: 'sans-serif' }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>EMOTIONAL DESIGN</span>
                <div style={{ height: '160px', margin: '16px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 60px rgba(26,22,21,0.1)' }}></div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#2C2624', margin: 0, fontFamily: 'sans-serif' }}>Designing how a space feels organically before designing how it looks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ================= ZONE 3: THE AQUAMARINE TWO-COLUMN BLUEPRINT ================= */}
      <div style={{
        backgroundColor: '#9FB5B3',
        backgroundImage: 'linear-gradient(135deg, #BACBC9 0%, #8FA3A1 50%, #728785 100%)',
        color: '#151C1B',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '120px 40px',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(60deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.08) 70%, transparent 100%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* SECURE 2-COLUMN STRUCTURE MAX FOR LANDSCAPE ACCURACY */}
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#4E5E5C', fontWeight: 600, display: 'block', marginBottom: '16px', fontFamily: 'sans-serif' }}>THE EMOTIONAL BLUEPRINT™ — KT</span>
              <h3 style={{ fontSize: '3rem', fontWeight: 300, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>Every space leaves an emotional imprint.</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px', fontFamily: 'sans-serif' }}>
                {['COLOUR', 'TEXTURE', 'SCALE', 'LIGHT', 'MATERIAL', 'MOVEMENT'].map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(21,28,27,0.12)', paddingBottom: '10px' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 600, color: '#1A2322' }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.7)', borderRadius: '16px', height: '460px', display: 'flex', boxShadow: '0 40px 80px rgba(21,28,27,0.12)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', padding: '0 20px', fontFamily: 'sans-serif' }}>[ Isometric Layered Blueprint Graphic Frame ]</span>
            </div>
          </section>

          {/* CONNECTIONS BASELINE */}
          <footer style={{ borderTop: '1px solid rgba(21, 28, 27, 0.15)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif', marginTop: '100px' }}>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#151C1B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Email</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#151C1B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#151C1B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Behance</a>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4E5E5C', letterSpacing: '1px' }}>THE TRIADIC STUDIO • YORKSHIRE, UK</div>
          </footer>
        </div>
      </div>

    </div>
  );
}
