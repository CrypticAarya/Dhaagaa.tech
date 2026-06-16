import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function StrategicPartners() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(".partner-element",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-foreground px-8 md:px-16 border-t border-black/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        
        <div className="md:w-1/2">
          <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-gray-500 mb-12 partner-element">
            Strategic Partners
          </h2>
          <div className="partner-element">
            <h3 className="text-[8vw] md:text-[5vw] font-display font-black leading-[0.9] tracking-tighter uppercase">
              NYX Studios
            </h3>
            <p className="text-xl md:text-2xl font-sans font-light text-gray-500 mt-4">
              Technology & Creative Partner
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center md:justify-end">
          <p className="text-xl md:text-3xl font-sans font-light max-w-md text-balance leading-snug text-gray-600 partner-element md:text-right">
            Working alongside trusted partners to deliver stronger digital experiences, creative execution and growth systems.
          </p>
        </div>

      </div>
    </section>
  );
}
