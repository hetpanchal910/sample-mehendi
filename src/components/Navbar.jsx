import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, Calendar } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

export const Navbar = ({ onOpenBooking }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Designs & Gallery', href: '#gallery' },
        { name: 'Stain Magic', href: '#stain-reveal' },
        { name: 'Price Estimator', href: '#calculator' },
        { name: 'Organic Promise', href: '#organic' },
        { name: 'Bridal Reviews', href: '#testimonials' },
        { name: 'Aftercare', href: '#aftercare' },
    ];

    const handleNavClick = (href) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="bg-gradient-to-r from-henna-950 via-henna-900 to-henna-950 text-gold-200 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-gold-600/30 flex items-center justify-center gap-2 relative z-50">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                <span className="truncate">
                    ✨ <strong>Bridal Season 2026-2027 Open</strong> — Book Early to Secure Your Wedding Dates & Get 15% Off Sangeet Packages!
                </span>
                <button
                    onClick={onOpenBooking}
                    className="hidden md:inline-flex items-center text-xs text-gold-300 hover:text-white underline ml-2 font-semibold transition-colors"
                >
                    Check Dates &rarr;
                </button>
            </div>

            {/* Main Sticky Navbar */}
            <header
                className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
                        ? 'bg-warmcream-50/90 backdrop-blur-md shadow-md py-3 border-b border-stone-200/60'
                        : 'bg-warmcream-50/70 backdrop-blur-sm py-4 md:py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-henna-700 to-henna-900 flex items-center justify-center shadow-inner overflow-hidden border border-gold-400/50 group-hover:scale-105 transition-transform">
                            <HennaMandala className="w-14 h-14 text-gold-300/40 absolute -top-1 -left-1" spin />
                            <span className="font-serif text-lg sm:text-xl font-bold text-gold-300 relative z-10 tracking-wider">
                                Z
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-henna-950 leading-tight">
                                Zaara <span className="text-gold-600 font-light italic">Henna</span>
                            </span>
                            <span className="text-[10px] tracking-[0.25em] text-henna-700/80 uppercase font-medium">
                                Luxury Bridal Artistry
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-henna-800 hover:bg-henna-100/50 rounded-lg transition-all"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Right Action Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        <a
                            href="tel:+919876543210"
                            className="p-2.5 text-henna-800 hover:text-henna-950 hover:bg-henna-100/60 rounded-full transition-colors relative"
                            title="Quick Consultation"
                        >
                            <Phone className="w-4 h-4" />
                        </a>

                        <button
                            onClick={onOpenBooking}
                            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-henna-800 via-henna-700 to-henna-800 text-gold-100 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gold-300" />
                                Reserve Bridal Date
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={onOpenBooking}
                            className="sm:hidden px-3 py-1.5 rounded-full bg-henna-800 text-gold-200 text-xs font-medium"
                        >
                            Book
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-henna-900 hover:bg-henna-100/60 focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Navigation */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer content */}
                    <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-warmcream-50 shadow-2xl p-6 flex flex-col justify-between border-l border-gold-300/40 z-10 animate-in slide-in-from-right duration-300">
                        <div>
                            <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-henna-800 text-gold-300 flex items-center justify-center font-serif font-bold text-sm">
                                        Z
                                    </div>
                                    <span className="font-serif font-bold text-lg text-henna-950">
                                        Zaara Henna
                                    </span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-6 flex flex-col space-y-3">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => handleNavClick(link.href)}
                                        className="text-left px-3 py-2.5 rounded-lg text-stone-700 hover:text-henna-900 hover:bg-henna-100/60 font-medium transition-colors text-base"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-stone-200 space-y-3">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onOpenBooking();
                                }}
                                className="w-full py-3 rounded-xl bg-henna-800 text-gold-100 font-semibold text-center flex items-center justify-center gap-2 shadow-md hover:bg-henna-900 transition-colors"
                            >
                                <Calendar className="w-4 h-4 text-gold-300" />
                                Book Your Mehendi Date
                            </button>
                            <a
                                href="https://wa.me/919876543210?text=Hi%20Zaara%20Henna,%20I%20would%20like%20to%20inquire%20about%20bridal%20mehndi%20booking"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-2.5 rounded-xl border border-henna-700/30 text-henna-900 font-medium text-sm text-center block hover:bg-henna-50 transition-colors"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};