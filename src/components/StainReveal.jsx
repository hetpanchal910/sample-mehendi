import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Clock, Sun, Flame } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

export const StainReveal = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percentage);
    }, []);

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    };

    return (
        <section id="stain-reveal" className="py-16 lg:py-24 bg-gradient-to-b from-warmcream-50 via-warmcream-100 to-warmcream-50 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-10">
                <HennaMandala className="w-[600px] h-[600px] text-henna-800" spin />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>The Natural Oxidation Journey</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-henna-950 tracking-tight">
                        Witness The 48-Hour <span className="text-henna-gradient">Stain Transformation</span>
                    </h2>
                    <p className="mt-4 text-stone-600 text-base sm:text-lg">
                        Slide horizontally to discover the organic metamorphosis: from initial vibrant botanical paste to rich, deep mahogany stain that lasts up to 2-3 weeks.
                    </p>
                </div>

                {/* Interactive Comparison Slider */}
                <div className="max-w-4xl mx-auto">
                    <div
                        ref={containerRef}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize select-none border-4 border-gold-300/60 bg-stone-900"
                    >
                        {/* Right Image: Day 2 Deep Mahogany Dark Stain */}
                        <img
                            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80"
                            alt="Deep Mahogany Bridal Henna Stain"
                            className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-110"
                            draggable="false"
                        />
                        <div className="absolute top-5 right-5 bg-henna-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/50 text-gold-200 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                            <Flame className="w-3.5 h-3.5 text-gold-400" />
                            <span>Day 2: Deep Mahogany Stain</span>
                        </div>

                        {/* Left Image: Day 0 Fresh Herbal Application */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${sliderPos}%` }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                                alt="Fresh Herbal Henna Application"
                                className="absolute inset-0 w-full h-full object-cover filter brightness-95"
                                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
                                draggable="false"
                            />
                            <div className="absolute top-5 left-5 bg-sage-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sage-400/50 text-sage-200 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                                <Clock className="w-3.5 h-3.5 text-sage-300" />
                                <span>Day 0: Fresh Herbal Paste</span>
                            </div>
                        </div>

                        {/* Draggable Divider Bar */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-white to-gold-300 shadow-[0_0_15px_rgba(255,255,255,0.7)] pointer-events-none"
                            style={{ left: `${sliderPos}%` }}
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-henna-900 border-2 border-gold-300 shadow-xl flex items-center justify-center text-gold-200 pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                                <div className="flex items-center gap-0.5 text-xs font-bold">
                                    <span>‹</span>
                                    <span>›</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-3 text-xs text-stone-500 font-medium flex items-center justify-center gap-2">
                        <span>Drag slider left or right to inspect stain progression</span>
                    </div>

                    {/* 3 Step Stain Evolution Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
                        <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 text-sage-700 font-bold text-sm mb-1">
                                <Clock className="w-4 h-4" />
                                <span>Hour 0 to 6</span>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-henna-950">
                                Fresh Paste Application
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                Organic paste releases Lawsone dye slowly as essential oils penetrate deep into epidermal layers.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1">
                                <Sun className="w-4 h-4" />
                                <span>Hour 12 to 24</span>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-henna-950">
                                Bright Tangerine Bloom
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                Upon gentle paste removal, the design glows in bright pumpkin orange, ready for natural air oxidation.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 text-henna-700 font-bold text-sm mb-1">
                                <Flame className="w-4 h-4" />
                                <span>Hour 48 to 72</span>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-henna-950">
                                Royal Deep Mahogany
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                Fully matured rich burgundy-brown stain that radiates in wedding photography and lasts for weeks.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};