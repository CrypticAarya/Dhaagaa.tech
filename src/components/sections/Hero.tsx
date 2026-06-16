import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';



export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 30,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const headlineLines = [
    "INDIA'S NEXT",
    "ICONIC BRANDS",
    "ARE BEING BUILT",
    "RIGHT NOW."
  ];

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-foreground">
        {/* Moving B/W Imagery Background with fallback */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=3000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-industrial-machines-in-a-factory-4264/1080p.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
          </video>
        </div>
      
      {/* Gradient overlays to ensure text readability and cinematic depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-foreground via-transparent to-transparent opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-end h-full pb-16 md:pb-24">
        
        <div className="mb-12">
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[7.5vw] leading-[0.85] font-display font-black tracking-tighter uppercase text-background">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%", rotate: 2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + idx * 0.1 
                  }}
                  className="origin-bottom-left"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row gap-12 md:items-end justify-between"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-4">
            <p className="font-sans text-base sm:text-xl md:text-3xl font-light max-w-2xl text-balance leading-snug text-gray-300">
              Dhaagaa helps ambitious founders transform businesses into brands people remember, trust and choose.
            </p>
            <p className="font-sans text-xs sm:text-sm md:text-lg font-medium text-gray-500 tracking-widest uppercase mt-4">
              For founders building something worth remembering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="https://wa.me/918237556659?text=Hi%20Dhaagaa,%20I%20want%20to%20build%20my%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground px-6 sm:px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs sm:text-sm transition-colors duration-300 hover:bg-accent hover:text-white text-center min-w-[200px]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
