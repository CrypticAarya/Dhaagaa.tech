import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo('.cta-element',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.5, stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%'
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-20 md:py-32 bg-background text-foreground px-6 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden relative z-10 border-t border-black/10">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-[9vw] sm:text-[10vw] md:text-[9vw] font-display font-black leading-[0.85] tracking-tighter uppercase mb-8 md:mb-12 cta-element">
          Ready to build<br/>a brand<br/>people remember?
        </h2>
        <p className="text-lg sm:text-2xl md:text-4xl font-sans font-light text-gray-500 mb-10 md:mb-16 cta-element">
          Tell us what you're building.<br/>We'll tell you how we'd approach it.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center cta-element">
          <a
            href="https://wa.me/918237556659?text=Hi%20Dhaagaa,%20I%20want%20to%20build%20my%20brand."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-6 sm:px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-xs sm:text-sm transition-colors duration-300 hover:bg-accent min-w-[200px]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
