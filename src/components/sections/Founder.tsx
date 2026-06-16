import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Founder() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(".founder-img",
      { scale: 1.1, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );

    gsap.fromTo(".founder-text",
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1.2, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-foreground text-background px-6 md:px-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        
        <div className="md:col-span-5 relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay" />
          <img 
            src="/founder.jpg"
            alt="Sarthak Ghoderao" 
            className="founder-img absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <h2 className="founder-text text-3xl sm:text-4xl md:text-[4vw] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8 md:mb-12">
            Founder
          </h2>
          
          <div className="founder-text space-y-6 md:space-y-8 text-lg sm:text-xl md:text-3xl font-sans font-light leading-snug text-gray-300 mb-10 md:mb-16 border-l border-gray-800 pl-6 md:pl-8">
            <p className="font-medium text-white">Some businesses grow.</p>
            <p>A few become brands.</p>
            <p>We're here for the second journey. Building alongside ambitious founders creating the next generation of Indian brands.</p>
          </div>

          <div className="founder-text">
            <div className="text-2xl font-display font-bold uppercase tracking-tight">
              Sarthak Ghoderao
            </div>
            <div className="text-sm font-sans font-medium uppercase tracking-widest text-gray-500 mt-2">
              Founder, Dhaagaa
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
