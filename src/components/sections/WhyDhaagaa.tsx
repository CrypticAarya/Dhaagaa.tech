import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function WhyDhaagaa() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.why-line');
    
    gsap.fromTo(lines, 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-background text-foreground px-6 md:px-16 relative z-10 overflow-hidden border-b border-black/10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-16">
        
        <div className="why-line flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-12">
          <p className="font-sans text-sm sm:text-lg md:text-2xl font-light text-gray-500 uppercase tracking-widest">
            Most agencies create content.
          </p>
          <h3 className="font-display text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">
            We create memory.
          </h3>
        </div>

        <div className="why-line flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-12">
          <p className="font-sans text-xl md:text-2xl font-light text-gray-500 uppercase tracking-widest">
            Most agencies chase attention.
          </p>
          <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
            We build trust.
          </h3>
        </div>

        <div className="why-line flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12">
          <p className="font-sans text-xl md:text-2xl font-light text-gray-500 uppercase tracking-widest">
            Most agencies sell services.
          </p>
          <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
            We help businesses become brands.
          </h3>
        </div>

      </div>
    </section>
  );
}
