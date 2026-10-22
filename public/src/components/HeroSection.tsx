import React, { useRef } from 'react';
import { ShieldCheck, Award, Sparkles, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import veronikaPhoto from '../assets/images/veronika-master.png';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenCalculator,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-driven parallax translations
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const scrollToBeforeAfter = () => {
    const el = document.getElementById('before-after');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 pb-10 lg:pt-28 lg:pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #E5C4A8 0%, #C89F7D 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 right-10 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10 blur-[80px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Offer, Copy, Badges & CTAs */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#E5C4A8]/25 backdrop-blur-md mb-4 sm:mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5DFCB]">
                Салон красоты «Перемена» · Тамбов
              </span>
            </div>

            {/* Main Title with subtle animated shimmer */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif font-light text-white leading-[1.12] tracking-tight mb-4 sm:mb-5 text-balance">
              Безупречный эстетичный маникюр с{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F5DFCB] via-[#E5C4A8] to-[#C89F7D]">
                ноской от 4 недель
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6 max-w-xl">
              Ювелирная архитектура ногтей, безопасная аппаратная техника без пропилов и безукоризненная медицинская стерильность. Почувствуйте разницу в деталях и идеальном отражении блика.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-xl mb-7">
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/50 hover:shadow-[0_0_18px_rgba(229,196,168,0.18)] transition-all backdrop-blur-sm"
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">100% стерильность</div>
                  <div className="text-[10px] text-neutral-400">СанПиН 2.1.3678-20</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/50 hover:shadow-[0_0_18px_rgba(229,196,168,0.18)] transition-all backdrop-blur-sm"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">Гарантия 7 дней</div>
                  <div className="text-[10px] text-neutral-400">На любое покрытие</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/50 hover:shadow-[0_0_18px_rgba(229,196,168,0.18)] transition-all backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5C4A8] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white tracking-wide">Luxio & Smart</div>
                  <div className="text-[10px] text-neutral-400">Премиум-материалы</div>
                </div>
              </motion.div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="relative group px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_30px_rgba(229,196,168,0.5)] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Записаться онлайн</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenCalculator}
                className="px-6 py-3.5 rounded-full text-xs font-medium tracking-wider uppercase text-[#F5DFCB] border border-[#E5C4A8]/30 hover:border-[#E5C4A8] hover:shadow-[0_0_20px_rgba(229,196,168,0.2)] hover:bg-white/[0.04] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Рассчитать стоимость</span>
              </motion.button>
            </div>

            {/* Micro social proof note */}
            <div className="mt-5 flex items-center flex-wrap gap-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-0.5 text-[#E5C4A8]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5C4A8]" />
                ))}
                {/* 5th star with 85% fill for authentic 4.9 appearance */}
                <div className="relative w-3.5 h-3.5">
                  <Star className="w-3.5 h-3.5 text-[#E5C4A8]/30 fill-none" />
                  <div className="absolute inset-0 overflow-hidden w-[85%]">
                    <Star className="w-3.5 h-3.5 fill-[#E5C4A8] text-[#E5C4A8]" />
                  </div>
                </div>
              </div>
              <span className="tabular-nums font-medium text-neutral-200">
                <strong className="text-white font-semibold">4.9</strong> рейтинг
              </span>
              <span className="text-neutral-500">·</span>
              <span>140+ оценок · Индивидуальный крафт-набор и кофе включены</span>
            </div>
          </motion.div>

          {/* Right Column: Master Veronika Portrait Frame with Parallax Shift */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative glowing ring with soft breathing pulse */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#E5C4A8]/30 via-transparent to-[#C89F7D]/25 opacity-80 blur-lg animate-pulse" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#14141B] border border-white/[0.12] hover:border-[#E5C4A8]/60 hover:shadow-[0_0_40px_rgba(229,196,168,0.3)] transition-all duration-500 shadow-2xl">
                {/* Visual Image with Fallback */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden group">
                  <img
                    src={veronikaPhoto}
                    alt="Вероника — топ-мастер ногтевой эстетики"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle luxury gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-[#0D0D11]/35 to-transparent opacity-90" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#E5C4A8] animate-ping" />
                    <span className="text-xs font-medium text-white tracking-wide">
                      Вероника · Top Artist
                    </span>
                  </div>

                  {/* Master Caption Plaque */}
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <div className="p-4 rounded-2xl bg-[#0D0D11]/85 backdrop-blur-md border border-[#E5C4A8]/30 shadow-xl group-hover:border-[#E5C4A8]/60 transition-colors">
                      <div className="text-base sm:text-lg font-serif text-white font-medium mb-0.5">
                        Вероника — топ-мастер ногтевой эстетики
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#E5C4A8] font-light">
                        <span>Опыт 6+ лет</span>
                        <span>·</span>
                        <span className="text-neutral-300">Сертификация Luxio & Smart</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down prompt cue with subtle bounce */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="mt-10 sm:mt-12 flex flex-col items-center justify-center cursor-pointer select-none"
          onClick={scrollToBeforeAfter}
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E5C4A8]/70 font-light mb-1 hover:text-[#E5C4A8] transition-colors">
            Листайте вниз к результатам
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#E5C4A8]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
