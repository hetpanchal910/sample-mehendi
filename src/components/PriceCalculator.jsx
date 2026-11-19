import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { HennaPaisley } from './HennaOrnaments';

export const PriceCalculator = ({ onBookWithPlan }) => {
    const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
    const [occasion, setOccasion] = useState('bridal');
    const [coverage, setCoverage] = useState('elbow');
    const [style, setStyle] = useState('rajasthani');
    const [guestCount, setGuestCount] = useState(0);
    const [includeGroom, setIncludeGroom] = useState(false);
    const [includeKit, setIncludeKit] = useState(true);

    const occasions = [
        { id: 'bridal', name: 'Royal Bridal', basePriceINR: 12000, basePriceUSD: 240, duration: '4-6 hrs', desc: 'Bespoke storytelling, bride & groom figures' },
        { id: 'sangeet', name: 'Sangeet & Party', basePriceINR: 6000, basePriceUSD: 120, duration: '2-3 hrs', desc: 'Festive chic coverage for brides or family' },
        { id: 'engagement', name: 'Engagement / Roka', basePriceINR: 4500, basePriceUSD: 90, duration: '2 hrs', desc: 'Delicate floral mandalas with elegance' },
        { id: 'festive', name: 'Festive / Karwa Chauth', basePriceINR: 2500, basePriceUSD: 50, duration: '1-1.5 hrs', desc: 'Intricate traditional palm & backhand art' },
    ];

    const coverages = [
        { id: 'palms', name: 'Palms & Wrists', multiplier: 0.75, desc: 'Front & back up to wrist line' },
        { id: 'forearm', name: 'Mid Forearm', multiplier: 1.0, desc: 'Coverage halfway to the elbow' },
        { id: 'elbow', name: 'Elbow Length + Feet', multiplier: 1.4, desc: 'Full length forearms + ankle feet' },
        { id: 'royal-full', name: 'Grand Royal All-Over', multiplier: 1.85, desc: 'Past elbows + mid-calf feet coverage' },
    ];

    const styles = [
        { id: 'rajasthani', name: 'Traditional Rajasthani', extraINR: 1000, extraUSD: 20 },
        { id: 'arabic', name: 'Arabic Floral Fusion', extraINR: 500, extraUSD: 10 },
        { id: 'portrait', name: 'Bespoke Portrait Art', extraINR: 3500, extraUSD: 70 },
        { id: 'minimalist', name: 'Modern Indo-Western', extraINR: 0, extraUSD: 0 },
    ];

    const currentOccasion = occasions.find((o) => o.id === occasion);
    const currentCoverage = coverages.find((c) => c.id === coverage);
    const currentStyle = styles.find((s) => s.id === style);

    const baseRateINR = currentOccasion.basePriceINR * currentCoverage.multiplier + currentStyle.extraINR;
    const baseRateUSD = currentOccasion.basePriceUSD * currentCoverage.multiplier + currentStyle.extraUSD;

    const groomPriceINR = includeGroom ? 2500 : 0;
    const groomPriceUSD = includeGroom ? 50 : 0;

    const kitPriceINR = includeKit ? 800 : 0;
    const kitPriceUSD = includeKit ? 15 : 0;

    const guestPriceINR = guestCount * 600;
    const guestPriceUSD = guestCount * 12;

    const totalINR = Math.round(baseRateINR + groomPriceINR + kitPriceINR + guestPriceINR);
    const totalUSD = Math.round(baseRateUSD + groomPriceUSD + kitPriceUSD + guestPriceUSD);

    const formattedTotal = currency === 'INR' ? `₹${totalINR.toLocaleString('en-IN')}` : `$${totalUSD}`;

    const handleBooking = () => {
        onBookWithPlan({
            occasion: currentOccasion.name,
            coverage: currentCoverage.name,
            style: currentStyle.name,
            guestCount,
            includeGroom,
            includeKit,
            estimatedPrice: formattedTotal,
        });
    };

    return (
        <section id="calculator" className="py-16 lg:py-24 bg-warmcream-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-henna-100 border border-henna-300 text-henna-900 text-xs font-semibold mb-3">
                        <Calculator className="w-3.5 h-3.5 text-henna-700" />
                        <span>Transparent Pricing Transparency</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-henna-950 tracking-tight">
                        Interactive Package & <span className="text-henna-gradient">Price Estimator</span>
                    </h2>
                    <p className="mt-4 text-stone-600 text-base sm:text-lg">
                        Personalize your mehendi elements to calculate an instant customized estimate for your special day.
                    </p>

                    <div className="inline-flex items-center gap-1 mt-6 p-1 bg-warmcream-200/80 rounded-full border border-stone-300 text-xs font-semibold">
                        <button
                            onClick={() => setCurrency('INR')}
                            className={`px-4 py-1.5 rounded-full transition-all ${currency === 'INR'
                                    ? 'bg-henna-900 text-gold-200 shadow-sm'
                                    : 'text-stone-700 hover:text-stone-900'
                                }`}
                        >
                            Indian Rupee (₹)
                        </button>
                        <button
                            onClick={() => setCurrency('USD')}
                            className={`px-4 py-1.5 rounded-full transition-all ${currency === 'USD'
                                    ? 'bg-henna-900 text-gold-200 shadow-sm'
                                    : 'text-stone-700 hover:text-stone-900'
                                }`}
                        >
                            US Dollar ($)
                        </button>
                    </div>
                </div>

                {/* Interactive Estimator Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    <div className="lg:col-span-7 xl:col-span-8 space-y-8 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm">

                        {/* Step 1: Occasion */}
                        <div>
                            <label className="block text-sm font-bold text-henna-950 uppercase tracking-wider mb-3">
                                1. Select Occasion
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {occasions.map((o) => (
                                    <button
                                        key={o.id}
                                        onClick={() => setOccasion(o.id)}
                                        className={`p-4 rounded-2xl border text-left transition-all ${occasion === o.id
                                                ? 'border-henna-700 bg-henna-50/70 shadow-sm ring-2 ring-henna-600/30'
                                                : 'border-stone-200 hover:border-stone-300 bg-white/50'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif font-bold text-base text-henna-950">
                                                {o.name}
                                            </span>
                                            {occasion === o.id && (
                                                <div className="w-5 h-5 rounded-full bg-henna-700 text-gold-200 flex items-center justify-center">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-stone-500 mt-1">{o.desc}</p>
                                        <div className="text-[11px] font-semibold text-gold-700 mt-2 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {o.duration}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Coverage */}
                        <div>
                            <label className="block text-sm font-bold text-henna-950 uppercase tracking-wider mb-3">
                                2. Hand & Feet Coverage
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {coverages.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => setCoverage(c.id)}
                                        className={`p-4 rounded-2xl border text-left transition-all ${coverage === c.id
                                                ? 'border-henna-700 bg-henna-50/70 shadow-sm ring-2 ring-henna-600/30'
                                                : 'border-stone-200 hover:border-stone-300 bg-white/50'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-sm text-henna-950">{c.name}</span>
                                            {coverage === c.id && (
                                                <div className="w-5 h-5 rounded-full bg-henna-700 text-gold-200 flex items-center justify-center">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-stone-500 mt-1">{c.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 3: Art Style */}
                        <div>
                            <label className="block text-sm font-bold text-henna-950 uppercase tracking-wider mb-3">
                                3. Artistic Style Preference
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {styles.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setStyle(s.id)}
                                        className={`p-3 rounded-xl border text-center transition-all ${style === s.id
                                                ? 'border-henna-700 bg-henna-900 text-gold-200 font-semibold shadow-sm'
                                                : 'border-stone-200 hover:border-stone-300 bg-white text-stone-700'
                                            }`}
                                    >
                                        <span className="text-xs sm:text-sm block">{s.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 4: Add-ons & Guests */}
                        <div>
                            <label className="block text-sm font-bold text-henna-950 uppercase tracking-wider mb-3">
                                4. Celebratory Add-Ons
                            </label>

                            <div className="space-y-3">
                                <label className="flex items-center justify-between p-3.5 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50/50 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={includeGroom}
                                            onChange={(e) => setIncludeGroom(e.target.checked)}
                                            className="w-4 h-4 text-henna-700 rounded border-stone-300 focus:ring-henna-600"
                                        />
                                        <div>
                                            <div className="text-sm font-semibold text-stone-800">Groom Henna Session</div>
                                            <div className="text-xs text-stone-500">Minimalist crest, initials & mandala motif</div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-henna-800">
                                        +{currency === 'INR' ? '₹2,500' : '$50'}
                                    </span>
                                </label>

                                <label className="flex items-center justify-between p-3.5 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50/50 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={includeKit}
                                            onChange={(e) => setIncludeKit(e.target.checked)}
                                            className="w-4 h-4 text-henna-700 rounded border-stone-300 focus:ring-henna-600"
                                        />
                                        <div>
                                            <div className="text-sm font-semibold text-stone-800">Luxury Bridal Aftercare Hamper</div>
                                            <div className="text-xs text-stone-500">Lemon-sugar spray, Nilgiri clove balm & cotton gloves</div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-henna-800">
                                        +{currency === 'INR' ? '₹800' : '$15'}
                                    </span>
                                </label>

                                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-stone-800">
                                            Family & Sangeet Guests Henna ({guestCount} guests)
                                        </span>
                                        <span className="text-xs font-bold text-henna-800">
                                            {guestCount > 0 ? `+${currency === 'INR' ? `₹${guestPriceINR}` : `$${guestPriceUSD}`}` : 'None'}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="30"
                                        step="2"
                                        value={guestCount}
                                        onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                        className="w-full accent-henna-700 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                                        <span>Just Bride</span>
                                        <span>10 Guests</span>
                                        <span>20 Guests</span>
                                        <span>30+ Guests</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Summary / Cart Receipt Sticky Card */}
                    <div className="lg:col-span-5 xl:col-span-4 sticky top-28">
                        <div className="bg-gradient-to-b from-henna-950 to-henna-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-gold-400/40 relative overflow-hidden">
                            <HennaPaisley className="absolute -bottom-8 -right-8 w-48 h-48 text-gold-400/10 pointer-events-none" />

                            <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold">
                                    Estimated Summary
                                </span>
                                <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30">
                                    Instant Quote
                                </span>
                            </div>

                            <div className="py-4 space-y-3 text-xs sm:text-sm text-stone-300 border-b border-white/10">
                                <div className="flex justify-between">
                                    <span className="text-stone-300 font-medium">Package:</span>
                                    <span className="text-white font-semibold">{currentOccasion.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-300">Coverage:</span>
                                    <span className="text-white font-semibold">{currentCoverage.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-300">Style:</span>
                                    <span className="text-white font-semibold">{currentStyle.name}</span>
                                </div>
                                {includeGroom && (
                                    <div className="flex justify-between text-gold-300">
                                        <span>Groom Henna:</span>
                                        <span>Included</span>
                                    </div>
                                )}
                                {includeKit && (
                                    <div className="flex justify-between text-gold-300">
                                        <span>Aftercare Hamper:</span>
                                        <span>Included</span>
                                    </div>
                                )}
                                {guestCount > 0 && (
                                    <div className="flex justify-between">
                                        <span>Sangeet Guests:</span>
                                        <span>{guestCount} people</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-xs pt-1">
                                    <span className="text-stone-400">Estimated Duration:</span>
                                    <span className="text-stone-300">{currentOccasion.duration}</span>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="text-xs uppercase tracking-wider text-gold-300 mb-1">
                                    Estimated Total Investment
                                </div>
                                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-200">
                                    {formattedTotal}
                                </div>
                                <p className="text-[11px] text-stone-400 mt-1">
                                    *Includes travel within city limits, 100% organic henna & sealants.
                                </p>

                                <button
                                    onClick={handleBooking}
                                    className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-henna-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4 text-henna-950" />
                                    <span>Lock In This Package</span>
                                    <ArrowRight className="w-4 h-4 text-henna-950" />
                                </button>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-[11px] text-stone-300">
                                <div className="flex items-center gap-2">
                                    <Check className="w-3.5 h-3.5 text-gold-400" />
                                    <span>Zero cancellation fee up to 30 days prior</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-3.5 h-3.5 text-gold-400" />
                                    <span>Complimentary design patch test provided</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};