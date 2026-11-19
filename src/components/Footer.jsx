import React from 'react';
import { Sparkles, Phone, MapPin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

export const Footer = ({ onOpenBooking }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-henna-950 text-stone-300 pt-16 pb-12 border-t border-gold-600/30 relative overflow-hidden">
            <HennaMandala className="w-96 h-96 text-gold-400/5 absolute -bottom-20 -left-20 pointer-events-none" spin />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">

                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-henna-800 border border-gold-400/50 flex items-center justify-center font-serif text-xl font-bold text-gold-300 shadow-inner">
                                Z
                            </div>
                            <span className="font-serif text-2xl font-bold text-white tracking-wide">
                                Zaara <span className="text-gold-400 font-light italic">Henna</span>
                            </span>
                        </div>

                        <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                            Pioneering bespoke, organic luxury bridal mehendi artistry for the modern bride. Preserving ancient heritage with contemporary finesse.
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-stone-900 hover:bg-henna-800 border border-stone-700 hover:border-gold-400 text-gold-300 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-stone-900 hover:bg-henna-800 border border-stone-700 hover:border-gold-400 text-gold-300 flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-stone-900 hover:bg-henna-800 border border-stone-700 hover:border-gold-400 text-gold-300 flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-bold text-white mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
                            <li>
                                <a href="#gallery" className="hover:text-gold-300 transition-colors">
                                    Signature Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#stain-reveal" className="hover:text-gold-300 transition-colors">
                                    48-Hour Stain Reveal
                                </a>
                            </li>
                            <li>
                                <a href="#calculator" className="hover:text-gold-300 transition-colors">
                                    Price Estimator
                                </a>
                            </li>
                            <li>
                                <a href="#organic" className="hover:text-gold-300 transition-colors">
                                    Organic Henna Guarantee
                                </a>
                            </li>
                            <li>
                                <a href="#aftercare" className="hover:text-gold-300 transition-colors">
                                    Bridal Aftercare Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Studio Locations */}
                    <div>
                        <h4 className="font-serif text-lg font-bold text-white mb-4">
                            Studios & Travel
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                                <span>Delhi NCR (Flagship Studio)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                                <span>Mumbai • Bandra West</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                                <span>Udaipur • Destination Hub</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                                <span>Worldwide Destination Travel</span>
                            </li>
                        </ul>
                    </div>

                    {/* Direct Concierge */}
                    <div>
                        <h4 className="font-serif text-lg font-bold text-white mb-4">
                            Bridal Concierge
                        </h4>
                        <div className="space-y-3 text-xs sm:text-sm text-stone-400">
                            <p>For urgent bookings or date locks:</p>
                            <a
                                href="tel:+919876543210"
                                className="font-bold text-gold-300 hover:text-white block text-base"
                            >
                                +91 98765 43210
                            </a>
                            <a
                                href="mailto:contact@zaarahenna.com"
                                className="hover:text-gold-300 block text-xs"
                            >
                                contact@zaarahenna.com
                            </a>
                            <button
                                onClick={onOpenBooking}
                                className="w-full mt-2 py-2.5 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 border border-gold-400/40 text-xs font-semibold transition-colors"
                            >
                                Check Date Availability
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
                    <p>© {new Date().getFullYear()} Zaara Henna Studio. All Rights Reserved. Handcrafted with botanical love.</p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-200 transition-colors"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};