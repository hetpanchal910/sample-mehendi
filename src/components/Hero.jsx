import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star, Award } from 'lucide-react';
import { HennaMandala, HennaPaisley, HennaCorner } from './HennaOrnaments';

export const Hero = ({ onOpenBooking, onScrollToGallery, onScrollToCalc }) => {
    return (
        <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
            {/* Decorative Floating Henna Mandalas in Background */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 lg:-left-20 lg:translate-x-0 pointer-events-none opacity-20 lg:opacity-25 z-0">
                <HennaMandala className="w-96 h-96 sm:w-[500px] sm:h-[500px] text-henna-700" spin />
            </div>
            <div className="absolute -bottom-10 right-0 lg:-right-20 pointer-events-none opacity-15 lg:opacity-20 z-0">
                <HennaMandala className="w-80 h-80 sm:w-[450px] sm:h-[450px] text-gold-600 animate-spin-reverse-slow" />
            </div>
            <div className="hidden lg:block absolute top-1/4 right-1/4 pointer-events-none opacity-20">
                <HennaPaisley className="w-40 h-40 text-henna-600 animate-float" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Headlines & Call to Actions */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-henna-100/80 border border-henna-300 text-henna-900 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm animate-pulse-subtle">
                            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                            <span>Couture Bridal & Festive Henna Experience</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-henna-600 animate-ping" />
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-henna-950 tracking-tight leading-[1.12]">
                            Intricate Henna Stories <br className="hidden sm:inline" />
                            <span className="text-henna-gradient">Woven With Pure</span>{' '}
                            <span className="italic font-normal text-gold-600 underline decoration-gold-400/40 decoration-wavy decoration-2">
                                Elegance
                            </span>
                        </h1>

                        <p className="text-stone-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Transform your most precious celebrations into timeless living tapestries.
                            Handcrafted with 100% triple-sifted organic Sojat henna, therapeutic pure essential oils,
                            and bespoke portrait storytelling for modern brides worldwide.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                            <button
                                onClick={onOpenBooking}
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-henna-900 via-henna-800 to-henna-900 text-gold-100 font-semibold text-base shadow-xl shadow-henna-900/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border border-gold-400/40"
                            >
                                <Calendar className="w-5 h-5 text-gold-300" />
                                <span>Reserve Your Wedding Date</span>
                                <ArrowRight className="w-4 h-4 text-gold-300" />
                            </button>

                            <button
                                onClick={onScrollToCalc}
                                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/90 hover:bg-white text-henna-900 font-semibold text-base border border-stone-300/80 shadow-md hover:shadow-lg hover:border-henna-400 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <span>Live Price Estimator</span>
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-4 border-t border-stone-200/80 grid grid-cols-3 gap-2 sm:gap-6 text-stone-700">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center text-henna-900 font-bold text-xl sm:text-2xl font-serif">
                                    <span>5,200</span><span className="text-gold-600">+</span>
                                </div>
                                <span className="text-[11px] sm:text-xs text-stone-500 text-center lg:text-left">
                                    Bridal Celebrations
                                </span>
                            </div>

                            <div className="flex flex-col items-center lg:items-start border-x border-stone-200 px-2 sm:px-4">
                                <div className="flex items-center text-henna-900 font-bold text-xl sm:text-2xl font-serif">
                                    <span>100</span><span className="text-gold-600">%</span>
                                </div>
                                <span className="text-[11px] sm:text-xs text-stone-500 text-center lg:text-left">
                                    Chemical-Free Organic
                                </span>
                            </div>

                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center text-henna-900 font-bold text-xl sm:text-2xl font-serif">
                                    <span>4.98</span>
                                    <div className="flex text-amber-500 ml-1">
                                        <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                                    </div>
                                </div>
                                <span className="text-[11px] sm:text-xs text-stone-500 text-center lg:text-left">
                                    Over 1,400+ 5★ Reviews
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Visual Showcase */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">

                            <div className="relative z-10 rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-gold-200/80 via-warmcream-200 to-henna-200/50 shadow-2xl border border-gold-300/60 backdrop-blur-md">

                                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-henna-950 shadow-inner group">
                                    <img
                                        src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80"
                                        alt="Intricate Indian Bridal Mehendi Art"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="eager"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-henna-950/80 via-transparent to-black/20" />

                                    <HennaCorner className="absolute top-3 left-3 w-14 h-14 text-gold-300/80" />
                                    <HennaCorner className="absolute bottom-3 right-3 w-14 h-14 text-gold-300/80 rotate-180" />

                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-gold-200 px-3 py-1.5 rounded-full text-xs font-medium border border-gold-400/40 flex items-center gap-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                                        <span>Royal Rajasthani Story</span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 bg-henna-950/90 backdrop-blur-md rounded-xl p-3.5 border border-gold-400/30 text-white">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-gold-300 font-semibold">
                                                    Bespoke Masterpiece
                                                </div>
                                                <div className="font-serif text-sm sm:text-base font-bold text-stone-100">
                                                    Radhika's Royal Jodhpur Bridal Story
                                                </div>
                                            </div>
                                            <button
                                                onClick={onScrollToGallery}
                                                className="px-3 py-1.5 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 text-xs font-medium border border-gold-400/30 transition-colors"
                                            >
                                                View &rarr;
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-stone-200/80 flex items-center gap-3 animate-float">
                                <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center font-bold">
                                    <ShieldCheck className="w-5 h-5 text-sage-600" />
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                                        Pure Organic Sojat
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-stone-500">
                                        No PPD • 0 Chemicals
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -right-4 sm:-right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-stone-200/80 flex items-center gap-3 animate-float-delayed">
                                <div className="w-10 h-10 rounded-xl bg-henna-100 text-henna-700 flex items-center justify-center font-bold">
                                    <Award className="w-5 h-5 text-henna-700" />
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                                        Deep Mahogany Stain
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-stone-500">
                                        Guaranteed Rich Color in 48h
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};