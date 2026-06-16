import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo('.manifesto-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 w-full flex items-center justify-center bg-background text-foreground px-6 md:px-16 relative z-10"
    >
      <div className="max-w-6xl w-full text-center manifesto-text">
        <h2 className="text-3xl sm:text-[6vw] md:text-[6.5vw] font-display font-black leading-[0.9] tracking-tighter uppercase">
          <span className="block text-gray-400">Most Businesses</span>
          <span className="block mb-6 md:mb-12">Fight For Attention.</span>
          
          <span className="block text-gray-400">The Best Brands</span>
          <span className="block">Earn Trust.</span>
        </h2>
      </div>
    </section>
  );
}
