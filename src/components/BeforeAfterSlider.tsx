import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
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
    <section id="before-after" className="py-24 relative overflow-hidden bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Наглядный результат
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            Преображение сложных случаев «До и После»
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Перемещайте ползунок влево и вправо, чтобы оценить ювелирную чистоту обработки кутикулы и восстановление правильной анатомической архитектуры.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/[0.1] shadow-2xl bg-[#14141B]"
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
                <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-neutral-300 border border-white/10 shadow-lg">
                  {activeCase.beforeTag}
                </span>
              </div>

              {/* Floating Label: AFTER (Right) */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-[#0D0D11]/85 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-[#F5DFCB] border border-[#E5C4A8]/40 shadow-lg shadow-[#E5C4A8]/10">
                  {activeCase.afterTag}
                </span>
              </div>

              {/* Interactive Divider Line with Central Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none transition-transform"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Hairline glow vertical beam */}
                <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#E5C4A8] to-transparent shadow-[0_0_10px_#E5C4A8]" />

                {/* Central circular draggable button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1px)] w-10 h-10 rounded-full bg-[#0D0D11] border-2 border-[#E5C4A8] shadow-[0_0_20px_rgba(229,196,168,0.5)] flex items-center justify-center text-[#E5C4A8] hover:scale-110 active:scale-95 transition-transform pointer-events-auto cursor-ew-resize">
                  <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Hint badge on bottom center */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-80 sm:opacity-90">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-neutral-300 tracking-wider uppercase font-medium">
                  ← Тяните в стороны →
                </span>
              </div>
            </div>
          </div>

          {/* Details & Case Breakdown Card */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#E5C4A8] mb-2">
                Анализ клинического случая
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

                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-[#E5C4A8] font-medium uppercase tracking-wider text-[10px] mb-1">
                    Выполненная работа:
                  </div>
                  <p>{activeCase.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
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

            <div className="p-4 rounded-xl bg-[#E5C4A8]/[0.04] border border-[#E5C4A8]/20 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E5C4A8] shrink-0" />
              <div className="text-[12px] text-neutral-300">
                Гарантируем восстановление архитектуры без дискомфорта и жжения в лампе.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
