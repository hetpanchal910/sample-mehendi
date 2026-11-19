import React from 'react';
import { Leaf, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export const WhyOrganic = () => {
    const safetyPoints = [
        {
            title: 'Triple-Sifted Sojat Leaves',
            desc: 'Sourced directly from the world-famous organic henna plantations of Sojat, Rajasthan, milled to micro-fine silk texture.',
            icon: Leaf,
        },
        {
            title: 'Therapeutic Essential Oils',
            desc: 'Hand-blended with high-grade pure Nilgiri Eucalyptus, Tea Tree, and French Lavender oils to naturally stimulate dark dye release.',
            icon: Sparkles,
        },
        {
            title: '100% Chemical & PPD Free',
            desc: 'Strictly zero toxic coal-tar dyes, zero parabens, zero chemical darkeners. Natural oxidation without synthetic burns.',
            icon: ShieldCheck,
        },
        {
            title: 'Maternity & Sensitive Skin Safe',
            desc: 'Hypoallergenic and dermatologist reviewed. Safe for pregnant mothers, toddlers, and sensitive skin brides.',
            icon: HeartPulse,
        },
    ];

    return (
        <section id="organic" className="py-16 lg:py-24 bg-gradient-to-b from-warmcream-50 via-warmcream-100/50 to-warmcream-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-100 border border-sage-300 text-sage-900 text-xs font-semibold mb-3">
                        <Leaf className="w-3.5 h-3.5 text-sage-700" />
                        <span>Pure Botanical Integrity</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-henna-950 tracking-tight">
                        The 100% Organic <span className="text-henna-gradient">Henna Promise</span>
                    </h2>
                    <p className="mt-4 text-stone-600 text-base sm:text-lg">
                        Your skin deserves nothing less than nature's purest herbs. We freshly prepare each batch of paste 24 hours before your event with fresh lemon juice and therapeutic botanicals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {safetyPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-sage-700" />
                                </div>
                                <h3 className="font-serif font-bold text-lg text-henna-950 mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-3xl bg-gradient-to-r from-henna-950 via-henna-900 to-henna-950 p-6 sm:10 text-white shadow-xl border border-gold-400/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gold-300 font-bold text-sm tracking-wider uppercase">
                                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                <span>Zaara Henna Standard</span>
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-100">
                                Fresh Farm-to-Cone Formulation
                            </h3>
                            <p className="text-stone-300 text-sm leading-relaxed">
                                Hand-poured cones rolled in food-grade cellophane, blended with organic sugar, lemon juice, and pure therapeutic essential oils. Natural earthy aroma that calms wedding jitters.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-gold-200 text-xs border border-white/10">
                                    🌿 100% Rajasthani Leaves
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-gold-200 text-xs border border-white/10">
                                    🌱 Vegan & Cruelty Free
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-gold-200 text-xs border border-white/10">
                                    ✨ Fresh Batch Every 48h
                                </span>
                            </div>
                        </div>

                        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/30 space-y-3">
                            <div className="flex items-center gap-2 text-rose-300 font-bold text-sm tracking-wide uppercase">
                                <AlertTriangle className="w-4 h-4 text-rose-400" />
                                <span>Beware of Commercial Chemical Henna</span>
                            </div>
                            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                                Many street vendors use "Instant/Emergency Black Henna" containing toxic chemical dyes like PPD (para-phenylenediamine), kerosene, or battery acid that stain immediately but cause permanent skin scarring and blistering.
                            </p>
                            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-600/40 text-xs text-rose-200 font-medium">
                                🛡️ We never use instant black cones. Authentic pure henna always requires 24-48 hours of natural air oxidation to achieve its deepest mahogany color.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};