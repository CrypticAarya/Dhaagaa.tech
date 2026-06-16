import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutVision() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-32 bg-foreground text-background px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        
        {/* About */}
        <div className="space-y-12">
          <h3 className="text-sm font-sans font-medium uppercase tracking-widest text-gray-500 fade-up">
            About
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none fade-up">
            Great brands are not built by accident.
          </h2>
          <div className="text-lg md:text-xl font-sans text-gray-400 space-y-6 fade-up">
            <p>Dhaagaa was created to help ambitious Indian founders build brands that people remember, trust, and love.</p>
            <p>We believe India is entering a new era of entrepreneurship. The next generation of iconic brands is being built right now.</p>
            <p className="text-white font-medium">Our mission is to help create them.</p>
          </div>
        </div>

        {/* Vision */}
        <div className="space-y-12">
          <h3 className="text-sm font-sans font-medium uppercase tracking-widest text-gray-500 fade-up">
            Vision
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none text-accent fade-up">
            To help create the next generation of iconic Indian brands.
          </h2>
          <div className="text-lg md:text-xl font-sans text-gray-400 space-y-6 fade-up">
            <p>We are building more than an agency.</p>
            <p>We are building a company dedicated to helping founders transform products into brands and brands into legacies.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
