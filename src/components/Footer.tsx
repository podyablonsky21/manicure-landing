import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090D] border-t border-white/[0.08] py-14 pb-24 lg:pb-14 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/[0.06] text-left">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-base font-normal tracking-[0.28em] text-[#F5DFCB]">ПЕРЕМЕНА</span>
              <span className="text-[#E5C4A8]/40 text-xs select-none">·</span>
              <span className="font-sans text-[11px] tracking-[0.32em] text-[#E5C4A8] uppercase font-light">ВЕРОНИКА</span>
            </div>
            <p className="text-neutral-400 text-xs max-w-md font-light leading-relaxed">
              Премиальная эстетика ногтевого сервиса, авторские техники бережного укрепления и строжайшая 3-ступенчатая медицинская стерилизация.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#E5C4A8]/90">
              <ShieldCheck className="w-4 h-4 text-[#E5C4A8]" />
              <span>Соответствие стандартам СанПиН 2.1.3678-20</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-200 font-semibold mb-3">
              Разделы
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#E5C4A8] transition-colors">
                  Прайс-лист и калькулятор
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-[#E5C4A8] transition-colors">
                  Слайдер «До / После»
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#E5C4A8] transition-colors">
                  Онлайн-запись
                </a>
              </li>
              <li>
                <a href="#sterility" className="hover:text-[#E5C4A8] transition-colors">
                  3 этапа стерилизации
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-[#E5C4A8] transition-colors">
                  Локация и контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Working Hours */}
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-200 font-semibold mb-3">
              Контакты
            </div>
            <div className="space-y-2">
              <div>г. Тамбов, ул. Московская 57А</div>
              <div>Бесплатная парковка перед входом</div>
              <div>Ежедневно: 10:00 — 22:00</div>
              <div className="pt-1">
                <a
                  href="tel:+79158850969"
                  className="text-[#E5C4A8] hover:text-white font-medium transition-colors"
                >
                  +7 (915) 885-09-69
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Салон красоты «Перемена». Все права защищены.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Создано с заботой о вашей красоте</span>
            <Heart className="w-3 h-3 text-[#E5C4A8] inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
