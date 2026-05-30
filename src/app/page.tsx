'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div style={{
      backgroundColor: '#EAE6E2', // Warm taupe beige background
      backgroundImage: 'radial-gradient(circle at 50% 20%, #F5F2EF 0%, transparent 60%), radial-gradient(circle at 80% 70%, #DAD4CF 0%, #CDC5BE 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      color: '#2C2624', // Stone charcoal typography
      fontFamily: "system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
      padding: '100px 40px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* ================= SECTION 1: HERO HEADER ================= */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '140px', maxWidth: '800px' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8F827E', fontWeight: 600 }}>01 / THE INTRODUCTION</span>
          <h1 style={{ fontSize: '5.5rem', fontWeight: 300, margin: 0, color: '#2C2624', letterSpacing: '-0.04em', lineHeight: 1 }}>
            Spatial styling &<br />visual experience design.
          </h1>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '16px 0 0 0', maxWidth: '600px' }}>
            "I shape spaces and creations that are felt, not just seen."
          </p>
        </header>

        {/* ================= SECTION 2: THREE FOCUS PILLARS ================= */}
        <section style={{ marginBottom: '140px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '80px' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '24px' }}>02 / ETHOS & PILLARS</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.1, margin: '0 0 60px 0', letterSpacing: '-0.02em', maxWidth: '700px' }}>
            Spaces are experienced before they are understood.
          </h2>
          
          {/* 3 Columns Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            
            {/* Pillar 01 */}
            <div>
              <span style={{ fontSize: '0.75rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 600 }}>01 / SPATIAL STYLING</span>
              <div style={{ height: '160px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44, 38, 37, 0.03)' }}></div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#544B48', margin: 0, fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
            </div>

            {/* Pillar 02 */}
            <div>
              <span style={{ fontSize: '0.75rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 600 }}>02 / VISUAL CONCEPTS (3D)</span>
              <div style={{ height: '160px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44, 38, 37, 0.03)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(143, 184, 181, 0.15) 0%, transparent 100%)' }}></div> {/* Aquamarine glass light rays ray */}
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#544B48', margin: 0, fontWeight: 300 }}>Transforming original creative ideas into rich, atmospheric visualizations.</p>
            </div>

            {/* Pillar 03 */}
            <div>
              <span style={{ fontSize: '0.75rem', color: '#8F827E', fontFamily: 'monospace', fontWeight: 600 }}>03 / EMOTIONAL DESIGN</span>
              <div style={{ height: '160px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 20px 50px rgba(44, 38, 37, 0.03)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(225deg, rgba(143, 184, 181, 0.15) 0%, transparent 100%)' }}></div>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#544B48', margin: 0, fontWeight: 300 }}>Designing how a space feels organically—not only how it presents on screens.</p>
            </div>

          </div>
        </section>

        {/* ================= SECTION 3: THE BLUEPRINT ANALYSIS METRICS ================= */}
        <section style={{ marginBottom: '140px', borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8F827E', fontWeight: 600 }}>03 / THE METRIC SYSTEM</span>
              <h3 style={{ fontSize: '2.6rem', fontWeight: 300, color: '#2C2624', margin: '16px 0 24px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Every space leaves an emotional imprint.
              </h3>
              
              {/* Technical Analysis Parameters */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '32px' }}>
                {['COLOUR SENSITIVITY', 'MATERIAL RESPONSE', 'EMOTIONAL ATMOSPHERE', 'VISUAL BALANCE', 'ENVIRONMENTAL COMFORT'].map((metric, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid rgba(44, 38, 37, 0.06)', paddingBottom: '10px' }}>
                    <span style={{ fontSize: '0.7rem', color: '#8F827E', fontFamily: 'monospace' }}>0{idx + 1}</span>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '2px', fontWeight: 500 }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Blueprint Display Box Placeholder */}
            <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px dashed rgba(44, 38, 37, 0.25)', borderRadius: '12px', height: '420px', display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 10px 30px rgba(44, 38, 37, 0.01)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 100% 0%, rgba(143, 184, 181, 0.2) 0%, transparent 70%)' }}></div>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.4, fontWeight: 500 }}>[ Blueprint Technical Specification Frame ]</span>
            </div>
          </div>
        </section>

        {/* ================= FINAL CONNECT FOOTER BAR ================= */}
        <footer style={{ borderTop: '1px solid rgba(44, 38, 37, 0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="mailto:studio@thetriadicstudio.com" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Email</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" style={{ color: '#2C2624', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 500 }}>Behance</a>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#8F827E', letterSpacing: '1px', fontWeight: 500 }}>
            © {new Date().getFullYear()} THE TRIADIC STUDIO • YORKSHIRE, UK
          </div>
        </footer>

      </div>
    </div>
  );
}
