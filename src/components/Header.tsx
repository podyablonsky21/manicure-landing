import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'До / После', href: '#before-after' },
    { label: 'Стерильность', href: '#sterility' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D11]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-lg md:text-xl font-serif tracking-widest text-white hover:text-[#E5C4A8] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="font-semibold tracking-[0.2em] text-[#F5DFCB] group-hover:text-white transition-colors">
                ПЕРЕМЕНА
              </span>
              <span className="text-[#E5C4A8]/60 text-xs tracking-normal font-sans">
                ·
              </span>
              <span className="text-xs tracking-[0.18em] text-[#E5C4A8] uppercase font-sans font-light">
                ВЕРОНИКА
              </span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-[#E5C4A8] transition-colors whitespace-nowrap shrink-0 tracking-wide text-[13px] uppercase cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="tel:+79158850969"
                className="hidden sm:flex items-center gap-2 text-xs text-neutral-300 hover:text-[#E5C4A8] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C4A8]" />
                <span className="tabular-nums">+7 (915) 885-09-69</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] via-[#F5DFCB] to-[#E5C4A8] hover:shadow-[0_0_24px_rgba(229,196,168,0.4)] transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Записаться онлайн</span>
                </span>
                <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="Открыть меню"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#E5C4A8]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0D0D11]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10">
          <div className="flex flex-col gap-6">
            <div className="text-xs uppercase tracking-widest text-[#E5C4A8]/70 pb-2 border-b border-white/10">
              Навигация по салону
            </div>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-xl font-serif text-white hover:text-[#E5C4A8] transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs text-neutral-400">
              Тамбов, ул. Московская 57А
            </div>
            <a
              href="tel:+79158850969"
              className="text-sm text-[#E5C4A8] font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +7 (915) 885-09-69
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full text-center text-xs font-semibold tracking-wider uppercase text-[#0D0D11] bg-gradient-to-r from-[#E5C4A8] to-[#F5DFCB] shadow-[0_0_20px_rgba(229,196,168,0.3)]"
            >
              Записаться онлайн
            </button>
          </div>
        </div>
      )}
    </>
  );
};
