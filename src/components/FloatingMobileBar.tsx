import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
  priceText?: string;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  onOpenBooking,
  priceText = 'от 3 200 ₽'
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#0D0D11]/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="text-left pl-2">
          <div className="text-[10px] uppercase tracking-wider text-[#E5C4A8] font-medium flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            Онлайн-запись
          </div>
          <div className="text-sm font-serif font-bold text-white tabular-nums">
            {priceText}
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="flex-1 max-w-[220px] py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] shadow-[0_0_20px_rgba(229,196,168,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Записаться</span>
        </button>
      </div>
    </div>
  );
};
