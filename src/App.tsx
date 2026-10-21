/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PriceCalculator } from './components/PriceCalculator';
import { GallerySection } from './components/GallerySection';
import { SterilitySection } from './components/SterilitySection';
import { BookingSection } from './components/BookingSection';
import { ContactsSection } from './components/ContactsSection';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('complex-all-inclusive');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [customDesignRequest, setCustomDesignRequest] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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

  const handleSelectDesignFromGallery = (designTitle: string) => {
    setCustomDesignRequest(designTitle);
    setSelectedServiceId('author-design');
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#E2E2EA] font-sans relative selection:bg-[#E5C4A8]/25 selection:text-white">
      {/* Fixed Header */}
      <Header onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={scrollToBooking}
          onOpenCalculator={scrollToCalculator}
        />

        {/* 2. Before / After Interactive Slider */}
        <BeforeAfterSlider />

        {/* 3. Price List & Interactive Calculator */}
        <PriceCalculator
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectService}
          selectedAddonIds={selectedAddonIds}
          onToggleAddon={handleToggleAddon}
          onProceedToBooking={scrollToBooking}
        />

        {/* 4. Portfolio & Pinterest Gallery */}
        <GallerySection
          onSelectDesignForBooking={handleSelectDesignFromGallery}
        />

        {/* 5. SanPiN Sterility 3-Step Verification & Craft Pouch */}
        <SterilitySection />

        {/* 6. Step-by-Step Online Booking & Schedule */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onSelectService={handleSelectService}
          selectedAddonIds={selectedAddonIds}
          customDesignRequest={customDesignRequest}
        />

        {/* 7. Studio Contacts & Amenities */}
        <ContactsSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Responsive Floating Mobile Bar */}
      <FloatingMobileBar
        onOpenBooking={scrollToBooking}
        priceText="от 3 200 ₽"
      />
    </div>
  );
}
