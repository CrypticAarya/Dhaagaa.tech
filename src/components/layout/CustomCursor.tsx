import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      // clientX/Y is always viewport-relative — correct regardless of scroll
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.dataset.cursor === 'hover';

      if (isInteractive !== isHovering.current) {
        isHovering.current = isInteractive;
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px) scale(${isInteractive ? 2.2 : 1})`;
        }
      }
    };

    // Use rAF to keep cursor movement silky smooth
    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px) scale(${isHovering.current ? 2.2 : 1})`;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        backgroundColor: '#F5F1E8',
        willChange: 'transform',
        transition: 'transform 0.12s ease, scale 0.15s ease',
      }}
    />
  );
}
