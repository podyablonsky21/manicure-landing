/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PriceCalculator } from './components/PriceCalculator';
import { BookingSection } from './components/BookingSection';
import { SterilitySection } from './components/SterilitySection';
import { ContactsSection } from './components/ContactsSection';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';
import { ScrollExperience } from './components/ScrollExperience';
import { SERVICES, ADDONS } from './data/salonData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('complex-all-inclusive');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator') || document.getElementById('services');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleToggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Compute live price for floating bar
  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const activeAddonsTotal = ADDONS.filter(a => selectedAddonIds.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );
  const currentTotal = activeService.price + activeAddonsTotal;

  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#E2E2EA] font-sans relative selection:bg-[#E5C4A8]/25 selection:text-white">
      {/* Dynamic Scroll Experience: Progress Bar, Parallax Light Fields & Cursor Spotlight */}
      <ScrollExperience />

      {/* Fixed Header */}
      <Header onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={scrollToBooking}
          onOpenCalculator={scrollToCalculator}
        />

        {/* 2. Before / After Interactive Slider immediately after Hero */}
        <BeforeAfterSlider />

        {/* 3. Price List & Interactive Calculator flush with Booking */}
        <PriceCalculator
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectService}
          selectedAddonIds={selectedAddonIds}
          onToggleAddon={handleToggleAddon}
          onProceedToBooking={scrollToBooking}
        />

        {/* 4. Compact Step-by-Step Online Booking & Schedule */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectService}
          selectedAddonIds={selectedAddonIds}
        />

        {/* 5. SanPiN Sterility 3-Step Verification & Craft Pouch */}
        <SterilitySection />

        {/* 6. Studio Contacts & Amenities */}
        <ContactsSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Responsive Floating Mobile Bar (appears after hero scroll) */}
      <FloatingMobileBar
        onOpenBooking={scrollToBooking}
        priceText={`${currentTotal.toLocaleString('ru-RU')} ₽`}
      />
    </div>
  );
}
