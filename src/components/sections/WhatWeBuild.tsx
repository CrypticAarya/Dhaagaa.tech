import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: "Brand Strategy",
    items: ["Positioning.", "Messaging.", "Identity Systems."],
    desc: "The foundation of every memorable brand.",
  },
  {
    title: "Content & Influence",
    items: ["Content Strategy.", "Creator Collaborations.", "Social Presence."],
    desc: "Attention is earned before it is bought.",
  },
  {
    title: "Founder Authority",
    items: ["Personal Branding.", "Thought Leadership.", "Founder Visibility."],
    desc: "People trust people before they trust companies.",
  },
  {
    title: "Digital Experience",
    items: ["Websites.", "E-commerce Experiences.", "Conversion Optimization."],
    desc: "Your digital presence should work as hard as you do.",
  }
];

export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>('.service-item');
    items.forEach((item) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 bg-background text-foreground px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-sans font-medium uppercase tracking-widest text-accent mb-24">
          What We Build
        </h2>

        <div className="flex flex-col gap-24">
          {services.map((service, idx) => (
            <div key={idx} className="service-item grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-black/10 pt-12">
              <div className="md:col-span-4">
                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <ul className="text-xl md:text-2xl font-sans text-gray-600 space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex items-end">
                <p className="text-lg font-sans font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
