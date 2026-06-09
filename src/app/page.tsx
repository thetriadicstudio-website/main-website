'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Echoes of Memory',
    category: 'Residential',
    image: '/portfolio/1.jpg',
    description: 'A dramatic view of ancient structural design, where stark historical lines, deep reflective pools, and shadow-drenched pathways frame an intense emotional landscape.',
  },
  {
    title: 'Textured Stillness',
    category: 'Residential',
    image: '/portfolio/2.jpg',
    description: 'A tight interior study contrasting the deep tones of a velvet couch with the organic folds of a fringed throw, a classic book, and shimmering ambient bokeh.',
  },
  {
    title: 'Inner Courtyard',
    category: 'Architecture Study',
    image: '/portfolio/3.jpg',
    description: 'An intimate, textured close-up capturing a scholarly writing set arranged on raw concrete framing, offering a split-focus glimpse into a warm, sun-lit historic courtyard.',
  },
  {
    title: 'Golden Pavilions',
    category: 'Spatial Styling',
    image: '/portfolio/4.jpg',
    description: 'A balanced architectural perspective of a luxury minimalist pavilion, highlighting striking traditional rooflines and circular portals perfectly mirrored in a still reflection pool during the golden hour.',
  },
  {
    title: 'Misty Portals',
    category: 'Concept Study',
    image: '/portfolio/5.jpg',
    description: 'An outdoor architectural perspective focusing on raw concrete frames and a misty moongate, contrasted by sharp tropical greenery and fallen golden leaves under a heavy sky.',
  },
  {
    title: 'Water Remembers What Stone Forgets',
    category: 'Material Study',
    image: '/portfolio/6.jpg',
    description: 'An ethereal subterranean portal where raw, moss-covered stone structures encase a deep, sun-drenched aquatic chamber, capturing the silent stillness of light piercing through water.',
  },
  {
    title: 'Floral Sanctuary',
    category: 'Residential',
    image: '/portfolio/7.jpg',
    description: 'An ethereal internal window setting defined by cascading pink blossoms contrasting against high, industrial concrete walls.',
  },
  {
    title: 'Obsidian Sanctuary',
    category: 'Spatial Styling',
    image: '/portfolio/8.jpg',
    description: 'A moody luxury lounge balancing dark raw textures and living nature. Features a textured stone accent wall with integrated biophilic plantings, a monolithic black marble fireplace structure, and organic seating overlooking a misty forest panorama.',
  },
  {
    title: 'Monolithic Horizon',
    category: 'Architectural Atmosphere',
    image: '/portfolio/9.jpg',
    description: 'An elevated perspective highlighting structural geometry and panoramic scale. A floating ceiling pavilion with integrated warm LED light channels defines the central lounge, framed by full-height glass walls that merge the interior seating with a vast, misty pine forest.',
  },
  {
    title: 'Golden Threshold',
    category: 'Light & Narrative',
    image: '/portfolio/10.jpg',
    description: 'A dramatic study of cinematic natural illumination. Piercing golden hour sunbeams intersect the dark architectural planes, casting high-contrast silhouettes and highlighting the interplay between the glowing geometric ceiling installation and warm organic timber.',
  },
  {
    title: 'Tactile Contours',
    category: 'Material Exploration',
    image: '/portfolio/11.jpg',
    description: 'A macro perspective emphasizing organic textures and depth of field. The weathered, twisting branches of a sculptural driftwood element dominate the foreground, contrasting raw natural fibers against the softly blurred glow of the modern lounge and fireplace behind it.',
  },
  {
    title: 'Dual Coexistence',
    category: 'Spatial Narrative',
    image: '/portfolio/12.jpg',
    description: 'A profile view capturing the balance between internal warmth and external atmosphere. The deep texture of the stone installation and the linear fireplace create a protective, grounding anchor against the expansive, cool-toned woodland visible through the glass panels.',
  },
  {
    title: 'Atmospheric Convergence',
    category: 'Spatial Experience',
    image: '/portfolio/13.jpg',
    description: 'A wide, grounding corner perspective facing the expansive perimeter glazing. Curved obsidian seating assemblies encircle a low-profile glass table, balancing the stark verticality of the surrounding forest with a fluid, continuous social landscape.',
  },
  {
    title: 'Twilight Boundaries',
    category: 'Architectural Atmosphere',
    image: '/portfolio/14.jpg',
    description: 'A concluding study of spatial transition into nightfall. As daylight fades into deep twilight shadows, the interior boundaries dissolve entirely into the dark forest panorama, leaving the glowing geometric light sculpture to anchor the room\'s warm, contemplative soul.',
  },
];
export default function Home() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActive(index);
    setIsOpen(true);
  };

  const previousProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(active === 0 ? projects.length - 1 : active - 1);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(active === projects.length - 1 ? 0 : active + 1);
  };

  return (
    <main className="w-full min-h-screen px-6 md:px-16 py-12 flex flex-col gap-24 md:gap-32 bg-black/10 backdrop-blur-[1px] text-white selection:bg-white/20">
      
      {/* ================= SECTION 1: HERO HEADER ================= */}
      <section className="min-h-[80vh] flex flex-col justify-between pt-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          
          {/* Main Statement Top Left */}
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-4 font-mono">
              Spatial Styling & Visual Experience Design
            </p>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
              Spaces remembered <br />
              long after they are left, <br />
              because they were <br />
              <span className="italic font-normal border-b border-white/20 pb-1">understood.</span>
            </h1>
            <div className="flex gap-4 text-[9px] tracking-widest uppercase opacity-30 mt-6 font-mono">
              <span>Atmosphere</span>
              <span>Narrative</span>
              <span>Materiality</span>
            </div>
          </div>

          {/* Brand Heading Top Right */}
          <div className="text-left md:text-right tracking-[0.25em] uppercase md:pt-1">
            <h2 className="text-sm font-medium tracking-[0.3em]">The Triadic Studio</h2>
            <p className="text-[9px] opacity-50 mt-1 font-mono">Spatial Experience Design</p>
          </div>

        </div>

        <div className="text-[10px] tracking-widest uppercase opacity-40 pt-12 md:pt-0 font-mono">
          Portfolio
        </div>
      </section>

      {/* ================= SECTION 2: PORTFOLIO BENTO GRID ================= */}
      <section className="w-full flex flex-col gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 auto-rows-[220px]">
          {projects.map((project, idx) => {
            const layoutClasses = [
              'md:col-span-6 md:row-span-2', // 01
              'md:col-span-3 md:row-span-1', // 02
              'md:col-span-3 md:row-span-1', // 03
              'md:col-span-6 md:row-span-2', // 04
              'md:col-span-3 md:row-span-1', // 05
              'md:col-span-3 md:row-span-1', // 06
              'md:col-span-6 md:row-span-1', // 07
              'md:col-span-6 md:row-span-2', // 08
              'md:col-span-3 md:row-span-1', // 09
              'md:col-span-3 md:row-span-1', // 10
              'md:col-span-6 md:row-span-2', // 11
              'md:col-span-3 md:row-span-1', // 12
              'md:col-span-3 md:row-span-1', // 13
              'md:col-span-6 md:row-span-1', // 14
            ];
            
            const layoutClass = layoutClasses[idx] || 'md:col-span-4 md:row-span-1';

            return (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`${layoutClass} col-span-1 group relative bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-[1.8rem] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06] backdrop-blur-sm shadow-xl`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 p-5 flex flex-col justify-between">
                  <span className="text-[10px] tracking-wider opacity-40 font-mono">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-[9px] tracking-widest uppercase opacity-60 font-mono mb-1">{project.category}</p>
                    <h3 className="text-sm font-light tracking-wide text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-md mt-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-snug">
            Every space leaves an emotional imprint.
          </h2>
        </div>
      </section>
      {/* ================= SECTION 3: REALIGNED SPATIAL BLUEPRINT ================= */}
      <section className="w-full flex flex-col gap-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Vertical Menu */}
          <div className="md:col-span-2 flex flex-col gap-4 text-[10px] tracking-[0.25em] uppercase opacity-40 font-mono">
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Colour</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Texture</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Scale</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Light</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Material</span>
            <span className="hover:opacity-100 cursor-pointer transition-opacity">Movement</span>
          </div>

          {/* Blueprint Graphic shifted over next to the menu */}
          <div className="md:col-span-4 w-full h-44 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center text-[10px] tracking-wider text-white/30 italic backdrop-blur-sm overflow-hidden">
            <div className="px-6 text-center opacity-60">[ 3D Stacked Model Blueprint Graphic ]</div>
          </div>

          {/* Spatial Text Paragraph shifted leftward right after graphic */}
          <div className="md:col-span-5 md:col-start-7 flex flex-col gap-4">
            <p className="text-xs tracking-[0.2em] uppercase opacity-30 font-mono">The Emotional Blueprint</p>
            <p className="text-sm md:text-base font-light opacity-80 leading-relaxed max-w-xl">
              A spatial analysis method exploring how environments influence perception.
            </p>
            <ul className="text-[10px] tracking-widest uppercase opacity-40 space-y-2 font-mono pt-2">
              <li>• Colour Sensitivity</li>
              <li>• Sensory Responses</li>
              <li>• Emotional Atmosphere</li>
              <li>• Spatial Simulation</li>
              <li>• Volume Balance</li>
              <li>• Environmental Comfort</li>
            </ul>
          </div>
        </div>

        {/* About Section Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-white/10">
          <div className="md:col-span-3">
            <h3 className="text-[10px] tracking-[0.25em] uppercase opacity-40 font-mono">About</h3>
          </div>
          <div className="md:col-span-9 flex flex-col gap-6 text-sm md:text-base font-light opacity-75 max-w-3xl leading-relaxed">
            <p>
              The Triadic Studio is a creative practice exploring the relationship between space, perception, and emotion.
            </p>
            <p>
              Through professional blueprint layout, we study the sensory elements that design atmospheric identities—materiality, atmosphere, scale and context—creating environments that stay with clients long after they leave them.
            </p>
            <p>
              Our work is focused on architectural design alternatives that elevate spatial experience, generating a clear dialogue between people and place.
            </p>
          </div>
        </div>

        {/* Footer Area */}
        <footer className="w-full pt-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] opacity-40 italic tracking-wider font-mono">Not for the ordinary.</p>
            <p className="text-base font-light tracking-wide">Feel deeply. Choose differently.</p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] tracking-widest uppercase opacity-50 font-mono">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Behance</a>
            <a href="mailto:thetriadicstudio@gmail.com" className="hover:opacity-100 transition-opacity">thetriadicstudio@gmail.com</a>
          </div>
        </footer>
      </section>

      {/* ================= LIGHTBOX / INTERACTIVE MODAL COMPONENT ================= */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#0a0f0f]/95 border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 z-10 text-white opacity-40 hover:opacity-100 transition-opacity p-2 text-xl font-light"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Left Box Image presentation */}
            <div className="w-full md:w-3/5 h-1/2 md:h-full bg-black/40 relative overflow-hidden">
              <img 
                src={projects[active].image} 
                alt={projects[active].title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Box Metadata Stack */}
            <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-transparent to-black/30">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] text-white/40 block font-mono">
                  {(active + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
                </span>
                <h2 className="text-xl md:text-2xl font-light tracking-wide text-white">
                  {projects[active].title}
                </h2>
                <span className="inline-block text-[9px] tracking-[0.2em] uppercase border border-white/20 px-2 py-0.5 rounded text-white/60 font-mono">
                  {projects[active].category}
                </span>
                <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed pt-2">
                  {projects[active].description}
                </p>
              </div>

              {/* Slider Interface controls */}
              <div className="flex items-center gap-12 text-[10px] tracking-[0.25em] uppercase font-mono text-white/40 pt-6">
                <button onClick={previousProject} className="hover:text-white transition-colors py-2 flex items-center gap-2">
                  ← Prev
                </button>
                <button onClick={nextProject} className="hover:text-white transition-colors py-2 flex items-center gap-2">
                  Next →
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
