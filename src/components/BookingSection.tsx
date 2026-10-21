import React, { useState, useMemo } from 'react';
import { SERVICES, ADDONS, TIME_SLOTS } from '../data/salonData';
import { Calendar as CalendarIcon, Clock, Send, MessageCircle, CheckCircle2, Sparkles, User, Phone, FileText } from 'lucide-react';

interface BookingSectionProps {
  selectedServiceId: string;
  onSelectService: (id: string) => void;
  selectedAddonIds: string[];
  customDesignRequest?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onSelectService,
  selectedAddonIds,
  customDesignRequest
}) => {
  // Generate the next 14 calendar days starting from tomorrow/today
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push({
        fullDate: d.toISOString().split('T')[0],
        dayNum: d.getDate(),
        weekDay: weekDays[d.getDay()],
        monthName: months[d.getMonth()],
        isWeekend: d.getDay() === 0 || d.getDay() === 6,
        isToday: i === 0,
      });
    }
    return dates;
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[1]?.fullDate || availableDates[0]?.fullDate);
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>(customDesignRequest ? `Выбранный дизайн из портфолио: ${customDesignRequest}` : '');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const selectedAddons = ADDONS.filter(a => selectedAddonIds.includes(a.id));

  const finalTotal = selectedService.price + selectedAddons.reduce((sum, a) => sum + a.price, 0);

  // Format Russian phone input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('7') || val.startsWith('8')) {
      val = val.substring(1);
    }
    let formatted = '+7 ';
    if (val.length > 0) formatted += '(' + val.substring(0, 3);
    if (val.length >= 4) formatted += ') ' + val.substring(3, 6);
    if (val.length >= 7) formatted += '-' + val.substring(6, 8);
    if (val.length >= 9) formatted += '-' + val.substring(8, 10);
    setClientPhone(formatted);
  };

  // Pre-formatted text for WhatsApp & Telegram
  const bookingMessage = useMemo(() => {
    const addonsText = selectedAddons.length > 0
      ? `\nДоп. опции: ${selectedAddons.map(a => a.name).join(', ')}`
      : '';
    const notesText = clientNotes ? `\nПожелания: ${clientNotes}` : '';

    return `Здравствуйте, Вероника! Хочу записаться в салон красоты «Перемена»:\n` +
      `💅 Услуга: ${selectedService.name}${addonsText}\n` +
      `📅 Дата: ${selectedDate}\n` +
      `⏰ Время: ${selectedTime}\n` +
      `💰 Примерная сумма: ${finalTotal.toLocaleString('ru-RU')} ₽\n` +
      `👤 Клиент: ${clientName || 'Не указано'}\n` +
      `📞 Телефон: ${clientPhone || 'Не указано'}${notesText}`;
  }, [selectedService, selectedAddons, selectedDate, selectedTime, finalTotal, clientName, clientPhone, clientNotes]);

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(bookingMessage);
    window.open(`https://wa.me/79158850969?text=${encoded}`, '_blank');
  };

  const handleOpenTelegram = () => {
    const encoded = encodeURIComponent(bookingMessage);
    window.open(`https://t.me/veronya535?text=${encoded}`, '_blank');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || clientPhone.length < 10) {
      alert('Пожалуйста, укажите ваше имя и контактный номер телефона для подтверждения записи.');
      return;
    }
    setIsSuccessModalOpen(true);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <CalendarIcon className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Онлайн-расписание
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            Запись к мастеру Веронике
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Выберите желаемую дату, время и комплекс. Заявка мгновенно передается мастеру в личный чат без ожидания звонка оператора.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Date Selector */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#E5C4A8] font-semibold">
                  1. Выберите дату визита
                </span>
                <span className="text-xs text-neutral-400">
                  Выбрано: <strong className="text-white font-medium">{selectedDate}</strong>
                </span>
              </div>

              {/* Horizontal Scrollable Date Carousel */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                {availableDates.map((item) => {
                  const isSelected = selectedDate === item.fullDate;
                  return (
                    <button
                      key={item.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(item.fullDate)}
                      className={`flex flex-col items-center justify-center min-w-[70px] py-3 px-2 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E5C4A8] text-[#0D0D11] shadow-[0_0_20px_rgba(229,196,168,0.4)] scale-105'
                          : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] border border-white/[0.06]'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-medium opacity-80">
                        {item.isToday ? 'Сегодня' : item.weekDay}
                      </span>
                      <span className="text-lg font-serif font-bold tabular-nums">
                        {item.dayNum}
                      </span>
                      <span className="text-[10px] opacity-75">
                        {item.monthName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Time Slot Selector */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#E5C4A8] font-semibold">
                  2. Выберите удобное время
                </span>
                <span className="text-xs text-neutral-400">
                  Свободные слоты мастера
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E5C4A8]/15 border-[#E5C4A8] shadow-[0_0_15px_rgba(229,196,168,0.2)]'
                          : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="text-sm font-semibold text-white tabular-nums flex items-center justify-between">
                        <span>{slot.time}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C4A8]" />}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">
                        {slot.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Client Contact Inputs */}
            <form onSubmit={handleDirectSubmit} className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-left space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#E5C4A8] font-semibold mb-2">
                3. Ваши контактные данные
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 font-light mb-1.5">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Екатерина"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#14141E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5C4A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 font-light mb-1.5">
                    Номер телефона для подтверждения *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={clientPhone}
                      onChange={handlePhoneChange}
                      className="w-full bg-[#14141E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5C4A8] transition-colors tabular-nums"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-300 font-light mb-1.5">
                  Пожелания по дизайну или состоянию ногтей (необязательно)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={2}
                    placeholder="Например: нужен ремонт одного сломанного ногтя, хочу классический френч..."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full bg-[#14141E] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5C4A8] transition-colors resize-none"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Live Order Summary & Messenger Direct Triggers (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161622] to-[#12121A] border border-[#E5C4A8]/30 shadow-2xl text-left">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#E5C4A8] font-semibold">
                  Сводка вашей записи
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E5C4A8]/15 text-[#F5DFCB] border border-[#E5C4A8]/30 font-medium">
                  Оплата после процедуры
                </span>
              </div>

              {/* Service & Inclusions Details */}
              <div className="py-5 space-y-3 border-b border-white/10 text-xs">
                <div className="flex justify-between items-start">
                  <span className="text-white font-medium">{selectedService.name}</span>
                  <span className="text-neutral-200 tabular-nums">
                    {selectedService.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>

                {selectedAddons.map(addon => (
                  <div key={addon.id} className="flex justify-between items-center text-neutral-400">
                    <span>+ {addon.name}</span>
                    <span className="tabular-nums">+{addon.price} ₽</span>
                  </div>
                ))}

                <div className="flex justify-between items-center text-neutral-400 pt-1">
                  <span>Дата и время визита:</span>
                  <span className="text-[#F5DFCB] font-medium tabular-nums">
                    {selectedDate} в {selectedTime}
                  </span>
                </div>

                <div className="flex justify-between items-center text-neutral-400">
                  <span>Мастер:</span>
                  <span className="text-neutral-200">Вероника (Топ-мастер)</span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="py-5 border-b border-white/10 flex justify-between items-baseline">
                <span className="text-sm font-medium text-white">К оплате после сеанса:</span>
                <span className="text-2xl font-serif font-bold text-[#F5DFCB] tabular-nums">
                  {finalTotal.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              {/* Instant Messenger Dispatch Actions */}
              <div className="pt-6 space-y-3">
                <div className="text-[11px] text-neutral-400 mb-2">
                  Отправьте готовую заявку мастеру в один клик:
                </div>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#25D366]/20 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Записаться через WhatsApp</span>
                </button>

                {/* Telegram Button */}
                <button
                  type="button"
                  onClick={handleOpenTelegram}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#229ED9] hover:bg-[#1E8DC2] text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#229ED9]/20 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Записаться через Telegram</span>
                </button>

                {/* Direct On-site confirmation */}
                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="w-full py-3 px-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 text-xs font-medium tracking-wide transition-colors cursor-pointer text-center"
                >
                  Оставить заявку на сайте (перезвоним за 5 мин)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="max-w-md w-full bg-[#151520] border border-[#E5C4A8]/40 rounded-3xl p-8 text-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-[#E5C4A8]/20 text-[#E5C4A8] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif text-white font-medium mb-2">
              Ваша заявка принята!
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">
              Вероника уже получила информацию о вашем визите на <strong className="text-white">{selectedDate} в {selectedTime}</strong>. Мы свяжемся с вами в течение нескольких минут для подтверждения бронирования.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-left mb-6 space-y-1.5">
              <div className="text-neutral-400">Услуга: <span className="text-white font-medium">{selectedService.name}</span></div>
              <div className="text-neutral-400">Итоговая стоимость: <span className="text-[#F5DFCB] font-bold">{finalTotal.toLocaleString('ru-RU')} ₽</span></div>
              <div className="text-neutral-400">Адрес: <span className="text-white">Тамбов, ул. Московская 57А</span></div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="flex-1 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] to-[#F5DFCB] cursor-pointer"
              >
                Отлично, жду встречи
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
