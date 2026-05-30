'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F2EFEA', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ================= ZONE 1: THE FURRY, SOFT PEARLY HERO ANCHOR SURFACES ================= */}
      <div style={{
        backgroundColor: '#F2EFEA',
        backgroundImage: `
          radial-gradient(circle at 40% 30%, #FDFBF8 0%, transparent 65%),
          radial-gradient(circle at 80% 70%, #EADFD7 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")
        `, // Native micro-grain simulation to mimic the dense tactile pile of the cream fur
        color: '#2A2422',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '140px 48px 160px 48px',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F817D', fontWeight: 600, display: 'block', marginBottom: '32px', fontFamily: 'sans-serif' }}>THE INTRODUCTION</span>
              <h1 style={{ fontSize: '5.2rem', fontWeight: 300, margin: 0, color: '#1A1413', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Spatial styling &<br />visual experience<br />design.
              </h1>
              <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A3F3C', fontWeight: 300, fontStyle: 'italic', margin: '40px 0 0 0', maxWidth: '520px', borderLeft: '1px solid rgba(44,35,33,0.15)', paddingLeft: '24px' }}>
                "I shape spaces and creations that are felt, not just seen."
              </p>
            </div>
            
            {/* Soft Pearl & Fur Overlay container */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.45)', 
              backdropFilter: 'blur(15px)', 
              border: '1px solid rgba(255, 255, 255, 0.8)', 
              borderRadius: '16px', 
              height: '500px', 
              display: 'flex', 
              boxShadow: '0 30px 80px rgba(74,63,60,0.03), inset 0 2px 4px rgba(255,255,255,0.5)' 
            }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.45, textTransform: 'uppercase', fontWeight: 600, fontFamily: 'sans-serif', color: '#1A1413' }}>
                [ Soft Pearl & Heavy Faux Fur Showcase ]
              </span>
            </div>
          </header>
        </div>
      </div>

      {/* ================= ZONE 2: THE MOVEMENT ETHOS & GLASSY WATERY PILLAR TILES ================= */}
      <div style={{
        backgroundColor: '#DCD5CF',
        backgroundImage: 'linear-gradient(to bottom, #E6DFD9 0%, #C8BEB6 100%)',
        color: '#1A1413',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '140px 48px 180px 48px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.5)'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#6E5F5B', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>ETHOS</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em', color: '#1A1413' }}>
                Spaces are experienced before they are understood.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              
              {/* GLASSY PILLAR 01 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#6E5F5B', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>SPATIAL STYLING</span>
                <div style={{ 
                  height: '170px', margin: '20px 0', borderRadius: '12px', 
                  background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', 
                  border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 70px rgba(26,20,19,0.07), inset 0 1px 1px rgba(255,255,255,0.4)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(162, 214, 211, 0.15) 0%, transparent 100%)' }}></div> {/* Liquid Light Ray overlay */}
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#3A3331', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
              </div>

              {/* GLASSY PILLAR 02 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#6E5F5B', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ 
                  height: '170px', margin: '20px 0', borderRadius: '12px', 
                  background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', 
                  border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 70px rgba(26,20,19,0.07), inset 0 1px 1px rgba(255,255,255,0.4)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(162, 214, 211, 0.22) 0%, transparent 100%)' }}></div> {/* Translucent Sea Glass effect */}
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#3A3331', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>

              {/* GLASSY PILLAR 03 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#6E5F5B', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>EMOTIONAL SPACE DESIGN</span>
                <div style={{ 
                  height: '170px', margin: '20px 0', borderRadius: '12px', 
                  background: 'rgba(255, 255, 255, 0.16)', backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', 
                  border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 30px 70px rgba(26,20,19,0.07), inset 0 1px 1px rgba(255,255,255,0.4)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(225deg, rgba(162, 214, 211, 0.2) 0%, transparent 100%)' }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#3A3331', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Designing how a space feels organically before designing how it looks.</p>
              </div>

            </div>
          </section>
        </div>
      </div>
      {/* ================= ZONE 3: THE MOODY AQUAMARINE CRYSTAL & VELVET ENERGETICS ================= */}
      <div style={{
        backgroundColor: '#11403C', // Deep, heavy teal velvet base extracted from sofa fabric
        backgroundImage: `
          radial-gradient(circle at 75% 30%, #1A5C56 0%, transparent 60%),
          radial-gradient(circle at 20% 80%, #0B2B28 0%, #061A18 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org id='velvetFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23velvetFilter)' opacity='0.025'/%3E%3C/svg%3E")
        `, // Micro shadow texture mapping to evoke the heavy pile of silk velvet drapes
        color: '#E6E1DC',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '140px 48px 120px 48px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          
          {/* SECURE 2-COLUMN MOOD STRUCTURE */}
          <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#6C9994', fontWeight: 600, display: 'block', marginBottom: '20px', fontFamily: 'sans-serif' }}>THE EMOTIONAL BLUEPRINT™ — KT</span>
              <h3 style={{ fontSize: '3.2rem', fontWeight: 300, margin: 0, color: '#F7F4F2', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Every space leaves an emotional imprint.
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '40px', fontFamily: 'sans-serif' }}>
                {['COLOUR', 'TEXTURE', 'SCALE', 'LIGHT', 'MATERIAL', 'MOVEMENT'].map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 600, color: '#C5D6D4' }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shimmering Crystalline Sea Glass Blueprint Frame */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(45px)', 
              WebkitBackdropFilter: 'blur(45px)', 
              border: '1px solid rgba(255, 255, 255, 0.25)', 
              borderRadius: '16px', 
              height: '480px', 
              display: 'flex', 
              position: 'relative', 
              overflow: 'hidden', 
              boxShadow: '0 50px 100px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)' 
            }}>
              {/* Internal Aquamarine Raw Crystal Shimmer Hotspot */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(162, 214, 211, 0.3) 0%, transparent 70%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.45, fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', padding: '0 30px', fontFamily: 'sans-serif', color: '#F7F4F2', lineHeight: 1.4 }}>
                [ Cornerstone Frame <br /> Isometric Layered Blueprint Graphic ]
              </span>
            </div>
          </section>

          {/* NETWORKS baseline LINKS */}
          <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif', marginTop: '140px' }}>
            <div style={{ display: 'flex', gap: '40px' }}>
              <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#E6E1DC', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Email</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E6E1DC', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#E6E1DC', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Behance</a>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6C9994', letterSpacing: '1px', fontWeight: 500 }}>
              THE TRIADIC STUDIO • YORKSHIRE, UK
            </div>
          </footer>
        </div>
      </div>

    </div>
  );
}
