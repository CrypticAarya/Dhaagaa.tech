import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const categories = [
  "Startups",
  "D2C Brands",
  "Restaurants",
  "Personal Brands",
  "Lifestyle Companies",
  "SaaS Businesses",
  "Emerging Category Leaders"
];

export default function WhoWeHelp() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>('.help-item');
    gsap.fromTo(items,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-foreground px-8 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        
        <div>
          <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-accent mb-12">
            Who We Help
          </h2>
          <ul className="flex flex-col gap-6">
            {categories.map((cat, idx) => (
              <li key={idx} className="help-item text-3xl md:text-5xl font-display font-medium tracking-tight">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end">
          <p className="text-xl md:text-3xl font-sans font-light max-w-md text-balance leading-snug">
            No matter the industry, the challenge is the same.<br/><br/>
            <span className="font-semibold">People need a reason to remember you.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
