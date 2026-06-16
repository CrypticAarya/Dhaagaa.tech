import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function IndiaIsBuilding() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    const lines = gsap.utils.toArray<HTMLElement>('.iib-line');
    gsap.fromTo(lines,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-foreground text-background flex items-center px-6 md:px-16 py-20 md:py-0 overflow-hidden z-10">

      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop")'
        }}
      />
      <div className="absolute inset-0 bg-foreground/50 z-[1]" />

      <div ref={textRef} className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h2 className="iib-line text-[10vw] sm:text-[10vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter uppercase text-white">
            India Is<br />Building.
          </h2>
        </div>

        <div className="flex flex-col justify-end text-base sm:text-xl md:text-3xl font-sans font-light text-gray-300 space-y-3 md:space-y-4">
          <p className="iib-line">Across factories.</p>
          <p className="iib-line">Across startups.</p>
          <p className="iib-line">Across restaurants.</p>
          <p className="iib-line">Across software companies.</p>
          <p className="iib-line">Across creator businesses.</p>
          <br />
          <p className="iib-line font-medium text-white">A new generation of founders is building brands that deserve to be remembered.</p>
          <p className="iib-line text-accent">Dhaagaa exists to help build brands.</p>
        </div>
      </div>

    </section>
  );
}
