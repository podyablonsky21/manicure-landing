import React from 'react';
import { MapPin, Phone, MessageCircle, Send, Coffee, Tv, Wifi, Car, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactsSection: React.FC = () => {
  const yandexMapsUrl =
    'https://yandex.ru/maps/13/tambov/?ll=41.455914%2C52.731101&mode=poi&poi%5Bpoint%5D=41.455306%2C52.730884&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D143575952141&z=19.75';
  const yandexWidgetUrl =
    'https://yandex.ru/map-widget/v1/?ll=41.455914%2C52.731101&mode=poi&poi%5Bpoint%5D=41.455306%2C52.730884&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D143575952141&z=19.75';

  return (
    <section id="contacts" className="py-12 sm:py-16 relative overflow-hidden bg-[#0F0F15] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-In & Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Локация & Атмосфера
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-light tracking-tight mb-2 sm:mb-3">
            Встретимся в салоне «Перемена»
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#E5C4A8] to-transparent mb-3"
          />
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Пространство тихой роскоши в Тамбове. Отдохните от повседневной суеты в атмосфере заботы и безупречного сервиса.
          </p>
        </motion.div>

        {/* 2-Column Split: Studio Info & Location Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8 sm:mb-10"
        >
          {/* Left Column: Location & Contacts Details */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_25px_rgba(229,196,168,0.12)] transition-all duration-300 backdrop-blur-md text-left">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#E5C4A8] font-semibold mb-2">
                Адрес и время работы
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-medium mb-5">
                Тамбов, ул. Московская 57А
              </h3>

              <div className="space-y-3.5 text-xs text-neutral-300 font-light mb-6">
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
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/79158850969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.15)] text-xs text-white flex items-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Чат в WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://t.me/salon_peremena_nails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.15)] text-xs text-white flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#229ED9]" />
                  <span>Канал в Telegram</span>
                </motion.a>
              </div>
            </div>

            {/* Master Credentials */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 border-2 border-[#E5C4A8]/50 shrink-0 shadow-[0_0_15px_rgba(229,196,168,0.3)]">
                <img
                  src="/veronika-master.png"
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
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-[#14141B] border border-white/[0.08] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_25px_rgba(229,196,168,0.15)] transition-all duration-300 p-3 flex flex-col justify-between shadow-2xl min-h-[380px]">
            {/* Interactive Yandex Map iFrame */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.06]">
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
            <div className="p-3 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
        </motion.div>

        {/* Studio Amenities Cards with Micro-stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.1)] transition-all text-left"
          >
            <Coffee className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Зерновой кофе & Prosecco</div>
            <div className="text-[11px] text-neutral-400 font-light">Капучино, авторский чай, сиропы и прохладные напитки</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.1)] transition-all text-left"
          >
            <Tv className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Персональный экран</div>
            <div className="text-[11px] text-neutral-400 font-light">Фильмы, сериалы на Netflix и музыка без рекламы</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.1)] transition-all text-left"
          >
            <Wifi className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Быстрый Wi-Fi & Зарядки</div>
            <div className="text-[11px] text-neutral-400 font-light">Удобно работать или отвечать по делам во время сеанса</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C4A8]/40 hover:shadow-[0_0_15px_rgba(229,196,168,0.1)] transition-all text-left"
          >
            <Car className="w-5 h-5 text-[#E5C4A8] mb-2" />
            <div className="text-xs font-semibold text-white mb-0.5">Удобная парковка</div>
            <div className="text-[11px] text-neutral-400 font-light">Свободные парковочные места прямо перед зданием</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
