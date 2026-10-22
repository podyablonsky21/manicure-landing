import React, { useState } from 'react';
import { STERILIZATION_STEPS } from '../data/salonData';
import { ShieldCheck, CheckCircle, PackageCheck, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SterilitySection: React.FC = () => {
  const [isSterileView, setIsSterileView] = useState<boolean>(true);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (num: string) => {
    setActiveAccordion(activeAccordion === num ? null : num);
  };

  return (
    <section id="sterility" className="py-12 sm:py-16 relative overflow-hidden bg-[#0F0F15] border-y border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header with expanding line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-[11px] uppercase tracking-widest text-[#F5DFCB] font-medium">
              Безопасность вашего здоровья
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-light tracking-tight mb-2">
            3-ступенчатая стерилизация по СанПиН
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#E5C4A8] to-transparent mb-3"
          />
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Строгое соблюдение норм СанПиН 2.1.3678-20. Крафт-пакет вскрывается исключительно в вашем присутствии.
          </p>
        </motion.div>

        {/* Compact Layout: 3 Step Cards + Inline Kraft-Pouch Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left: 3 Compact Step Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {STERILIZATION_STEPS.map((step, idx) => {
              const isOpen = activeAccordion === step.number;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative rounded-xl backdrop-blur-md bg-neutral-900/60 border border-white/10 hover:border-[#E5C4A8]/50 hover:shadow-[0_0_25px_rgba(229,196,168,0.18)] transition-all p-4 text-left overflow-hidden"
                >
                  {/* Mirror finish top-coat sheen beam on entrance and hover */}
                  <motion.div
                    initial={{ x: '-150%', opacity: 0 }}
                    whileInView={{ x: '180%', opacity: [0, 0.7, 0.7, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 + idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0 -skew-x-25 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none z-20"
                  />
                  <div className="absolute inset-0 -translate-x-[200%] -skew-x-25 group-hover:translate-x-[250%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#E5C4A8]/20 to-transparent pointer-events-none z-20" />

                  <div
                    onClick={() => toggleAccordion(step.number)}
                    className="flex items-center justify-between cursor-pointer select-none relative z-10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#E5C4A8]/15 text-[#E5C4A8] font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-[#E5C4A8]/30">
                        {step.number}
                      </span>
                      <div>
                        <div className="text-sm font-serif text-white font-medium">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-[#E5C4A8]/80 font-light">
                          {step.subtitle} · {step.time}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1 text-neutral-400 hover:text-white"
                      aria-label="Подробнее"
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#E5C4A8]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expandable details with AnimatePresence */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden mt-3 pt-3 border-t border-white/[0.08] text-xs text-neutral-300 font-light leading-relaxed relative z-10"
                      >
                        <p className="mb-2.5">{step.description}</p>
                        <div className="space-y-1">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                              <CheckCircle className="w-3 h-3 text-[#E5C4A8] shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-[10px] text-neutral-500 font-mono">
                          Стандарт: {step.standard}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Compact Interactive Kraft Pouch & Single-use Kit */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group/pouch lg:col-span-5 rounded-2xl backdrop-blur-md bg-neutral-900/60 border border-white/10 hover:border-[#E5C4A8]/60 hover:shadow-[0_0_30px_rgba(229,196,168,0.2)] transition-all p-5 flex flex-col justify-between text-left relative overflow-hidden"
          >
            {/* Mirror finish top-coat sheen beam */}
            <motion.div
              initial={{ x: '-150%', opacity: 0 }}
              whileInView={{ x: '180%', opacity: [0, 0.8, 0.8, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 -skew-x-25 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none z-20"
            />
            <div className="absolute inset-0 -translate-x-[200%] -skew-x-25 group-hover/pouch:translate-x-[250%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#E5C4A8]/20 to-transparent pointer-events-none z-20" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs uppercase tracking-wider text-[#E5C4A8] font-semibold flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-[#E5C4A8]" />
                  Медицинский крафт-пакет
                </div>
                <span className="text-[10px] text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded-full">
                  ГП-10 (180°C)
                </span>
              </div>

              <p className="text-xs text-neutral-300 font-light mb-4 leading-relaxed">
                Инструменты запаиваются в индивидуальный пакет и проходят стерилизацию. Проверьте изменение цвета термоиндикатора:
              </p>

              {/* Indicator interactive strip */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between gap-3 mb-3">
                <div className="text-left">
                  <div className="text-xs text-white font-medium">Термоиндикатор IV класса</div>
                  <div className="text-[10px] text-neutral-400">
                    {isSterileView ? 'Обработан при 180°C' : 'До сухожарового шкафа'}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors duration-300 ${
                      isSterileView
                        ? 'bg-[#4A2617] border-[#8C4B2D] text-[#E5C4A8]'
                        : 'bg-[#F4D090] border-[#D4A35B] text-neutral-800'
                    }`}
                  >
                    {isSterileView ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-200">
                    {isSterileView ? 'СТЕРИЛЬНО' : 'ДО ОБРАБОТКИ'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSterileView(!isSterileView)}
                className="w-full py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[11px] text-[#F5DFCB] border border-white/10 transition-colors cursor-pointer"
              >
                {isSterileView ? 'Показать цвет ДО стерилизации' : 'Показать цвет ПОСЛЕ сухожара'}
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
              <span>Пилочка и баф — одноразовые</span>
              <span className="text-[#E5C4A8]">Вскрытие при вас</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
