import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InvisibleProblem() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const listItems = gsap.utils.toArray<HTMLLIElement>('.problem-item');
    
    gsap.fromTo(listItems, 
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );

    gsap.fromTo(".solution-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.5, delay: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-foreground text-background px-8 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-12 text-gray-500">
            Very Great<br/>
            Businesses<br/>
            <span className="text-foreground">Stay Invisible.</span>
          </h2>
          <p className="font-sans text-xl font-light text-gray-400 max-w-md mb-8 solution-text">
            Not because they lack quality.
          </p>
          <p className="font-sans text-xl font-light text-gray-400 max-w-md solution-text">
            Because they lack positioning. Identity. Trust. Visibility.
          </p>
        </div>

        <div className="flex flex-col justify-center font-sans">
          <div className="solution-text text-3xl md:text-5xl font-display font-medium text-white leading-tight">
            That's where Dhaagaa comes in.
          </div>
        </div>

      </div>
    </section>
  );
}
