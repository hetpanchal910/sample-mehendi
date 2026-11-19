import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StainReveal } from './components/StainReveal';
import { PriceCalculator } from './components/PriceCalculator';
import { DesignGallery } from './components/DesignGallery';
import { WhyOrganic } from './components/WhyOrganic';
import { AftercareGuide } from './components/AftercareGuide';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Phone, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (customData = null) => {
    setBookingInitialData(customData);
    setBookingModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-warmcream-50 text-stone-800 relative selection:bg-henna-700 selection:text-gold-200">

      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToGallery={() => scrollToSection('gallery')}
          onScrollToCalc={() => scrollToSection('calculator')}
        />

        {/* 48-Hour Stain Reveal Comparison Slider */}
        <StainReveal />

        {/* Dynamic Package & Price Estimator */}
        <PriceCalculator onBookWithPlan={(plan) => handleOpenBooking(plan)} />

        {/* Signature Bridal Gallery */}
        <DesignGallery onSelectDesign={(design) => handleOpenBooking({ selectedDesign: design })} />

        {/* Why 100% Organic Henna Promise */}
        <WhyOrganic />

        {/* Golden Aftercare Ritual */}
        <AftercareGuide />

        {/* Bride Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      {/* Floating Action Button for WhatsApp (Desktop & Tablet) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210?text=Hi%20Zaara%20Henna,%20I%20would%20like%20to%20inquire%20about%20bridal%20mehndi%20booking"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95"
          title="Chat with Bridal Concierge on WhatsApp"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
        </a>
      </aside>

      {/* Sticky Bottom Action Bar for Mobile Devices */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-warmcream-50/95 backdrop-blur-md border-t border-stone-200/80 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href="https://wa.me/919876543210?text=Hi%20Zaara%20Henna,%20I%20would%20like%20to%20inquire%20about%20bridal%20mehndi"
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 text-stone-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 bg-white"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-henna-900 to-henna-800 text-gold-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-300" />
          <span>Book Date</span>
        </button>
      </nav>

    </div>
  );
}