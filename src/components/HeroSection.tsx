import React from 'react';
import { ShieldCheck, Award, Sparkles, ArrowRight, Clock, Star } from 'lucide-react';
import heroNailsImg from '../assets/images/assets/aistudio/_EA5E9ED7-B9F3-49FD-B030-59FD5F4C0F8C__451120f7.png';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenCalculator
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #E5C4A8 0%, #C89F7D 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 right-10 w-[350px] h-[350px] rounded-full pointer-events-none opacity-10 blur-[90px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Offer, Copy, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#E5C4A8]/25 backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5DFCB]">
                Салон красоты «Перемена» · Топ-мастер Вероника
              </span>
            </div>

            {/* Main Title with Refined Typography & Balanced Wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.12] tracking-tight mb-6 text-balance">
              Безупречный эстетичный маникюр с{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F5DFCB] via-[#E5C4A8] to-[#C89F7D]">
                ноской от 4 недель
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
              Ювелирная архитектура ногтей, безопасная аппаратная техника без пропилов и безукоризненная медицинская стерильность. Почувствуйте разницу в деталях и идеальном отражении блика.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">100% стерильность</div>
                  <div className="text-[11px] text-neutral-400">СанПиН 2.1.3678-20</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <Award className="w-5 h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">Гарантия 7 дней</div>
                  <div className="text-[11px] text-neutral-400">На любое покрытие</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">Luxio & Smart</div>
                  <div className="text-[11px] text-neutral-400">Канада · Премиум</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="relative group px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_35px_rgba(229,196,168,0.5)] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Записаться онлайн</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-4 rounded-full text-xs font-medium tracking-wider uppercase text-[#F5DFCB] border border-[#E5C4A8]/30 hover:border-[#E5C4A8] hover:bg-white/[0.04] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Рассчитать стоимость</span>
              </button>
            </div>

            {/* Micro social proof note */}
            <div className="mt-8 flex items-center gap-3 text-xs text-neutral-400">
              <div className="flex items-center text-[#E5C4A8]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5C4A8]" />
                ))}
              </div>
              <span className="tabular-nums font-medium text-neutral-200">5.0 рейтинг</span>
              <span className="text-neutral-500">·</span>
              <span>Индивидуальный одноразовый набор и напитки включены</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame with Floating Glass Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#E5C4A8]/30 via-transparent to-[#C89F7D]/20 opacity-70 blur-md" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#14141B] border border-white/[0.1] shadow-2xl">
                {/* Visual Image with Fallback */}
                <div className="relative aspect-[4/5] w-full overflow-hidden group">
                  <img
                    src={heroNailsImg}
                    alt="Идеальный эстетичный маникюр от топ-мастера Вероники"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle luxury gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-black/20 to-transparent opacity-80" />

                  {/* Top Floating Badge: Master Status */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#E5C4A8]" />
                    <span className="text-xs font-medium text-white tracking-wide">
                      Вероника · Топ-мастер
                    </span>
                  </div>

                  {/* Bottom Content within Image - Firm technique cleanly left without overlapping badges */}
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <div className="text-xs uppercase tracking-widest text-[#E5C4A8] font-medium mb-1">
                      Фирменная техника
                    </div>
                    <div className="text-lg font-serif text-white font-medium mb-2">
                      Безупречный блик & Идеальная архитектура
                    </div>
                    <div className="flex items-center gap-3 text-xs text-neutral-300">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E5C4A8]" />
                        1 ч 30 мин
                      </span>
                      <span>·</span>
                      <span className="text-[#F5DFCB] font-medium">Luxio Gel System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
