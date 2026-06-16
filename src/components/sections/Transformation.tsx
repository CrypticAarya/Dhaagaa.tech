import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Transformation() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    gsap.fromTo('.quote-text',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-foreground text-background px-6 md:px-16 relative z-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="quote-text text-[8vw] sm:text-[6vw] md:text-[5vw] font-display font-black leading-[1.1] tracking-tighter uppercase text-white">
          "Your brand is what people say about you when you're not in the room."
        </h2>
        <p className="quote-text mt-8 md:mt-12 text-lg sm:text-xl md:text-2xl font-sans font-medium text-accent uppercase tracking-widest">
          – Jeff Bezos, Founder of Amazon
        </p>
      </div>
    </section>
  );
}
