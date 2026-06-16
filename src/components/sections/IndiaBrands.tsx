import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function IndiaBrands() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(".india-text",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-foreground px-8 md:px-16 relative z-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        <div>
          <h2 className="india-text text-[8vw] md:text-[5vw] font-display font-black leading-[0.9] tracking-tighter uppercase">
            We Believe<br/>
            The Next<br/>
            Global Brands<br/>
            <span className="text-gray-400">Will Come<br/>From India.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-xl md:text-3xl font-sans font-light text-gray-700 india-text">
          <p>Not because India lacks talent.</p>
          <p className="font-semibold text-foreground">Because India finally has founders willing to build boldly.</p>
          <p>Dhaagaa exists to help them.</p>
        </div>

      </div>
    </section>
  );
}
