import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Beliefs() {
  const containerRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textBlocks = gsap.utils.toArray<HTMLElement>('.reveal-text');
    textBlocks.forEach(block => {
      gsap.fromTo(block,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-background text-foreground px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-48">
        
        {/* What We Believe */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-[6vw] md:text-[6vw] font-display font-black leading-[0.9] tracking-tighter uppercase reveal-text">
              A brand isn't<br />what you say.
              <span className="block text-accent mt-4">It's what people<br />remember.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end text-base md:text-xl font-sans text-gray-700 space-y-4 md:space-y-6 reveal-text">
            <p>Most brands compete for attention. The best brands earn it.</p>
            <p>A logo is not a brand. A website is not a brand. A social media page is not a brand.</p>
            <p className="font-semibold text-foreground">A brand is what people remember when you're not in the room.</p>
            <p>That's why we focus on strategy before content, positioning before promotion, and relevance before reach.</p>
            <p className="text-secondary font-medium">Because visibility without clarity is noise. And attention without trust doesn't last.</p>
          </div>
        </div>

        {/* Why Dhaagaa */}
        <div ref={whyRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-black/10 pt-16 md:pt-32">
          <div className="md:col-span-5 md:col-start-1 text-base md:text-xl font-sans text-gray-700 space-y-4 md:space-y-6 reveal-text">
            <p>Content is easy.</p>
            <p>Attention is hard.</p>
            <p className="font-semibold text-foreground">Trust is harder.</p>
            <p>We help brands earn all three. Through strategy, storytelling, design, influence, and execution.</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-3xl sm:text-[6vw] md:text-[6vw] font-display font-black leading-[0.9] tracking-tighter uppercase md:text-right reveal-text">
              <span className="block text-gray-400">We don't</span>
              <span className="block text-gray-400">make content.</span>
              <span className="block text-foreground mt-4">We build</span>
              <span className="block text-foreground">relevance.</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
