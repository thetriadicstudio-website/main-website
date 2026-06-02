* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --ink: #332b29;        
  --ink-soft: #9e8d85;   
  --ink-label: #a3968f;  
  --pearl: #ffffff; 
  --ivory: #e9e0d2;
  --glass: rgba(220, 250, 244, 0.16);
  --glass-border: rgba(255, 255, 255, 0.2);
}

/* FIXED: Completely killed the default Next.js white gradient layout template. 
   Forced a solid dark luxury backdrop foundation with your background image */
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: var(--font-inter), sans-serif;
  background-color: #0d1412 !important; 
  background-image: url('/background.jpg') !important;
  background-position: center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  color: #ffffff;
  overflow-x: hidden;
}

/* FIXED: Replaced standard background veil logic with a pure studio vignette scrim.
   This drops a smooth dark mask specifically behind text regions while keeping images crisp */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -2;
  background: 
    linear-gradient(to bottom, rgba(14, 22, 20, 0.85) 0%, rgba(14, 22, 20, 0.3) 25%, rgba(14, 22, 20, 0.4) 75%, rgba(14, 22, 20, 0.85) 100%) !important;
  pointer-events: none;
}

body::after {
  display: none !important; /* Erases any hidden light template gradient containers completely */
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }
.page { min-height: 100vh; padding: 60px 80px 120px; }

/* REUSABLE ANTI-GLARE CONTRAST TEXT SHADOW OUTLINE */
.header, .eyebrow, .pillars, .portfolio-title, .blueprint-right .eyebrow, .blueprint-list li, .footer-nav a {
  text-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.95),
    0 4px 20px rgba(0, 0, 0, 0.8),
    0 0 4px rgba(0, 0, 0, 0.5);
}

/* TOP NAVIGATION */
.header {
  position: relative; display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important;
}
.header .brand { color: var(--ink-label) !important; transition: opacity 0.3s ease, color 0.3s ease; }
.header .brand:hover { opacity: 1; color: #ffffff; }

/* Placeholder reservation block for your upcoming corporate logo asset */
.logo-placeholder {
  min-width: 120px;
  height: auto;
  display: flex;
  justify-content: flex-end;
}

.hero { min-height: 55vh; display: flex; align-items: center; }
.hero-panel { max-width: 720px; margin-left: 60px; }

.eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; margin-bottom: 32px; }

.hero h1 { 
  font-family: var(--font-cormorant), Georgia, serif; 
  font-size: clamp(64px, 5.5vw, 92px); 
  font-weight: 300; 
  line-height: 1.0; 
  letter-spacing: -0.02em;
  color: #ffffff !important; 
  margin: 0; 
  text-shadow: 0 4px 24px rgba(0,0,0,0.6);
}
.hero h1 em { font-style: italic; color: var(--ink-soft); font-weight: 300; }

.pillars { margin-top: 42px; display: flex; gap: 32px; font-size: 12px; font-weight: 600; letter-spacing: 0.35em; text-transform: uppercase; color: var(--ink-label) !important; }

.portfolio { margin-top: 80px; }
.portfolio-title { font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; margin-bottom: 40px; }
.portfolio-stage { display: block; }
/* PORTFOLIO GRID */
.tiles { position: relative; min-height: 760px; width: 100%; }
.tile {
  position: absolute; padding: 0; overflow: hidden; border-radius: 20px; cursor: pointer; 
  border: 1px solid rgba(255, 255, 255, 0.22); 
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04)); 
  backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease, box-shadow 0.45s ease;
}
.tile span { position: absolute; top: 18px; left: 20px; z-index: 4; font-size: 9px; font-weight: 600; letter-spacing: 0.15em; color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
.tile img { width: 100%; height: 100%; object-fit: cover; opacity: 0.68; filter: saturate(0.85) contrast(0.95) brightness(0.88); transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease; }
.tile::before { content: ""; position: absolute; inset: 0; z-index: 2; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 60%); pointer-events: none; }
.tile:hover { transform: translateY(-12px) scale(1.01); border-color: rgba(255, 255, 255, 0.45); box-shadow: 0 50px 110px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.25); }
.tile:hover img { transform: scale(1.04); opacity: 0.85; }

.tile-1 { width: 48%; height: 440px; left: 0; top: 0; }
.tile-2 { width: 24%; height: 210px; left: 51%; top: 0; }
.tile-3 { width: 22%; height: 210px; left: 78%; top: 0; }
.tile-4 { width: 46%; height: 260px; left: 51%; top: 230px; }
.tile-5 { width: 31%; height: 230px; left: 0; top: 470px; }
.tile-6 { width: 32%; height: 230px; left: 34%; top: 470px; }
.tile-7 { width: 31%; height: 230px; left: 69%; top: 470px; }

