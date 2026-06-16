import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
  { num: "01", title: "Discover" },
  { num: "02", title: "Define" },
  { num: "03", title: "Build" },
  { num: "04", title: "Grow" }
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const blocks = gsap.utils.toArray<HTMLElement>('.work-step');
    gsap.fromTo(blocks,
      { opacity: 0, y: 30 },
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
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-foreground px-8 md:px-16 border-t border-black/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-accent mb-24 text-center">
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="work-step flex flex-col items-center text-center space-y-8">
              <div className="text-sm font-sans font-light tracking-widest text-gray-500">
                {step.num}
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
