import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, CheckCircle2, Clock, ShieldCheck, Hand } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import afterImgAsset from '../assets/images/regenerated_image_1792531595604.png';

interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  duration: string;
  retention: string;
  beforeImg: string;
  afterImg: string;
  beforeTag: string;
  afterTag: string;
}

const ACTIVE_CASE: CaseStudy = {
  id: 'case-1',
  title: 'Исправление скрученных ногтей и укрепление',
  problem: 'Тонкие клюющие ногти, скрученные боковые валики, пересушенная бахромчатая кутикула после предыдущего снятия.',
  solution: 'Поднятие свободного края полигелем, восстановление параллелей, выравнивание каучуковой базой Luxio и глубокий комби-маникюр.',
  duration: '1 ч 30 мин',
  retention: 'Носка 5 недель без сколов',
  beforeImg: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=75',
  afterImg: afterImgAsset,
  beforeTag: 'ДО: Истончение и деформация',
  afterTag: 'ПОСЛЕ: Архитектурный миндаль Luxio'
};

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const activeCase = ACTIVE_CASE;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="pt-8 pb-12 sm:pt-12 sm:pb-16 relative overflow-hidden bg-[#0D0D11] scroll-mt-20"
    >
      {/* Subtle background glow accents */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-[120px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Motion Fade-In & Expanding Golden Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Наглядный результат
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-light tracking-tight mb-3">
            Преображение сложных случаев «До и После»
          </h2>

          {/* Animated decorative center rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#E5C4A8] to-transparent mb-3"
          />

          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Перемещайте ползунок влево и вправо, чтобы оценить ювелирную чистоту обработки кутикулы и восстановление правильной анатомической архитектуры.
          </p>
        </motion.div>

        {/* Interactive Comparison Stage with 3D-like entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto"
        >
          {/* Slider Container with subtle golden border glow */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/[0.12] hover:border-[#E5C4A8]/70 hover:shadow-[0_0_40px_rgba(229,196,168,0.25)] transition-all duration-300 shadow-2xl bg-[#14141B]"
            >
              {/* "AFTER" Image (Full background) */}
              <img
                src={activeCase.afterImg}
                alt="Результат после маникюра"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* "BEFORE" Image (Clipped on top) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImg}
                  alt="Исходное состояние до маникюра"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%',
                    height: '100%',
                    filter: 'grayscale(25%) contrast(1.05)'
                  }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              </div>

              {/* Floating Label: BEFORE (Left) */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-neutral-300 border border-white/10 shadow-lg">
                  {activeCase.beforeTag}
                </span>
              </div>

              {/* Floating Label: AFTER (Right) */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-[#0D0D11]/90 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-[#F5DFCB] border border-[#E5C4A8]/50 shadow-lg shadow-[#E5C4A8]/15">
                  {activeCase.afterTag}
                </span>
              </div>

              {/* Interactive Divider Line with Central Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none transition-transform"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Hairline glow vertical beam */}
                <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#E5C4A8] to-transparent shadow-[0_0_12px_#E5C4A8]" />

                {/* Central circular draggable button with invite bounce when scrolled into view */}
                <motion.div
                  animate={
                    isInView && !isDragging
                      ? {
                          scale: [1, 1.12, 1],
                          boxShadow: [
                            '0 0 20px rgba(229,196,168,0.4)',
                            '0 0 32px rgba(229,196,168,0.7)',
                            '0 0 20px rgba(229,196,168,0.4)',
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1px)] w-11 h-11 rounded-full bg-[#0D0D11] border-2 border-[#E5C4A8] flex items-center justify-center text-[#E5C4A8] hover:scale-110 active:scale-95 transition-transform pointer-events-auto cursor-ew-resize"
                >
                  <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
                </motion.div>
              </div>

              {/* Hint badge on bottom center */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-85">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-neutral-200 tracking-wider uppercase font-medium flex items-center gap-1.5 border border-white/10">
                  <Hand className="w-3 h-3 text-[#E5C4A8]" />
                  <span>Потяните ползунок в стороны</span>
                </span>
              </div>
            </div>
          </div>

          {/* Details & Case Breakdown Card with Liquid Glass & Luxury Sheen */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <motion.div
              whileHover={{ y: -2 }}
              className="group/case p-6 rounded-2xl backdrop-blur-md bg-neutral-900/60 border border-white/10 hover:border-[#E5C4A8]/60 hover:shadow-[0_0_30px_rgba(229,196,168,0.2)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Mirror finish sheen beam on entrance and hover */}
              <motion.div
                initial={{ x: '-150%', opacity: 0 }}
                whileInView={{ x: '180%', opacity: [0, 0.75, 0.75, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 -skew-x-25 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none z-20"
              />
              <div className="absolute inset-0 -translate-x-[200%] -skew-x-25 group-hover/case:translate-x-[250%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#E5C4A8]/20 to-transparent pointer-events-none z-20" />

              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover/case:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E5C4A8]/10 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#E5C4A8] mb-2">
                  Анализ случая
                </div>
                <h3 className="text-xl font-serif text-white font-medium mb-3">
                  {activeCase.title}
                </h3>

                <div className="space-y-4 text-xs text-neutral-300 font-light leading-relaxed">
                  <div>
                    <div className="text-neutral-400 font-medium uppercase tracking-wider text-[10px] mb-1">
                      Исходная проблема:
                    </div>
                    <p>{activeCase.problem}</p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08]">
                    <div className="text-[#E5C4A8] font-medium uppercase tracking-wider text-[10px] mb-1">
                      Выполненная работа:
                    </div>
                    <p>{activeCase.solution}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Clock className="w-3.5 h-3.5 text-[#E5C4A8]" />
                    <span>{activeCase.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#F5DFCB] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C4A8]" />
                    <span>{activeCase.retention}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="p-4 rounded-xl backdrop-blur-md bg-neutral-900/40 border border-[#E5C4A8]/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E5C4A8] shrink-0" />
              <div className="text-[12px] text-neutral-300">
                Гарантируем восстановление архитектуры без дискомфорта и жжения в лампе.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
