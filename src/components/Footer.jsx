import React from 'react';
import { Sparkles, Phone, MapPin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

export const Footer = ({ onOpenBooking }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-16 pb-12 overflow-hidden border-t bg-henna-950 text-stone-300 border-gold-600/30">
            <HennaMandala className="absolute pointer-events-none w-96 h-96 text-gold-400/5 -bottom-20 -left-20" spin />

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 pb-12 border-b md:grid-cols-2 lg:grid-cols-5 border-stone-800">

                    {/* Brand Col */}
                    <div className="space-y-4 lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 font-serif text-xl font-bold border rounded-full shadow-inner bg-henna-800 border-gold-400/50 text-gold-300">
                                Z
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-wide text-white">
                                Zaara <span className="italic font-light text-gold-400">Henna</span>
                            </span>
                        </div>

                        <p className="max-w-sm text-sm leading-relaxed text-stone-400">
                            Pioneering bespoke, organic luxury bridal mehendi artistry for the modern bride. Preserving ancient heritage with contemporary finesse.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center transition-colors border rounded-full w-9 h-9 bg-stone-900 hover:bg-henna-800 border-stone-700 hover:border-gold-400 text-gold-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center transition-colors border rounded-full w-9 h-9 bg-stone-900 hover:bg-henna-800 border-stone-700 hover:border-gold-400 text-gold-300"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a
                                href="https://wa.me/918780404879"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center transition-colors border rounded-full w-9 h-9 bg-stone-900 hover:bg-henna-800 border-stone-700 hover:border-gold-400 text-gold-300"
                                aria-label="WhatsApp"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-serif text-lg font-bold text-white">
                            Explore
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
                            <li>
                                <a href="#gallery" className="transition-colors hover:text-gold-300">
                                    Signature Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#stain-reveal" className="transition-colors hover:text-gold-300">
                                    48-Hour Stain Reveal
                                </a>
                            </li>
                            <li>
                                <a href="#calculator" className="transition-colors hover:text-gold-300">
                                    Price Estimator
                                </a>
                            </li>
                            <li>
                                <a href="#organic" className="transition-colors hover:text-gold-300">
                                    Organic Henna Guarantee
                                </a>
                            </li>
                            <li>
                                <a href="#aftercare" className="transition-colors hover:text-gold-300">
                                    Bridal Aftercare Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Studio Locations */}
                    <div>
                        <h4 className="mb-4 font-serif text-lg font-bold text-white">
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
                        <h4 className="mb-4 font-serif text-lg font-bold text-white">
                            Bridal Concierge
                        </h4>
                        <div className="space-y-3 text-xs sm:text-sm text-stone-400">
                            <p>For urgent bookings or date locks:</p>
                            <a
                                href="tel:+919876543210"
                                className="block text-base font-bold text-gold-300 hover:text-white"
                            >
                                +91 98765 43210
                            </a>
                            <a
                                href="mailto:contact@zaarahenna.com"
                                className="block text-xs hover:text-gold-300"
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
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row text-stone-500">
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