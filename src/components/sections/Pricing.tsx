import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "START",
    price: "₹20,000",
    period: "/month",
    desc: "For businesses seeking clarity.",
    popular: false,
    features: [
      "Brand Positioning Strategy",
      "Visual Identity refinement",
      "Basic Content Guidelines",
      "Monthly Consultation"
    ]
  },
  {
    name: "GROW",
    price: "₹50,000",
    period: "/month",
    desc: "For businesses seeking visibility.",
    popular: true,
    features: [
      "Everything in START",
      "Comprehensive Digital Strategy",
      "Content Creation & Curation",
      "Social Media Management",
      "Bi-weekly Strategy Calls"
    ]
  },
  {
    name: "LEAD",
    price: "₹99,000",
    period: "/month",
    desc: "For businesses building authority.",
    popular: false,
    features: [
      "Everything in GROW",
      "Founder Personal Branding",
      "PR & Authority Articles",
      "High-end Campaign Direction",
      "Priority Access & Weekly Syncs"
    ]
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.price-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-foreground text-background px-8 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 pb-12">
          <h2 className="text-[8vw] md:text-[5vw] font-display font-black leading-[0.9] tracking-tighter uppercase">
            Pricing
          </h2>
          <p className="font-sans text-xl font-light text-gray-400 max-w-sm text-balance mt-8 md:mt-0">
            Clear, transparent retainers built for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-800">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`price-card relative p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-800 last:border-0 hover:bg-white/[0.02] transition-colors duration-500 flex flex-col group`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-8 bg-white text-black text-[10px] font-sans font-bold uppercase tracking-widest py-1 px-3">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 mb-8">
                {plan.name}
              </h3>
              
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white">{plan.price}</span>
                <span className="text-sm font-sans text-gray-500 ml-2">{plan.period}</span>
              </div>
              
              <p className="font-sans text-lg font-light text-gray-400 mb-12 h-12">
                {plan.desc}
              </p>
              
              <ul className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm font-sans text-gray-300 font-light">
                    <Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/918237556659?text=Hi%20Dhaagaa,%20I%20want%20to%20build%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-4 border border-gray-700 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Inquire
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs font-sans text-gray-500 uppercase tracking-widest">
            * Influencer fees, production costs and third-party expenses are billed separately.
          </p>
        </div>

      </div>
    </section>
  );
}
