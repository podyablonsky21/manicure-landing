import React from 'react';
import { MapPin, Phone, MessageCircle, Send, Coffee, Tv, Wifi, Car, Clock } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  const yandexMapsUrl =
    'https://yandex.ru/maps/13/tambov/?ll=41.455914%2C52.731101&mode=poi&poi%5Bpoint%5D=41.455306%2C52.730884&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D143575952141&z=19.75';
  const yandexWidgetUrl =
    'https://yandex.ru/map-widget/v1/?ll=41.455914%2C52.731101&mode=poi&poi%5Bpoint%5D=41.455306%2C52.730884&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D143575952141&z=19.75';

  return (
    <section id="contacts" className="py-24 relative overflow-hidden bg-[#0F0F15] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Локация & Атмосфера
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            Встретимся в салоне «Перемена»
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Пространство тихой роскоши в Тамбове. Отдохните от повседневной суеты в атмосфере заботы и безупречного сервиса.
          </p>
        </div>

        {/* 2-Column Split: Studio Info & Location Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Location & Contacts Details */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-left">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#E5C4A8] font-semibold mb-2">
                Адрес и время работы
              </div>
              <h3 className="text-2xl font-serif text-white font-medium mb-6">
                Тамбов, ул. Московская 57А
              </h3>

              <div className="space-y-4 text-xs text-neutral-300 font-light mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E5C4A8] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Тамбов, ул. Московская 57А</span> (удобный заезд с улицы Московской, отдельный комфортный вход).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#E5C4A8] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Ежедневно с 10:00 до 22:00</span> (только по предварительной онлайн-записи).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E5C4A8] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="tel:+79158850969"
                      className="text-white font-medium hover:text-[#E5C4A8] transition-colors tabular-nums"
                    >
                      +7 (915) 885-09-69
                    </a>
                    <span className="text-neutral-400"> (прямая связь с Вероникой)</span>
                  </div>
                </div>
              </div>

              {/* Direct Messenger Links */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-3">
                <a
                  href="https://wa.me/79158850969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Чат в WhatsApp</span>
                </a>

                <a
                  href="https://t.me/salon_peremena_nails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#229ED9]" />
                  <span>Канал в Telegram</span>
                </a>
              </div>
            </div>

            {/* Master Credentials */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 border-2 border-[#E5C4A8]/40 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Топ-мастер Вероника"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">Мастер Вероника</div>
                <div className="text-xs text-[#E5C4A8]">Топ-мастер ногтевого сервиса · Салон «Перемена»</div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Yandex Map */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#14141B] border border-white/[0.08] p-3 flex flex-col justify-between shadow-2xl min-h-[420px]">
            {/* Interactive Yandex Map iFrame */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.06]">
              <iframe
                src={yandexWidgetUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                className="w-full h-full rounded-2xl"
                title="Салон Перемена на Яндекс Картах (Тамбов, ул. Московская 57А)"
              />
            </div>

            {/* Quick Map Links */}
            <div className="p-3 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-xs font-medium text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C4A8]" />
                  Тамбов, ул. Московская 57А
                </div>
                <div className="text-[11px] text-neutral-400">Бесплатная парковка перед салоном</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#E5C4A8]/15 hover:bg-[#E5C4A8]/25 text-xs text-[#F5DFCB] font-medium border border-[#E5C4A8]/30 transition-colors whitespace-nowrap"
                >
                  Открыть в Яндекс Картах
                </a>
                <a
                  href="https://2gis.ru/tambov/search/ул.%20Московская%2057А"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs text-neutral-300 font-medium border border-white/10 transition-colors whitespace-nowrap"
                >
                  2ГИС
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Amenities Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <Coffee className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Зерновой кофе & Prosecco</div>
            <div className="text-[11px] text-neutral-400 font-light">Капучино, авторский чай, сиропы и прохладные напитки</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <Tv className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Персональный экран</div>
            <div className="text-[11px] text-neutral-400 font-light">Фильмы, сериалы на Netflix и музыка без рекламы</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <Wifi className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Быстрый Wi-Fi & Зарядки</div>
            <div className="text-[11px] text-neutral-400 font-light">Удобно работать или отвечать по делам во время сеанса</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <Car className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Удобная парковка</div>
            <div className="text-[11px] text-neutral-400 font-light">Свободные парковочные места прямо перед зданием</div>
          </div>
        </div>
      </div>
    </section>
  );
};
