import React from 'react';
import { SERVICES, ADDONS, ServiceItem, AddonItem } from '../data/salonData';
import { Sparkles, Check, Clock, Plus, ArrowRight, Calculator } from 'lucide-react';

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
    <section id="services" className="py-24 relative overflow-hidden bg-[#0D0D11]">
      {/* Subtle ambient gradient aura */}
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-[100px] bg-[#E5C4A8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Прозрачный прайс-лист
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            Премиальные комплексы & Услуги
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            В каждую процедуру уже включены премиальные материалы, одноразовый персональный набор и уходовый массаж с молекулярным маслом. Никаких скрытых доплат.
          </p>
        </div>

        {/* 4 Main Service Cards Grid with Glowing Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className={`relative flex flex-col justify-between p-7 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181822] border-2 border-[#E5C4A8] shadow-[0_0_35px_rgba(229,196,168,0.22)] -translate-y-1'
                    : 'bg-white/[0.02] border border-white/[0.08] hover:border-[#E5C4A8]/40 hover:bg-white/[0.04] hover:-translate-y-0.5'
                }`}
              >
                {/* Popular or Custom Tag */}
                {service.isPopular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#E5C4A8] to-[#F5DFCB] text-[#0D0D11] text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {service.tag}
                  </div>
                )}
                {!service.isPopular && (
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[#E5C4A8]/80 mb-2">
                    {service.tag}
                  </div>
                )}

                <div>
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

                <button
                  type="button"
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#E5C4A8] text-[#0D0D11]'
                      : 'bg-white/[0.05] text-neutral-200 hover:bg-white/[0.1]'
                  }`}
                >
                  {isSelected ? '✓ Выбрано' : 'Выбрать комплекс'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Cost & Addon Configurator Panel */}
        <div id="calculator" className="rounded-3xl bg-gradient-to-b from-[#15151F] to-[#101017] border border-white/[0.09] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5C4A8] font-medium mb-1">
                <Calculator className="w-4 h-4" />
                Интерактивный конфигуратор визита
              </div>
              <h3 className="text-2xl font-serif text-white font-normal">
                Рассчитайте точную стоимость и время вашей процедуры
              </h3>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs text-neutral-400 mb-1">Базовый комплекс:</div>
              <div className="text-sm font-medium text-[#F5DFCB]">
                {selectedService.name} ({selectedService.price.toLocaleString('ru-RU')} ₽)
              </div>
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div className="pt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Дополнительные опции и дизайн (отметьте нужное):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => onToggleAddon(addon.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-[#E5C4A8]/10 border-[#E5C4A8]/60 shadow-[0_0_20px_rgba(229,196,168,0.1)]'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-[#E5C4A8] text-[#0D0D11]'
                          : 'border border-neutral-600 bg-black/40'
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
                  </div>
                );
              })}
            </div>

            {/* Total Calculation Strip & Direct CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-black/40 border border-white/[0.08]">
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

              <button
                onClick={onProceedToBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_30px_rgba(229,196,168,0.45)] transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <span>Выбрать дату и время записи</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
