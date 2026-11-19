import React, { useState } from 'react';
import { Flame, Sparkles, AlertCircle, Check, ChevronRight } from 'lucide-react';
import { HennaMandala } from './HennaOrnaments';

export const AftercareGuide = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            num: '01',
            title: 'Keep Paste on for 6-8 Hours',
            subtitle: 'The longer it rests, the deeper the dye penetrates',
            desc: 'Allow the paste to dry naturally for 30 minutes. Keeping it on your hands for 6 to 8 hours (or wrapping gently in mehendi tape overnight) ensures maximum dye transfer to deeper skin layers.',
            tip: 'Stay warm! Henna thrives on body warmth.',
        },
        {
            num: '02',
            title: 'The Lemon-Sugar Seal (Nimbu-Cheeni)',
            subtitle: 'Locks moisture to prevent premature flaking',
            desc: 'Once the paste is touch-dry, dab a cotton ball with warm lemon juice and dissolved sugar over the design. The sugar seals the paste to the skin while citric acid aids continuous dye release.',
            tip: 'Do not over-saturate to avoid bleeding lines.',
        },
        {
            num: '03',
            title: 'Scrape Gently — Zero Water Contact!',
            subtitle: 'Water stops the oxidation process prematurely',
            desc: 'Never wash off henna paste with tap water or soap! Instead, gently scrape off the dried crust using a butter knife, card, or rub your palms together with warm coconut or mustard oil.',
            tip: 'Keep hands completely dry for at least 12-24 hours.',
        },
        {
            num: '04',
            title: 'Clove Steam Fumigation (Laung Dhuwaan)',
            subtitle: 'Traditional Indian secret for rich burgundy hue',
            desc: 'Heat 5-6 cloves (Laung) in a warm dry pan until fragrant smoke rises. Hold your scraped palms 6 inches above the warm clove smoke for 2-3 minutes. The heat triggers natural oxidation.',
            tip: 'Massage cold-pressed mustard oil immediately after.',
        },
    ];

    return (
        <section id="aftercare" className="py-16 lg:py-24 bg-warmcream-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>Bridal Beauty Secrets</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-henna-950 tracking-tight">
                        The Golden <span className="text-henna-gradient">Aftercare Ritual</span>
                    </h2>
                    <p className="mt-4 text-stone-600 text-base sm:text-lg">
                        Achieving that iconic, royal dark mahogany stain is an art of patience. Follow our traditional 4-step care ritual for jaw-dropping wedding day photographs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    <div className="lg:col-span-5 space-y-3">
                        {steps.map((step, idx) => (
                            <div
                                key={step.num}
                                onClick={() => setActiveStep(idx)}
                                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${activeStep === idx
                                        ? 'bg-henna-900 text-white border-henna-800 shadow-lg scale-[1.02]'
                                        : 'bg-white hover:bg-warmcream-100/80 text-stone-700 border-stone-200/80'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`font-serif text-xl sm:text-2xl font-bold ${activeStep === idx ? 'text-gold-300' : 'text-henna-800'
                                            }`}
                                    >
                                        {step.num}
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-sm sm:text-base leading-tight">
                                            {step.title}
                                        </h4>
                                        <p
                                            className={`text-xs mt-0.5 ${activeStep === idx ? 'text-stone-300' : 'text-stone-500'
                                                }`}
                                        >
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight
                                    className={`w-5 h-5 transition-transform ${activeStep === idx ? 'text-gold-300 rotate-90 sm:rotate-0' : 'text-stone-400'
                                        }`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative rounded-3xl bg-gradient-to-br from-white via-warmcream-100 to-warmcream-200 p-6 sm:p-10 border border-gold-300/60 shadow-xl overflow-hidden">
                            <HennaMandala className="absolute -bottom-12 -right-12 w-64 h-64 text-gold-500/15 pointer-events-none" />

                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gold-700 mb-2">
                                <span>Ritual Step {steps[activeStep].num} of 04</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                                <span>Zaara Studio Care</span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-henna-950 mt-1 mb-4">
                                {steps[activeStep].title}
                            </h3>

                            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                                {steps[activeStep].desc}
                            </p>

                            <div className="p-4 rounded-2xl bg-henna-900 text-gold-200 text-xs sm:text-sm font-medium flex items-start gap-3 border border-gold-400/30 shadow-sm">
                                <Flame className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-gold-300 block mb-0.5">Zaara’s Pro Artist Secret:</span>
                                    <span>{steps[activeStep].tip}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-stone-200 text-xs">
                                <div className="flex items-center gap-2 text-sage-800">
                                    <Check className="w-4 h-4 text-sage-600" />
                                    <span>Apply natural balms / shea butter</span>
                                </div>
                                <div className="flex items-center gap-2 text-rose-800">
                                    <AlertCircle className="w-4 h-4 text-rose-600" />
                                    <span>Avoid chlorinated pool water</span>
                                </div>
                                <div className="flex items-center gap-2 text-sage-800">
                                    <Check className="w-4 h-4 text-sage-600" />
                                    <span>Sleep with cotton socks/gloves</span>
                                </div>
                                <div className="flex items-center gap-2 text-rose-800">
                                    <AlertCircle className="w-4 h-4 text-rose-600" />
                                    <span>Do not exfoliate or bleach skin</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};