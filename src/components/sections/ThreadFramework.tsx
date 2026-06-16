import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const framework = [
  { letter: "T", title: "Tell The Story", desc: "A strong brand starts with a story worth telling." },
  { letter: "H", title: "Humanize The Brand", desc: "People connect with people, not logos." },
  { letter: "R", title: "Reach The Audience", desc: "Get your message in front of the right people." },
  { letter: "E", title: "Establish Authority", desc: "Become the trusted voice in your category." },
  { letter: "A", title: "Amplify Visibility", desc: "Create momentum through content, creators, and community." },
  { letter: "D", title: "Drive Revenue", desc: "Turn attention into trust and trust into growth." }
];

export default function ThreadFramework() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = gsap.utils.toArray<HTMLElement>('.thread-row');
    
    letters.forEach((letter) => {
      gsap.fromTo(letter,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: letter,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-foreground text-background px-6 md:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-gray-500 mb-12 md:mb-24">
          The Thread Framework
        </h2>

        <div className="flex flex-col">
          {framework.map((item, idx) => (
            <div key={idx} className="thread-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-gray-800 py-8 md:py-12 items-center">
              <div className="md:col-span-2">
                <div className="text-[14vw] sm:text-[10vw] md:text-[6vw] leading-none font-display font-black text-accent">
                  {item.letter}
                </div>
              </div>
              <div className="md:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-display font-bold tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-xl font-sans font-light text-gray-400 max-w-sm text-balance md:text-right">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