/* THE EMOTIONAL BLUEPRINT FRAMEWORK SECTION */
.blueprint { margin-top: 160px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 80px; align-items: center; border-top: 1px solid rgba(140, 129, 123, 0.15); padding-top: 90px; }
.blueprint-left h2 { font-family: var(--font-cormorant), Georgia, serif; font-size: 52px; font-weight: 300; line-height: 1.1; letter-spacing: -0.01em; color: #ffffff !important; margin: 0 0 60px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }

/* ISOMETRIC MATRIX GRID */
.blueprint-diagram { display: grid; grid-template-columns: 140px 1fr; gap: 30px; align-items: center; margin-top: 40px; }
.blueprint-labels { display: flex; flex-direction: column; justify-content: space-between; height: 320px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.28em; color: var(--ink-label); text-align: right; padding-right: 20px; border-right: 1px solid rgba(140, 129, 123, 0.15); }
.blueprint-labels span { line-height: 1; height: 20px; }
.blueprint-stack { position: relative; height: 360px; width: 100%; max-width: 440px; margin: 0 auto; perspective: 1200px; }
.blueprint-layer { position: absolute; width: 100%; height: 160px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 20px 45px rgba(0,0,0,0.35); transform: rotateX(55deg) rotateZ(-35deg); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease; background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
.blueprint-layer img { width: 100%; height: 100%; object-fit: cover; opacity: 0.35; filter: grayscale(0.4) brightness(0.9); transition: opacity 0.4s ease; }
.blueprint-layer:hover { transform: rotateX(55deg) rotateZ(-35deg) translateZ(25px); border-color: rgba(255,255,255,0.4); }
.blueprint-layer:hover img { opacity: 0.65; filter: grayscale(0); }

.layer-1 { top: 0px; z-index: 10; }
.layer-2 { top: 35px; z-index: 9; }
.layer-3 { top: 70px; z-index: 8; }
.layer-4 { top: 105px; z-index: 7; }
.layer-5 { top: 140px; z-index: 6; }
.layer-6 { top: 175px; z-index: 5; }

/* BLUEPRINT TEXT LIST BLOCK */
.blueprint-right h3 { font-family: var(--font-cormorant), Georgia, serif; font-size: 32px; font-weight: 300; line-height: 1.35; color: #ffffff !important; margin: 0 0 40px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
.blueprint-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
.blueprint-list li { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.24em; color: var(--ink-label) !important; padding-left: 20px; position: relative; }
.blueprint-list li::before { content: "•"; position: absolute; left: 0; color: var(--ink-soft); font-size: 16px; top: -2px; }

/* ABOUT SECTION */
.about { margin-top: 120px; display: flex; flex-direction: column; gap: 24px; border-top: 1px solid rgba(140, 129, 123, 0.15); padding-top: 60px; }
.about span { font-size: 12px; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: var(--ink-label) !important; }
.about p { max-width: 600px; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }

/* FOOTER SECTION (UPDATED LAYOUT WITH INLINE SOCIALS) */
.footer { 
  margin-top: 120px; 
  border-top: 1px solid rgba(140, 129, 123, 0.15); 
  padding-top: 48px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
}
.footer p { 
  font-family: var(--font-cormorant), Georgia, serif; 
  font-size: 22px; 
  font-weight: 300; 
  line-height: 1.4; 
  color: var(--ink-soft); 
}
.footer p em { font-style: italic; color: #ffffff; }

.footer-nav { 
  display: flex; 
  gap: 40px; 
  font-size: 12px; 
  font-weight: 600; 
  letter-spacing: 0.38em; 
  text-transform: uppercase; 
}
.footer-nav a { 
  color: var(--ink-label) !important; 
  transition: opacity 0.3s ease, color 0.3s ease; 
}
.footer-nav a:hover { 
  opacity: 1; 
  color: #ffffff !important; 
}

/* MODAL OVERLAY LIGHTBOX WINDOW */
.lightbox-overlay { 
  position: fixed; 
  inset: 0; 
  z-index: 100; 
  background: rgba(8, 12, 11, 0.82); 
  backdrop-filter: blur(32px); 
  -webkit-backdrop-filter: blur(32px); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 40px; 
}
.lightbox-card { 
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)); 
  border: 1px solid rgba(255, 255, 255, 0.15); 
  border-radius: 24px; 
  width: 100%; 
  max-width: 1100px; 
  position: relative; 
  overflow: hidden; 
  box-shadow: 0 50px 100px rgba(0,0,0,0.6); 
}
.lightbox-close { 
  position: absolute; 
  top: 24px; 
  right: 24px; 
  background: none; 
  border: none; 
  color: var(--ink-label); 
  font-size: 18px; 
  cursor: pointer; 
  z-index: 10; 
  transition: color 0.3s; 
}
.lightbox-close:hover { color: #ffffff; }
.lightbox-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; min-height: 560px; }
.lightbox-image-wrapper { width: 100%; height: 100%; overflow: hidden; background: rgba(0,0,0,0.2); }
.lightbox-image-wrapper img { width: 100%; height: 100%; object-fit: cover; }

.lightbox-content { 
  padding: 60px; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  background: rgba(14, 22, 20, 0.4); 
}
.lightbox-count { font-size: 11px; font-weight: 600; letter-spacing: 0.2em; color: var(--ink-label); margin-bottom: 24px; }
.lightbox-content h2 { font-family: var(--font-cormorant), Georgia, serif; font-size: 38px; font-weight: 300; line-height: 1.2; margin-bottom: 8px; color: #ffffff; }
.lightbox-category { font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 24px; display: block; }
.lightbox-content p { font-size: 14px; line-height: 1.6; color: var(--ink-label); margin-bottom: 40px; max-width: 400px; }

.lightbox-controls { display: flex; align-items: center; gap: 24px; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-label); }
.lightbox-controls button { background: none; border: none; color: inherit; cursor: pointer; text-transform: uppercase; letter-spacing: inherit; padding: 4px 8px; transition: color 0.3s; }
.lightbox-controls button:hover { color: #ffffff; }
.lightbox-controls span { font-size: 10px; color: rgba(255,255,255,0.15); }
