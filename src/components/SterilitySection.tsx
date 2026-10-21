import React, { useState } from 'react';
import { STERILIZATION_STEPS } from '../data/salonData';
import { ShieldCheck, Waves, Sparkles, Flame, CheckCircle, PackageCheck, AlertCircle } from 'lucide-react';

export const SterilitySection: React.FC = () => {
  const [isSterileView, setIsSterileView] = useState<boolean>(true);

  return (
    <section id="sterility" className="py-24 relative overflow-hidden bg-[#0F0F15] border-y border-white/[0.06]">
      {/* Subtle glow background */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-10 blur-[110px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Безопасность вашего здоровья
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            3-ступенчатая медицинская стерилизация по СанПиН
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Мы строго соблюдаем нормы СанПиН 2.1.3678-20. Инструменты проходят полный госпитальный цикл обработки, а крафт-пакет вскрывается исключительно в вашем присутствии.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STERILIZATION_STEPS.map((step) => {
            return (
              <div
                key={step.number}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#E5C4A8]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif text-[#E5C4A8] font-light">
                      {step.number}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white font-medium mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-[#E5C4A8] font-medium mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E5C4A8] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Стандарт:</span>
                  <span className="text-neutral-200 font-mono">{step.standard}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Craft Pouch & Disposable Kit Demonstration */}
        <div className="rounded-3xl bg-gradient-to-r from-[#14141D] via-[#161622] to-[#14141D] border border-white/[0.1] p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Kraft Pouch Interactive Simulation */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Kraft Pouch Container */}
              <div className="relative w-full max-w-sm rounded-2xl bg-[#C19A6B]/20 border-2 border-[#C19A6B]/40 p-6 shadow-2xl backdrop-blur-md">
                {/* Kraft paper texture effect */}
                <div className="text-left border-b border-[#C19A6B]/30 pb-4 mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#F5DFCB] font-semibold">
                      Медицинский крафт-пакет
                    </div>
                    <div className="text-xs text-neutral-300 font-medium">
                      Стерилизатор воздушный ГП-10
                    </div>
                  </div>
                  <PackageCheck className="w-6 h-6 text-[#E5C4A8]" />
                </div>

                {/* Instruments silhouette inside transparent window or pouch mock */}
                <div className="py-6 px-4 rounded-xl bg-black/40 border border-white/10 mb-5 text-center">
                  <div className="text-xs text-neutral-300 font-medium mb-1">
                    Содержимое: Кусачки + Ножницы + Пушер
                  </div>
                  <div className="text-[11px] text-neutral-400 font-light">
                    Хирургическая нержавеющая сталь марки 40Х13
                  </div>
                </div>

                {/* Chemical Indicator IV Class Test Strip */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/15 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[11px] text-neutral-300 font-medium">
                      Химический термоиндикатор IV класса:
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {isSterileView
                        ? 'Прошел обработку при 180°C (60 мин)'
                        : 'Пакет до закладки в сухожаровой шкаф'}
                    </div>
                  </div>

                  {/* Indicator Box that changes color! */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-colors duration-500 shadow-md ${
                        isSterileView
                          ? 'bg-[#4A2617] border-[#8C4B2D] text-white shadow-[#4A2617]/50'
                          : 'bg-[#F4D090] border-[#D4A35B] text-neutral-800'
                      }`}
                    >
                      {isSterileView ? (
                        <CheckCircle className="w-5 h-5 text-[#E5C4A8]" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-amber-700" />
                      )}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-300">
                      {isSterileView ? 'СТЕРИЛЬНО' : 'НЕ СТЕРИЛЬНО'}
                    </span>
                  </div>
                </div>

                {/* Interactive Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsSterileView(!isSterileView)}
                  className="mt-4 w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-[#F5DFCB] font-medium transition-colors cursor-pointer"
                >
                  {isSterileView
                    ? 'Сравнить: показать цвет ДО стерилизации'
                    : 'Сравнить: показать цвет ПОСЛЕ сухожара'}
                </button>
              </div>
            </div>

            {/* Disposable Set & Peace of Mind Details */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5C4A8] font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                Индивидуальный одноразовый набор
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-4">
                Всё, что соприкасается с кожей — строго индивидуально
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Для каждого клиента готовится запечатанный комплект: абразивная пилочка нужной зернистости, мягкий баф для полировки, апельсиновая палочка из натуральной древесины, безворсовые салфетки и нитриловые перчатки мастера.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-semibold text-white mb-1">
                    Крафт-пакет вскрывается при вас
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Вы лично видите срез пакета и темно-коричневый цвет индикатора до начала процедуры.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-semibold text-white mb-1">
                    Пилочку можно забрать с собой
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Индивидуальные пилочка и баф после сеанса отдаются вам в подарок или утилизируются.
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
