import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export const ScrollExperience: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  // Parallax positions for ambient background elements
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.22, 0.18, 0.25]);

  // Cursor spotlight on desktop
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 1. Luxury Champagne-Gold Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[70] pointer-events-none bg-black/20">
        <motion.div
          style={{ scaleX }}
          className="h-full w-full origin-left bg-gradient-to-r from-[#C89F7D] via-[#E5C4A8] to-[#F5DFCB] relative shadow-[0_0_12px_rgba(229,196,168,0.7)]"
        >
          {/* Luminous Glowing Bead at the tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#FFFFFF,0_0_20px_#E5C4A8]" />
        </motion.div>
      </div>

      {/* 2. Parallax Luxury Floating Light Fields */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft floating golden orb 1 (top-left to mid) */}
        <motion.div
          style={{
            y: orb1Y,
            opacity: orbOpacity,
          }}
          className="absolute -top-32 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] bg-gradient-to-br from-[#E5C4A8]/20 to-[#C89F7D]/10"
        />

        {/* Soft floating warm orb 2 (mid-right to bottom) */}
        <motion.div
          style={{
            y: orb2Y,
            opacity: orbOpacity,
          }}
          className="absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full blur-[150px] bg-gradient-to-bl from-[#F5DFCB]/15 via-[#E5C4A8]/10 to-transparent"
        />

        {/* Deep ambient orb 3 (bottom-center) */}
        <motion.div
          style={{
            y: orb3Y,
          }}
          className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full blur-[160px] opacity-10 bg-gradient-to-t from-[#E5C4A8]/20 to-transparent"
        />

        {/* Subtle radial vignette to enhance contrast & focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,13,17,0.5)_100%)]" />
      </div>

      {/* 3. Interactive Luxury Ambient Spotlight (Desktop Mouse Only) */}
      {isPointerDevice && mousePos && (
        <div
          className="fixed pointer-events-none z-[25] transition-opacity duration-500 will-change-transform"
          style={{
            transform: `translate3d(${mousePos.x - 250}px, ${mousePos.y - 250}px, 0)`,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(229,196,168,0.06) 0%, rgba(229,196,168,0.02) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};
