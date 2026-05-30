'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#E0D9D4', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ================= ZONE 1: THE SOFT PEARLY FAUX FUR HERO ================= */}
      <div style={{
        backgroundColor: '#F2EFEA',
        backgroundImage: 'radial-gradient(circle at 50% 20%, #FDFBF7 0%, transparent 60%), radial-gradient(circle at 10% 70%, #E3DBD5 0%, #D8CFC8 100%)',
        color: '#2C2624',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '140px 60px 180px 60px',
        boxSizing: 'border-box',
        letterSpacing: '-0.01em'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '32px', fontFamily: 'sans-serif' }}>THE INTRODUCTION</span>
              <h1 style={{ fontSize: '5.2rem', fontWeight: 300, margin: 0, color: '#1A1615', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Spatial styling &<br />visual experience<br />design.
              </h1>
              <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '40px 0 0 0', maxWidth: '520px', borderLeft: '1px solid rgba(44,38,37,0.15)', paddingLeft: '24px' }}>
                "I shape spaces and creations that are felt, not just seen."
              </p>
            </div>
            
            {/* Soft Fur/Silk Collage Frame */}
            <div style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.7)', borderRadius: '16px', height: '520px', display: 'flex', boxShadow: '0 30px 70px rgba(44,38,37,0.03)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase', fontWeight: 500, fontFamily: 'sans-serif' }}>
                [ Soft Pearl & Faux Fur Material Collage ]
              </span>
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
        padding: '140px 60px 180px 60px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.4)',
        borderBottom: '1px solid rgba(26,22,21,0.1)'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#5C504C', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>ETHOS</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em', maxWidth: '300px' }}>
                Spaces are experienced before they are understood.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {/* Card 01 - Heavy Mineral Glass Framing */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>SPATIAL STYLING</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
              </div>
              {/* Card 02 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>
              {/* Card 03 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>EMOTIONAL SPACE DESIGN</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Designing how a space feels organically before designing how it looks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#E0D9D4', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ================= ZONE 1: THE SOFT PEARLY FAUX FUR HERO ================= */}
      <div style={{
        backgroundColor: '#F2EFEA',
        backgroundImage: 'radial-gradient(circle at 50% 20%, #FDFBF7 0%, transparent 60%), radial-gradient(circle at 10% 70%, #E3DBD5 0%, #D8CFC8 100%)',
        color: '#2C2624',
        fontFamily: "Garamond, 'Playfair Display', Georgia, serif",
        padding: '140px 60px 180px 60px',
        boxSizing: 'border-box',
        letterSpacing: '-0.01em'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <header style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#8F827E', fontWeight: 600, display: 'block', marginBottom: '32px', fontFamily: 'sans-serif' }}>THE INTRODUCTION</span>
              <h1 style={{ fontSize: '5.2rem', fontWeight: 300, margin: 0, color: '#1A1615', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Spatial styling &<br />visual experience<br />design.
              </h1>
              <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#4A4240', fontWeight: 300, fontStyle: 'italic', margin: '40px 0 0 0', maxWidth: '520px', borderLeft: '1px solid rgba(44,38,37,0.15)', paddingLeft: '24px' }}>
                "I shape spaces and creations that are felt, not just seen."
              </p>
            </div>
            
            {/* Soft Fur/Silk Collage Frame */}
            <div style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.7)', borderRadius: '16px', height: '520px', display: 'flex', boxShadow: '0 30px 70px rgba(44,38,37,0.03)' }}>
              <span style={{ margin: 'auto', fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, textTransform: 'uppercase', fontWeight: 500, fontFamily: 'sans-serif' }}>
                [ Soft Pearl & Faux Fur Material Collage ]
              </span>
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
        padding: '140px 60px 180px 60px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.4)',
        borderBottom: '1px solid rgba(26,22,21,0.1)'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '4px', color: '#5C504C', fontWeight: 600, display: 'block', marginBottom: '24px', fontFamily: 'sans-serif' }}>ETHOS</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: '-0.02em', maxWidth: '300px' }}>
                Spaces are experienced before they are understood.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {/* Card 01 - Heavy Mineral Glass Framing */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>SPATIAL STYLING</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Creating environments through texture, materiality, and composition.</p>
              </div>
              {/* Card 02 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>VISUAL CONCEPTS (3D)</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Transforming concepts into atmospheric visual narratives.</p>
              </div>
              {/* Card 03 */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#5C504C', letterSpacing: '2px', fontWeight: 600, fontFamily: 'sans-serif' }}>EMOTIONAL SPACE DESIGN</span>
                <div style={{ height: '180px', margin: '20px 0', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(255, 255, 255, 0.65)', boxShadow: '0 40px 80px rgba(26,22,21,0.12), inset 0 1px 0 rgba(255,255,255,0.5)' }}></div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#2C2624', margin: 0, fontFamily: 'sans-serif', fontWeight: 300 }}>Designing how a space feels organically before designing how it looks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
