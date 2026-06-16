import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedThread() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    
    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      const length = pathRef.current?.getTotalLength() || 15000;
      
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Smoother scrubbing
        }
      });
    }, 200);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] flex justify-center opacity-40 mix-blend-difference">
      <svg 
        width="100%" 
        height="1000vh" 
        preserveAspectRatio="none" 
        className="absolute top-0 w-full"
      >
        <path 
          ref={pathRef}
          d="M 50vw 0 C 60vw 1000, 30vw 2000, 50vw 3000 C 70vw 4000, 40vw 5000, 50vw 6000 C 60vw 7000, 30vw 8000, 50vw 9000 C 70vw 10000, 50vw 10000, 50vw 10000"
          stroke="#A65F3C" 
          strokeWidth="1" 
          fill="none" 
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
