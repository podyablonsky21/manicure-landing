import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
  priceText?: string;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  onOpenBooking,
  priceText = 'от 3 200 ₽',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero screen (threshold: 380px or 50% viewport height)
      const threshold = Math.min(window.innerHeight * 0.6, 420);
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 pb-safe bg-[#0D0D11]/92 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
        >
          <div className="max-w-md mx-auto flex items-center justify-between gap-3 px-1">
            <div className="text-left pl-1">
              <div className="text-[10px] uppercase tracking-wider text-[#E5C4A8] font-medium flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#E5C4A8]" />
                <span>Салон «Перемена»</span>
              </div>
              <div className="text-base font-serif font-bold text-white tabular-nums tracking-tight">
                {priceText}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="flex-1 max-w-[230px] py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] shadow-[0_0_20px_rgba(229,196,168,0.4)] hover:shadow-[0_0_25px_rgba(229,196,168,0.6)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Записаться онлайн</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
