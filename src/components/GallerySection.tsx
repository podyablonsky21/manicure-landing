import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { Sparkles, X, Clock, Palette, ArrowRight, Eye } from 'lucide-react';

interface GallerySectionProps {
  onSelectDesignForBooking: (title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDesignForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Все работы' },
    { id: 'nude', label: 'Эстетичный Нюд' },
    { id: 'french', label: 'Идеальный Френч' },
    { id: 'art', label: 'Трендовый Арт' },
    { id: 'pedicure', label: 'Smart-Педикюр' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C4A8]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C4A8]" />
            <span className="text-xs uppercase tracking-widest text-[#F5DFCB] font-medium">
              Портфолио мастера
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight mb-4">
            Эстетика живых работ
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Каждая работа — это выверенная геометрия, идеальный блик без изломов и индивидуальный подбор оттенка под подтон вашей кожи.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E5C4A8] text-[#0D0D11] shadow-lg shadow-[#E5C4A8]/20 font-semibold'
                    : 'bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-style Masonry Columns Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => {
            // Alternating aspect ratio to generate organic Pinterest masonry feel
            const isTall = index % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#14141B] border border-white/[0.08] hover:border-[#E5C4A8]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#E5C4A8]/10"
              >
                <div className={`relative w-full ${isTall ? 'aspect-[3/4]' : 'aspect-square'} overflow-hidden`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Scrim Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top quick action hover badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-[#E5C4A8] border border-white/10 flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="text-sm font-serif font-medium text-white mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-[#E5C4A8] font-light">
                      <Palette className="w-3 h-3" />
                      <span className="truncate">{item.shade}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal Zoom */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#14141B] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white border border-white/10 cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Photo Frame */}
              <div className="md:w-3/5 relative aspect-square sm:aspect-[4/3] md:aspect-auto overflow-hidden bg-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#E5C4A8] font-semibold mb-2">
                    Детали работы Вероники
                  </div>
                  <h3 className="text-2xl font-serif text-white font-medium mb-4">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {selectedPhoto.description}
                  </p>

                  <div className="space-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Оттенок покрытия:</span>
                      <span className="text-[#F5DFCB] font-medium text-right max-w-[60%] truncate">
                        {selectedPhoto.shade}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Время выполнения:</span>
                      <span className="text-neutral-200 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E5C4A8]" />
                        {selectedPhoto.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Стойкость:</span>
                      <span className="text-emerald-400 font-medium">от 4 недель</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => {
                      const title = selectedPhoto.title;
                      setSelectedPhoto(null);
                      onSelectDesignForBooking(title);
                    }}
                    className="w-full py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_25px_rgba(229,196,168,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Хочу такой же маникюр</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
