import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MadeInIndia() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      animation: gsap.to(textRef.current, {
        opacity: 0.3,
        scale: 0.8,
      })
    });
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center bg-background text-foreground px-8 relative z-10 border-t border-black/10">
      <div ref={textRef} className="text-center">
        <h2 className="text-[12vw] md:text-[9vw] font-display font-black leading-[0.85] tracking-tighter uppercase drop-shadow-sm">
          <span className="block text-gray-800">Made In India.</span>
          <span className="block text-accent">Remembered<br/>Everywhere.</span>
        </h2>
      </div>
    </section>
  );
}
