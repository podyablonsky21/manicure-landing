import React from 'react';
import { SERVICES, ADDONS } from '../data/salonData';
import { Sparkles, Check, Clock, ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

interface PriceCalculatorProps {
  selectedServiceId: string;
  onSelectService: (id: string) => void;
  selectedAddonIds: string[];
  onToggleAddon: (id: string) => void;
  onProceedToBooking: () => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  selectedServiceId,
  onSelectService,
  selectedAddonIds,
  onToggleAddon,
  onProceedToBooking
}) => {
  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const addonsTotal = ADDONS.filter(a => selectedAddonIds.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );

  const totalPrice = selectedService.price + addonsTotal;

  return (
    <section id="services" className="pt-10 pb-6 sm:pt-14 sm:pb-8 relative overflow-hidden bg-[#0D0D11] scroll-mt-20">
      {/* Subtle ambient gradient aura */}
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-[100px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-in & Decorative Rule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Прозрачный прайс-лист
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-light tracking-tight mb-2 sm:mb-3">
            Премиальные комплексы & Услуги
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#E5C4A8] to-transparent mb-3"
          />
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            В каждую процедуру уже включены премиальные материалы, одноразовый персональный набор и уходовый массаж с молекулярным маслом. Никаких скрытых доплат.
          </p>
        </motion.div>

        {/* 4 Main Service Cards Grid with Stagger & Spotlight Hover Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {SERVICES.map((service, index) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08, // 80ms micro-delay stagger
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => onSelectService(service.id)}
                className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? 'bg-neutral-900/80 border-2 border-[#E5C4A8] shadow-[0_0_35px_rgba(229,196,168,0.28)]'
                    : 'bg-neutral-900/60 border border-white/10 hover:border-[#E5C4A8]/60 hover:shadow-[0_0_30px_rgba(229,196,168,0.22)]'
                }`}
              >
                {/* Mirror finish top-coat sheen beam on entrance and hover */}
                <motion.div
                  initial={{ x: '-150%', opacity: 0 }}
                  whileInView={{ x: '180%', opacity: [0, 0.9, 0.9, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 -skew-x-25 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent pointer-events-none z-20"
                />
                <div className="absolute inset-0 -translate-x-[200%] -skew-x-25 group-hover:translate-x-[250%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#E5C4A8]/25 to-transparent pointer-events-none z-20" />

                {/* Subtle golden spotlight glow on hover */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E5C4A8]/15 via-transparent to-transparent ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                />

                {/* Popular or Custom Tag */}
                {service.isPopular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#E5C4A8] to-[#F5DFCB] text-[#0D0D11] text-[10px] font-bold uppercase tracking-wider shadow-md z-10">
                    {service.tag}
                  </div>
                )}
                {!service.isPopular && (
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[#E5C4A8]/80 mb-2 relative z-10">
                    {service.tag}
                  </div>
                )}

                <div className="relative z-10">
                  <h3 className="text-xl font-serif text-white font-medium mb-2 mt-1">
                    {service.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-serif text-[#F5DFCB] font-semibold tabular-nums">
                      {service.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#E5C4A8]" />
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#E5C4A8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#E5C4A8] text-[#0D0D11] shadow-[0_0_15px_rgba(229,196,168,0.3)]'
                        : 'bg-white/[0.05] text-neutral-200 group-hover:bg-[#E5C4A8]/20 group-hover:text-[#F5DFCB]'
                    }`}
                  >
                    {isSelected ? '✓ Выбрано' : 'Выбрать комплекс'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Cost & Addon Configurator Panel - Liquid Glass & Luxury Sheen */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="group/calc rounded-3xl backdrop-blur-md bg-neutral-900/60 border border-white/10 hover:border-[#E5C4A8]/50 hover:shadow-[0_0_35px_rgba(229,196,168,0.18)] transition-all p-6 sm:p-10 shadow-2xl scroll-mt-24 relative overflow-hidden"
        >
          {/* Subtle perimeter light line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5C4A8]/40 to-transparent" />

          {/* Mirror sheen sweep for calculator panel */}
          <motion.div
            initial={{ x: '-150%', opacity: 0 }}
            whileInView={{ x: '180%', opacity: [0, 0.6, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 -skew-x-25 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none z-20"
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08] relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5C4A8] font-medium mb-1">
                <Calculator className="w-4 h-4 text-[#E5C4A8]" />
                Интерактивный конфигуратор визита
              </div>
              <h3 className="text-2xl font-serif text-white font-normal">
                Рассчитайте точную стоимость и время вашей процедуры
              </h3>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs text-neutral-400 mb-1">Выбранный комплекс:</div>
              <div className="text-sm font-medium text-[#F5DFCB]">
                {selectedService.name} ({selectedService.price.toLocaleString('ru-RU')} ₽)
              </div>
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div className="pt-6 relative z-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Дополнительные опции и дизайн (отметьте нужное):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <motion.div
                    key={addon.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onToggleAddon(addon.id)}
                    className={`group/addon p-4 rounded-xl border backdrop-blur-md transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-[#E5C4A8]/15 border-[#E5C4A8]/80 shadow-[0_0_20px_rgba(229,196,168,0.2)]'
                        : 'bg-neutral-900/40 border-white/10 hover:border-[#E5C4A8]/50 hover:shadow-[0_0_15px_rgba(229,196,168,0.12)] hover:bg-neutral-900/70'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-[#E5C4A8] text-[#0D0D11]'
                          : 'border border-neutral-600 bg-black/40 group-hover/addon:border-[#E5C4A8]/50'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-white">{addon.name}</span>
                        <span className="text-xs font-semibold text-[#E5C4A8] whitespace-nowrap tabular-nums">
                          +{addon.price} ₽
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                        {addon.description}
                      </p>
                      <div className="text-[10px] text-neutral-500 mt-1 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {addon.duration}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total Calculation Strip & Direct CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10">
              <div className="text-left w-full sm:w-auto">
                <div className="text-xs text-neutral-400 mb-1">
                  Итоговая стоимость процедуры ({selectedAddonIds.length ? `с ${selectedAddonIds.length} доп. опциями` : 'базовая'}):
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums tracking-tight">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onProceedToBooking}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_30px_rgba(229,196,168,0.45)] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <span>Выбрать дату и время записи</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Funnel connector line down to booking */}
        <div className="flex justify-center mt-6">
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#E5C4A8]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
